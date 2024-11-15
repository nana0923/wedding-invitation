import Wrapper from "@/components/Wrapper";
import Container from "@/layout/Container";
import Invitation from "@/layout/Invitation/Invitation";
import Main from "@/layout/Main/Main";
import Gallery from "@/layout/Gallery/GalleryWrap";
import Account from "@/layout/Account/Account";
import Location from "@/layout/Location/Location";
import ShareButtons from "@/layout/Share/ShareButtons";
import { NavermapsProvider } from "react-naver-maps";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <NavermapsProvider ncpClientId="wkb2ll76q4">
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper data-aos="fade-up">
          <Invitation />
        </Wrapper>
        <Wrapper data-aos="fade-up">
          <Gallery />
        </Wrapper>
        <Wrapper data-aos="fade-up">
          <Account />
        </Wrapper>
        <Wrapper data-aos="fade-up">
          <Location />
        </Wrapper>
        <Wrapper data-aos="fade-up">
          <ShareButtons />
        </Wrapper>
      </Container>
    </NavermapsProvider>
  );
}

export default App;
