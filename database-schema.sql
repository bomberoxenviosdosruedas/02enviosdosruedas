-- Schema SQL Extraído para Envíos DosRuedas (PostgreSQL)

CREATE TYPE "ServiceType" AS ENUM ('LOW_COST', 'EXPRESS');

-- Tabla de Usuarios Administradores
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- Tabla de Publicaciones / Notas
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    CONSTRAINT "Post_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Tabla de Rangos de Precios Dinámicos (Base para pricing.ts)
CREATE TABLE "PriceRange" (
    "id" SERIAL NOT NULL,
    "serviceType" "ServiceType" NOT NULL,
    "distanciaMinKm" DOUBLE PRECISION NOT NULL,
    "distanciaMaxKm" DOUBLE PRECISION NOT NULL,
    "precioRango" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,
    CONSTRAINT "PriceRange_pkey" PRIMARY KEY ("id")
);

-- Tabla de Feedback de Contenido (/revisar)
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "componentPath" TEXT NOT NULL,
    "currentText" TEXT NOT NULL,
    "suggestedEdit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- Tabla de Metadatos de Imágenes para la Galería IA
CREATE TABLE "ImageMetadata" (
    "id" SERIAL NOT NULL,
    "relativePath" TEXT NOT NULL,
    "currentDescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    CONSTRAINT "ImageMetadata_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "ImageMetadata_relativePath_key" ON "ImageMetadata"("relativePath");

-- Tabla de Sugerencias de Prompts IA
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

-- Seed de Datos Iniciales de Tarifas (Fallbacks 2026)
INSERT INTO "PriceRange" ("serviceType", "distanciaMinKm", "distanciaMaxKm", "precioRango", "descripcion") VALUES
('EXPRESS', 0, 3, 3700, 'Express Zona 1 (0-3 km)'),
('EXPRESS', 3, 5, 4600, 'Express Zona 2 (3-5 km)'),
('EXPRESS', 5, 7, 6100, 'Express Zona 3 (5-7 km)'),
('EXPRESS', 7, 10, 8200, 'Express Zona 4 (7-10 km)'),
('EXPRESS', 10, 9999, 1000, 'Express Excedente por km'),
('LOW_COST', 0, 3, 3000, 'LowCost Zona 1 (0-3 km)'),
('LOW_COST', 3, 5, 4000, 'LowCost Zona 2 (3-5 km)'),
('LOW_COST', 5, 7, 5300, 'LowCost Zona 3 (5-7 km)'),
('LOW_COST', 7, 10, 7000, 'LowCost Zona 4 (7-10 km)'),
('LOW_COST', 10, 9999, 700, 'LowCost Excedente por km');
