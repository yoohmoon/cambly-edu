import { Link } from "react-router-dom";
import styled from "styled-components";

function NavHeader() {
  return (
    <Container>
      <Gnb>
        <GnbList>
          <Menu>
            <StyledLink to="/"> 캠블리 소개</StyledLink>
          </Menu>
          <Menu>
            <StyledLink to="courses">커리큘럼</StyledLink>
          </Menu>
          <Menu>
            <StyledLink to="#">가격</StyledLink>
          </Menu>
        </GnbList>
      </Gnb>
      <BtnWrapper>
        <Button>
          <Link to="login">로그인</Link>
        </Button>
        {/* <Button>회원가입</Button> */}
      </BtnWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 24px;
  background-color: #fff;

  border-bottom: 1px solid #eee;
`;

const Gnb = styled.nav`
  max-width: 1100px;

  display: flex;
  align-items: center;
`;

const GnbList = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  padding-right: 40px;
  height: 100%;

  display: flex;
  align-items: stretch;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 35px;

  /* padding: 14px 0 10px; */
  /* border: 1px solid #000; */

  &:hover {
    border-bottom: 2px solid blue;
  }
`;

const BtnWrapper = styled.div`
  padding: 20px 0;
`;

const Button = styled.button`
  border: 2.5px solid #000;
  border-radius: 0.25rem;

  padding: 5px 24px;

  background-color: #fff;

  cursor: pointer;

  &:hover {
    background-color: #eaedff;
  }
`;
export default NavHeader;
