import styled from "@emotion/styled";
import data from "@/data.json";
import mainImg from "@/assets/images/main.png";
import { Heading1, ParagraphHipi } from "@/components/Text";

const Main = () => {
  const { greeting } = data;

  return (
    <>
      <Heading1>{greeting.title}</Heading1>
      <MainImg src={mainImg} />
      <ParagraphHipi>{greeting.subTitle}</ParagraphHipi>
    </>
  );
};
export default Main;

const MainImg = styled.img`
  width: 100%;
  max-width: 330px;
  margin-bottom: 18px;
`;
