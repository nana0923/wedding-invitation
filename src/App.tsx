import Wrapper from "@/components/Wrapper";
import Container from "@/layout/Container";
import Invitation from "@/layout/Invitation/Invitation";
import Main from "@/layout/Main/Main";
import Gallery from "@/layout/Gallery/GalleryWrap";
import Account from "@/layout/Account/Account";
import Location from "@/layout/Location/Location";
import ShareButtons from "@/layout/Share/ShareButtons";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  return (
    <NavermapsProvider ncpClientId="wkb2ll76q4">
      <Container>
        <Wrapper>
          <Main />
        </Wrapper>
        <Wrapper>
          <Invitation />
        </Wrapper>
        <Wrapper>
          <Gallery />
        </Wrapper>
        <Wrapper>
          <Account />
        </Wrapper>
        <Wrapper>
          <Location />
        </Wrapper>
        <Wrapper>
          <ShareButtons />
        </Wrapper>
      </Container>
    </NavermapsProvider>
  );
}

export default App;
