import sceneRepository from "@/repositories/scene-repository";

async function getAllScenes() {
  const scenes = await sceneRepository.findAllScenes();

  return scenes;
}

async function getSceneById(sceneId: number) {
  const scene = await sceneRepository.findSceneById(sceneId);

  return scene;
}

const sceneService = {
  getAllScenes,
  getSceneById,
};

export default sceneService;
