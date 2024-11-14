import data from "@/data.json";
import { Heading2, ParagraphCafe, ParagraphPret } from "@/components/Text";
import Map from "@/layout/Location/Map";
import styled from "@emotion/styled";
import { ButtonBlue } from "@/components/Button";

const Location = () => {
  const { greeting, locationInfo } = data;

  return (
    <>
      <Heading2>오시는 길</Heading2>
      <ParagraphCafe>{greeting.eventDetail}</ParagraphCafe>
      <Map />
      <LocationInfoWrap>
        {locationInfo.map((item, index) => {
          return (
            <LocationInfo key={index}>
              <ParagraphPret>{item.title}</ParagraphPret>
              <ParagraphPret>{item.desc}</ParagraphPret>
            </LocationInfo>
          );
        })}
      </LocationInfoWrap>
      <ButtonWrap>
        <ButtonBlue>카카오톡 공유하기</ButtonBlue>
        <ButtonBlue>URL 복사하기</ButtonBlue>
      </ButtonWrap>
    </>
  );
};

export default Location;

const LocationInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`;

const LocationInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const ButtonWrap = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
