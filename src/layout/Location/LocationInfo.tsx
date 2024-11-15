import styled from "@emotion/styled";
import data from "@/data.json";
import { ParagraphPret } from "@/components/Text";

const LocationInfo = () => {
  const { locationInfo } = data;
  return (
    <InfoWrap>
      {locationInfo.map((item, index) => {
        return (
          <Info key={index}>
            <ParagraphPret>{item.title}</ParagraphPret>
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
  padding: 0 15px;
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
`;
