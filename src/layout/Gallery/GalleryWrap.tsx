import styled from "@emotion/styled";
import { Heading2 } from "@/components/Text";
import PhotoGallery from "@/layout/Gallery/PhotoGallery";
import { useState } from "react";
import { ButtonBlack } from "@/components/Button";

const GalleryWrap = () => {
  const [isMoreView, setIsMoreView] = useState(false);

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  };
  return (
    <>
      <Heading2>Gallery</Heading2>
      <ContentsWrap>
        <ImageMoreWrap isMoreView={isMoreView}>
          {!isMoreView && <WhiteGradientOverlay />}
          <PhotoGallery />
        </ImageMoreWrap>
        {!isMoreView && <ButtonBlack onClick={onClickImageMoreViewButton}>더보기</ButtonBlack>}
      </ContentsWrap>
    </>
  );
};
export default GalleryWrap;

const ContentsWrap = styled.div`
  margin: 10px 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageMoreWrap = styled.div<{ isMoreView: boolean }>`
  position: relative;
  max-height: ${(props) => (props.isMoreView ? "" : "60vh")}; /* isMoreView 상태가 true일 때는 높이 제한 없이, false일 때는 195px로 작게 보이도록 */
  overflow: hidden;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 90%);
`;
