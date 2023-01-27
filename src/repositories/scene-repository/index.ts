import { prisma } from "@/config";

async function findAllScenes() {
  return prisma.scene.findMany({
    include: { SceneOptions: { include: { Option: { select: { description: true } } } } },
  });
}

async function findSceneById(sceneId: number) {
  return prisma.scene.findFirst({ where: { id: sceneId } });
}
const sceneRepository = {
  findAllScenes,
  findSceneById,
};

export default sceneRepository;
