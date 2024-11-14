import Wrapper from "@/components/Wrapper";
import Container from "@/layout/Container";
import Invitation from "@/layout/Invitation/Invitation";
import Main from "@/layout/Main/Main";
import Gallery from "@/layout/Gallery/GalleryWrap";
import Account from "@/layout/Account/Account";
import Location from "@/layout/Location/Location";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  return (
    <NavermapsProvider
      ncpClientId="MY_NAVERMAPS_CLIENT_ID"
      // or finClientId, govClientId
    >
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
      </Container>
    </NavermapsProvider>
  );
}

export default App;
