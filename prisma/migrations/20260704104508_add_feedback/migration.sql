-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "page" TEXT NOT NULL,
    "componentPath" TEXT NOT NULL,
    "currentText" TEXT NOT NULL,
    "suggestedEdit" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
