import { data as categories } from "@Core/categoriesData";
import { data as tools } from "@Core/categoryTools";
import { Tool } from "@Interfaces/tool";

const useCategoryTools = () => {
  const getCategories = () => {
    return categories;
  };
  const getCategoryToolsById = (categoryId: string): Tool[] => {
    return tools ? tools.filter((item) => item.categoryId === categoryId) : [];
  };
  const getCategoryToolsByName = (searchText: string): Tool[] => {
    const data = tools
      ? tools.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      : [];
    return data;
  };
  return { getCategories, getCategoryToolsById, getCategoryToolsByName };
};

export default useCategoryTools;
