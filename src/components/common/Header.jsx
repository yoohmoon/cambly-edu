import styled from "styled-components";
import LogoHeader from "./LogoHeader";
import NavHeader from "./NavHeader";

function Header() {
  return (
    <Container>
      <LogoHeader />
      <NavHeader />
    </Container>
  );
}

// 로고 + 분류 / nav bar 2가지의 헤더 구성

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 3;

  /* min-height: 60px; */
`;

export default Header;
