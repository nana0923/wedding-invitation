import data from "@/data.json";
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from "react-naver-maps";

const Map = () => {
  const { mapInfo } = data;
  const navermaps = useNavermaps();

  return (
    <MapDiv
      style={{
        width: "100%",
        height: "200px",
      }}>
      <NaverMap defaultCenter={new navermaps.LatLng(mapInfo.lat, mapInfo.lon)} defaultZoom={15}>
        <Marker defaultPosition={new navermaps.LatLng(mapInfo.lat, mapInfo.lon)} />
      </NaverMap>
    </MapDiv>
  );
};

export default Map;
