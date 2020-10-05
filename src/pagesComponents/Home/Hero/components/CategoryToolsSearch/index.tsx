import { useMemo } from "react";
import { Wrapper, Content, ToolItem } from "./styles";
import useCategoryTools from "@Hooks/useCategoryTools";

interface IProps {
  searchText: string;
}

const CategoryToolsSearch = ({ searchText }: IProps) => {
  const { getCategoryToolsByName } = useCategoryTools();
  const tools = useMemo(() => getCategoryToolsByName(searchText), [searchText]);
  return (
    <Wrapper>
      <Content>
        {tools.map((item) => (
          <ToolItem key={item.id}>{item.title}</ToolItem>
        ))}
      </Content>
    </Wrapper>
  );
};

export default CategoryToolsSearch;
