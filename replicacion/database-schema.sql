-- ============================================================================
-- ESQUEMA DE BASE DE DATOS POSTGRESQL: ENVÍOS DOSRUEDAS (MAR DEL PLATA)
-- Archivo: replicacion/database-schema.sql
-- Motor: PostgreSQL 14+ / Prisma ORM Compatible
-- Descripción: Tablas relacionales, tipos enumerados, índices de búsqueda
--              rápida de tarifas e inserciones de datos semilla iniciales.
-- ============================================================================

-- 1. EXTENSIONES Y TIPOS ENUMERADOS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DO $$ BEGIN
    CREATE TYPE "ServiceType" AS ENUM ('LOW_COST', 'EXPRESS');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- 2. TABLA DE USUARIOS DEL SISTEMA
CREATE TABLE IF NOT EXISTS "User" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(255) NOT NULL UNIQUE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 3. TABLA DE PUBLICACIONES / COMUNICADOS
CREATE TABLE IF NOT EXISTS "Post" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(255) NOT NULL,
    "authorId" INTEGER NOT NULL REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 4. TABLA DE RANGOS TARIFARIOS (PRICE RANGE)
-- Motor de tarifas por distancia vial para la ciudad de Mar del Plata
CREATE TABLE IF NOT EXISTS "PriceRange" (
    "id" SERIAL PRIMARY KEY,
    "serviceType" "ServiceType" NOT NULL,
    "distanciaMinKm" DOUBLE PRECISION NOT NULL,
    "distanciaMaxKm" DOUBLE PRECISION NOT NULL,
    "precioRango" DOUBLE PRECISION NOT NULL,
    "descripcion" VARCHAR(255) NOT NULL
);

-- Índices para búsqueda instantánea en Server Action de cotización
CREATE INDEX IF NOT EXISTS "idx_pricerange_service_distance" 
ON "PriceRange" ("serviceType", "distanciaMinKm", "distanciaMaxKm");

-- 5. TABLA DE FEEDBACK OPERATIVO Y DE COPYS
CREATE TABLE IF NOT EXISTS "Feedback" (
    "id" SERIAL PRIMARY KEY,
    "page" VARCHAR(120) NOT NULL,
    "componentPath" VARCHAR(255) NOT NULL,
    "currentText" TEXT NOT NULL,
    "suggestedEdit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 6. TABLA DE METADATOS DE IMÁGENES Y PROMPTS DE IA
CREATE TABLE IF NOT EXISTS "ImageMetadata" (
    "id" SERIAL PRIMARY KEY,
    "relativePath" VARCHAR(255) NOT NULL UNIQUE,
    "currentDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS "AiPromptSuggestion" (
    "id" SERIAL PRIMARY KEY,
    "promptText" TEXT NOT NULL,
    "modelUsed" VARCHAR(100),
    "aspectRatio" VARCHAR(20),
    "imageId" INTEGER NOT NULL REFERENCES "ImageMetadata"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- 7. DISPARADOR DE ACTUALIZACIÓN DE TIMESTAMP
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW."updatedAt" = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS update_image_metadata_updated_at ON "ImageMetadata";
CREATE TRIGGER update_image_metadata_updated_at
    BEFORE UPDATE ON "ImageMetadata"
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ============================================================================
-- 8. DATOS SEMILLA OFICIALES (SEED DATA 2026 - MAR DEL PLATA)
-- ============================================================================

-- Limpiar tarifas previas para garantizar unicidad
TRUNCATE TABLE "PriceRange" RESTART IDENTITY;

-- Tarifas LowCost (Reparto en el día, corte 13:00 hs)
INSERT INTO "PriceRange" ("serviceType", "distanciaMinKm", "distanciaMaxKm", "precioRango", "descripcion") VALUES
('LOW_COST', 0.0, 3.0, 3000.0, 'LOW_COST: 0 a 3 km ($3.000)'),
('LOW_COST', 3.0, 5.0, 4000.0, 'LOW_COST: 3 a 5 km ($4.000)'),
('LOW_COST', 5.0, 7.0, 5300.0, 'LOW_COST: 5 a 7 km ($5.300)'),
('LOW_COST', 7.0, 10.0, 7000.0, 'LOW_COST: 7 a 10 km ($7.000)'),
('LOW_COST', 10.0, 9999.0, 700.0, 'LOW_COST: Kilómetro lineal total (+$700/km)');

-- Tarifas Express (Franja de 3 hs con 2 hs de anticipación, corte 15:00 hs)
INSERT INTO "PriceRange" ("serviceType", "distanciaMinKm", "distanciaMaxKm", "precioRango", "descripcion") VALUES
('EXPRESS', 0.0, 3.0, 3700.0, 'EXPRESS: 0 a 3 km ($3.700)'),
('EXPRESS', 3.0, 5.0, 4600.0, 'EXPRESS: 3 a 5 km ($4.600)'),
('EXPRESS', 5.0, 7.0, 6100.0, 'EXPRESS: 5 a 7 km ($6.100)'),
('EXPRESS', 7.0, 10.0, 8200.0, 'EXPRESS: 7 a 10 km ($8.200)'),
('EXPRESS', 10.0, 9999.0, 1000.0, 'EXPRESS: Kilómetro lineal total (+$1.000/km)');

-- ============================================================================
-- 9. ESQUEMA DECLARATIVO PRISMA (prisma/schema.prisma)
-- Para uso con Prisma CLI (`pnpm prisma db push` o `pnpm prisma migrate dev`)
-- ============================================================================
/*
datasource db {
  provider = "postgresql"
}

generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

enum ServiceType {
  LOW_COST
  EXPRESS
}

model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  posts     Post[]
  createdAt DateTime @default(now())
}

model Post {
  id        Int      @id @default(autoincrement())
  title     String
  authorId  Int
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
}

model PriceRange {
  id             Int         @id @default(autoincrement())
  serviceType    ServiceType
  distanciaMinKm Float
  distanciaMaxKm Float
  precioRango    Float
  descripcion    String

  @@index([serviceType, distanciaMinKm, distanciaMaxKm])
}

model Feedback {
  id            Int      @id @default(autoincrement())
  page          String
  componentPath String
  currentText   String
  suggestedEdit String
  createdAt     DateTime @default(now())
}

model ImageMetadata {
  id                 Int                  @id @default(autoincrement())
  relativePath       String               @unique
  currentDescription String
  createdAt          DateTime             @default(now())
  updatedAt          DateTime             @updatedAt
  promptSuggestions  AiPromptSuggestion[]
}

model AiPromptSuggestion {
  id          Int           @id @default(autoincrement())
  promptText  String
  modelUsed   String?
  aspectRatio String?
  imageId     Int
  image       ImageMetadata @relation(fields: [imageId], references: [id], onDelete: Cascade)
  createdAt   DateTime      @default(now())
}
*/
