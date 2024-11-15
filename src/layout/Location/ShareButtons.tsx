import { useEffect } from "react";
import styled from "@emotion/styled";
import { ButtonBlue } from "@/components/Button";
import data from "@/data.json";

const ShareButtons = () => {
  const { shareInfo } = data;

  const handleCopy = () => {
    const currentUrl = window.location.href; //현재 URL 가져오기
    navigator.clipboard
      .writeText(currentUrl) // URL 클립보드에 복사
      .then(() => {
        alert("URL이 복사되었습니다.");
      })
      .catch((error) => {
        console.error("URL 복사 실패:", error);
      });
  };

  useEffect(() => {
    const { Kakao } = window as any; // window.Kakao를 참조

    if (typeof Kakao !== "undefined" && !Kakao.isInitialized()) {
      Kakao.init(shareInfo.key); // 본인의 JavaScript 키로 초기화
    }
  }, []);

  const shareToKakao = (): void => {
    const { Kakao } = window as any;

    // Kakao SDK가 로드되었고, Link가 정의되어 있는지 확인
    if (typeof Kakao !== "undefined" && Kakao.Link) {
      Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: shareInfo.title,
          description: shareInfo.desc,
          imageUrl: "https://wedding-invitation-snowy-xi.vercel.app/assets/main-DM2q9mt0.png",
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      console.error("Kakao SDK가 로드되지 않았거나 Kakao.Link가 정의되지 않았습니다.");
    }
  };

  return (
    <ButtonWrap>
      <ButtonBlue onClick={shareToKakao}>카카오톡 공유하기</ButtonBlue>
      <ButtonBlue onClick={handleCopy}>URL 복사하기</ButtonBlue>
    </ButtonWrap>
  );
};

export default ShareButtons;

const ButtonWrap = styled.div`
  margin: 40px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
