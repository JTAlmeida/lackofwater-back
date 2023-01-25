/*
  Warnings:

  - Added the required column `imgUrl` to the `Enemy` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Enemy" ADD COLUMN     "imgUrl" TEXT NOT NULL;
