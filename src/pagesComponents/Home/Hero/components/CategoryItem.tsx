import { FC } from "react";
import { Category } from "@Interfaces/category";
import Icon from "@Shared/components/Icon";
import {
  CategoryItemWrapper,
  CategoryItemTitle,
  CategoryIcon,
} from "../styles";

interface IProps {
  data: Category;
  onClickCategory: (category: Category) => void;
}
const CategoryItem: FC<IProps> = ({ data, onClickCategory }) => {
  function handleClicked() {
    onClickCategory(data);
  }
  return (
    <CategoryItemWrapper onClick={handleClicked}>
      <CategoryIcon>
        <Icon name={data.icon} />
      </CategoryIcon>
      <CategoryItemTitle>{data.name}</CategoryItemTitle>
    </CategoryItemWrapper>
  );
};

export default CategoryItem;
