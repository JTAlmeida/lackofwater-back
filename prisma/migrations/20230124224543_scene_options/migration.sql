-- CreateTable
CREATE TABLE "SceneOptions" (
    "id" SERIAL NOT NULL,
    "sceneId" INTEGER NOT NULL,
    "optionId" INTEGER NOT NULL,

    CONSTRAINT "SceneOptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Option" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SceneOptions" ADD CONSTRAINT "SceneOptions_sceneId_fkey" FOREIGN KEY ("sceneId") REFERENCES "Scene"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SceneOptions" ADD CONSTRAINT "SceneOptions_optionId_fkey" FOREIGN KEY ("optionId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
