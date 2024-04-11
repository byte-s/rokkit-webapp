-- CreateTable
CREATE TABLE "Projects" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "goals" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "results" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
