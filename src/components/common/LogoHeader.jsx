import styled from "styled-components";

function LogoHeader() {
  return (
    <Container>
      <LogoContainer>
        <Logo>Cambly</Logo>
        <LogoPhrase>온라인 원어민 화상영어</LogoPhrase>
      </LogoContainer>
      <Nav>
        <NavList>
          <li>Kids</li>
          <li>Group</li>
          <li>Adults</li>
        </NavList>
      </Nav>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px 40px;

  background-color: #fff;
  border-bottom: 1px solid ${({ theme }) => theme.colors.bd_color};
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.h1``;

const LogoPhrase = styled.span`
  margin-left: 20px;
`;

const Nav = styled.div``;

const NavList = styled.ul`
  display: flex;

  li + li {
    position: relative;
    margin-left: 20px;
  }

  li + li::after {
    position: absolute;
    top: 6px;
    left: -9px;

    content: "";
    display: block;

    /* top: 50%;
    right: 50%; */

    width: 1px;
    height: 12px;

    transform: translateX(-50%);

    background-color: #000;
  }
`;

export default LogoHeader;
