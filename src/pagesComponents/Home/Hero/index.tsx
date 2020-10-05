import { FC } from "react";
import SearchBox from "./components/SearchBox";
import Categories from "./components/Categories";
import { Wrapper, Section, Content, Title, Description } from "./styles";
import useTranslation from "@Hooks/useTranslation";

interface IProps {}

const List: FC<IProps> = () => {
  const { direction } = useTranslation();
  return (
    <Wrapper
      img={
        "https://www.moeshomecollection.com/wp-content/uploads/2019/10/FN-1039-05_50-940x940.jpg"
      }
      direction={direction}
    >
      <Section>
        <Content>
          <Title>Get the job done By professionals</Title>
          <Description>
            Sweden's most popular service for getting in touch with companies.
            711 857 have received help so far!
          </Description>
          <SearchBox />
          <Categories />
        </Content>
      </Section>
    </Wrapper>
  );
};

export default List;
