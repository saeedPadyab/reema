import {
  Wrapper,
  Header,
  Content,
  CategoryTitle,
  CloseIcon,
  ToolItem,
} from "./styles";
import Icon from "@Shared/components/Icon";
import { Category } from "@Interfaces/category";
import useCategoryTools from "@Hooks/useCategoryTools";
import { useMemo } from "react";

interface IProps {
  category: Category | undefined;
  onClose: () => void;
}

const CategoryTools = ({ category, onClose }: IProps) => {
  const { getCategoryToolsById } = useCategoryTools();
  const tools = useMemo(
    () => (category ? getCategoryToolsById(category.id) : []),
    [category]
  );
  function handleClose() {
    onClose();
  }
  return (
    <Wrapper>
      <Header>
        <CategoryTitle>{category?.name}</CategoryTitle>
        <CloseIcon onClick={handleClose}>
          <Icon name="close" />
        </CloseIcon>
      </Header>
      <Content>
        {tools.map((item) => (
          <ToolItem key={item.id}>{item.title}</ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryTools;
