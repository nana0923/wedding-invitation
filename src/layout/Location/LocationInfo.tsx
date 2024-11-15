import styled from "@emotion/styled";
import data from "@/data.json";
import { ParagraphPret, ParagraphPretBold } from "@/components/Text";

const LocationInfo = () => {
  const { locationInfo } = data;
  return (
    <InfoWrap>
      {locationInfo.map((item, index) => {
        return (
          <Info key={index}>
            <ParagraphPretBold>{item.title}</ParagraphPretBold>
            <ParagraphPret>{item.desc}</ParagraphPret>
          </Info>
        );
      })}
    </InfoWrap>
  );
};
export default LocationInfo;

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 0 5px;
  margin: 10px 0;
  @media screen and (max-width: 400px) {
    gap: 40px;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 400px) {
    flex-direction: column;
    gap: 10px;
  }
`;
