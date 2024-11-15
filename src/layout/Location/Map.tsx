import styled from "@emotion/styled";
import { ButtonWhite } from "@/components/Button";
import data from "@/data.json";

const Map = () => {
  const { mapInfo } = data;
  return (
    <MapContent>
      <MyMap />
      <ButtonWrap>
        <ButtonWhite href={mapInfo.naverMap} target="_blank">
          네이버 지도로 길찾기
        </ButtonWhite>
        <ButtonWhite href={mapInfo.kakaoMap} target="_blank">
          카카오 맵으로 길찾기
        </ButtonWhite>
      </ButtonWrap>
    </MapContent>
  );
};

export default Map;

const MapContent = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const MyMap = styled.div`
  width: 100%;
  height: 188px;
  background: #d9d9d9;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 8px 0;
`;
