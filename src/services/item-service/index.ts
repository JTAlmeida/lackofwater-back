import itemRepository from "@/repositories/item-repository";

async function getAllItems() {
  const items = await itemRepository.findAllItems();

  return items;
}

async function getItemById(itemId: number) {
  const item = await itemRepository.findItemById(itemId);

  return item;
}

const itemService = {
  getAllItems,
  getItemById,
};

export default itemService;
