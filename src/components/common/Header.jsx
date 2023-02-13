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
  /* display: flex; */
`;

export default Header;
