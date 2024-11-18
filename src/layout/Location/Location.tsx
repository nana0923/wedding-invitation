import styled from "@emotion/styled";
import data from "@/data.json";
import { Heading2, ParagraphCafe, ParagraphCafeBlack } from "@/components/Text";
import Map from "@/layout/Location/Map";
import LocationInfo from "@/layout/Location/LocationInfo";
import MapButtons from "./MapButtons";

const Location = () => {
  const { mapInfo } = data;

  return (
    <>
      <Heading2>오시는 길</Heading2>
      <ParagraphCafe>{mapInfo.address1}</ParagraphCafe>
      <ParagraphCafeBlackSmall>{mapInfo.address2}</ParagraphCafeBlackSmall>
      {/* 지도 */}
      <MapContent>
        <Map />
        <MapButtons />
      </MapContent>
      {/* 오시는길 */}
      <LocationInfo />
    </>
  );
};

export default Location;

const MapContent = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const ParagraphCafeBlackSmall = styled(ParagraphCafeBlack)`
  margin-top: 5px;
  font-size: 16px;
  line-height: 20px;
`;
