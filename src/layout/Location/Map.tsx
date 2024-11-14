import { ButtonWhite } from "@/components/Button";
import styled from "@emotion/styled";

const Map = () => {
  return (
    <MapContent>
      <MyMap />
      <ButtonWrap>
        <ButtonWhite>네이버 지도로 길찾기</ButtonWhite>
        <ButtonWhite>카카오 맵으로 길찾기</ButtonWhite>
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
