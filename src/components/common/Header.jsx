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
  /* z-index: 3; */
  /* 헤더 영역 모달 창 클릭시 백그라운드에 안가려지는 문제 : 
  header에 z-index 삭제하는 방법으로 해결 */

  /* min-height: 60px; */
`;

export default Header;
