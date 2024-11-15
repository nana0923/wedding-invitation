import styled from "@emotion/styled";
import data from "@/data.json";
import { Heading2, ParagraphCafe } from "@/components/Text";
import Map from "@/layout/Location/Map";
import LocationInfo from "@/layout/Location/LocationInfo";
import MapButtons from "./MapButtons";

const Location = () => {
  const { greeting } = data;

  return (
    <>
      <Heading2>오시는 길</Heading2>
      <ParagraphCafe>{greeting.eventDetail}</ParagraphCafe>
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
