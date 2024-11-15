import styled from "@emotion/styled";
import data from "@/data.json";
import { ButtonWhite } from "@/components/Button";

const MapButtons = () => {
  const { mapInfo } = data;

  return (
    <ButtonWrap>
      <ButtonWhite href={mapInfo.naverMap} target="_blank">
        네이버 지도로 길찾기
      </ButtonWhite>
      <ButtonWhite href={mapInfo.kakaoMap} target="_blank">
        카카오 맵으로 길찾기
      </ButtonWhite>
    </ButtonWrap>
  );
};

export default MapButtons;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0;
`;
