-- ==============================================================================
-- ESQUEMA SQL COMPLETO Y SEED DE DATOS — ENVÍOS DOSRUEDAS (POSTGRESQL / SUPABASE)
-- Generado directamente desde prisma/schema.prisma y prisma/seed.ts
-- ==============================================================================

-- 1. TIPOS ENUMERADOS
CREATE TYPE "ServiceType" AS ENUM (
  'LOW_COST',
  'EXPRESS'
);

-- 2. TABLAS DEL SISTEMA

-- Tabla: User
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- Tabla: Post
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Tabla: PriceRange (Rangos y Tarifas Oficiales)
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "distanciaMinKm" DOUBLE PRECISION NOT NULL,
    "distanciaMaxKm" DOUBLE PRECISION NOT NULL,
    "precioRango" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);

-- Tabla: Feedback (Sugerencias y Opiniones)
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "componentPath" TEXT NOT NULL,
    "currentText" TEXT NOT NULL,
    "suggestedEdit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- Tabla: ImageMetadata (Administrador de Assets de Imagen)
CREATE TABLE "ImageMetadata" (
    "id" SERIAL NOT NULL,
    "relativePath" TEXT NOT NULL,
    "currentDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImageMetadata_pkey" PRIMARY KEY ("id")
);

-- Tabla: AiPromptSuggestion (Prompts de IA sugeridos por imagen)
CREATE TABLE "AiPromptSuggestion" (
    "id" SERIAL NOT NULL,
    "promptText" TEXT NOT NULL,
    "modelUsed" TEXT,
    "aspectRatio" TEXT,
    "imageId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AiPromptSuggestion_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "AiPromptSuggestion_imageId_fkey" FOREIGN KEY ("imageId") REFERENCES "ImageMetadata"("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- 3. ÍNDICES Y RESTRICCIONES ÚNICAS
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE UNIQUE INDEX "ImageMetadata_relativePath_key" ON "ImageMetadata"("relativePath");

-- ==============================================================================
-- DATOS INICIALES (SEED DATA & TARIFAS OFICIALES 2026)
-- ==============================================================================

-- Usuarios de prueba
INSERT INTO "User" ("id", "email") VALUES
(1, 'alice@enviosdosruedas.com'),
(2, 'bob@enviosdosruedas.com');

-- Posts de prueba
INSERT INTO "Post" ("id", "title", "authorId") VALUES
(1, 'Primer Envío Express Coordinado!', 1),
(2, 'Entrega en 45 minutos en el Centro', 1),
(3, 'Excelente servicio lowcost para mi comercio', 2);

-- Tarifas de Rangos de Precios (PriceRange)
INSERT INTO "PriceRange" ("id", "serviceType", "distanciaMinKm", "distanciaMaxKm", "precioRango", "descripcion") VALUES
-- Servicio LOW_COST (Programados)
(1, 'LOW_COST', 0, 3, 3000, 'LOW_COST: 0 a 3 km'),
(2, 'LOW_COST', 3, 5, 4000, 'LOW_COST: 3 a 5 km'),
(3, 'LOW_COST', 5, 7, 5300, 'LOW_COST: 5 a 7 km'),
(4, 'LOW_COST', 7, 10, 7000, 'LOW_COST: 7 a 10 km (Precio base)'),
(5, 'LOW_COST', 10, 9999, 700, 'LOW_COST: km adicional excedente (10+ km)'),

-- Servicio EXPRESS (Prioritarios <3h)
(6, 'EXPRESS', 0, 3, 3700, 'EXPRESS: 0 a 3 km'),
(7, 'EXPRESS', 3, 5, 4600, 'EXPRESS: 3 a 5 km'),
(8, 'EXPRESS', 5, 7, 6100, 'EXPRESS: 5 a 7 km'),
(9, 'EXPRESS', 7, 10, 8200, 'EXPRESS: 7 a 10 km (Precio base)'),
(10, 'EXPRESS', 10, 9999, 1000, 'EXPRESS: km adicional excedente (10+ km)');

-- Ajustar secuencias de ID
SELECT setval(PG_GET_SERIALSEQUENCE('"User"', 'id'), 2);
SELECT setval(PG_GET_SERIALSEQUENCE('"Post"', 'id'), 3);
SELECT setval(PG_GET_SERIALSEQUENCE('"PriceRange"', 'id'), 10);
