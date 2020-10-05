import { useMemo, useState } from "react";
import { Category } from "@Interfaces/category";
import CategoryItem from "./CategoryItem";
import CategoryTools from "./CategoryTools";
import { CategoriesWrapper } from "../styles";
import useCategoryTools from "@Hooks/useCategoryTools";

const Categories = () => {
  const [isOpenToolsList, toggleToolsList] = useState(false);
  const [selectedCategory, setCategory] = useState<Category>();
  const { getCategories } = useCategoryTools();
  const categories = useMemo(() => getCategories(), []);

  function handleClickCategory(category: Category) {
    setCategory(category);
    toggleToolsList(true);
  }
  function handleCloseCategoryTools() {
    toggleToolsList(false);
  }
  return isOpenToolsList ? (
    <CategoryTools
      category={selectedCategory}
      onClose={handleCloseCategoryTools}
    />
  ) : (
    <CategoriesWrapper>
      {categories
        ? categories.map((item) => (
            <CategoryItem
              key={item.id}
              data={item}
              onClickCategory={handleClickCategory}
            />
          ))
        : null}
    </CategoriesWrapper>
  );
};

export default Categories;
