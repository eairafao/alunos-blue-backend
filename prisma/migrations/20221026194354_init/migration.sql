-- CreateTable
CREATE TABLE "Alunos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT,
    "ra" TEXT NOT NULL,
    "curso" TEXT NOT NULL,
    "classe" TEXT NOT NULL,
    "idade" INTEGER,

    CONSTRAINT "Alunos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_email_key" ON "Alunos"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Alunos_ra_key" ON "Alunos"("ra");
