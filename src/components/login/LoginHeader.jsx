import { darken, lighten } from "polished";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function LoginHeader() {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Cambly Logo</h1>
      <SignUpWrapper>
        <SignUpText>Don't have an account yet?</SignUpText>
        <Button onClick={() => navigate("/signup")}>
          <StyledLink>회원가입</StyledLink>
        </Button>
      </SignUpWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 24px;
`;

const SignUpWrapper = styled.div``;

const SignUpText = styled.span`
  color: #aaa;
`;

const Button = styled.button`
  background-color: ${lighten(0.01, "#228891")};
  border: none;
  outline: none;

  margin-left: 15px;

  border-radius: 4px;

  color: #fff;

  cursor: pointer;
`;

const StyledLink = styled(Link)`
  display: flex;

  padding: 7px 12px;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.095, "#228891")};
    border-radius: 4px;
    transition: 0.2s ease-in-out;
  }
`;

export default LoginHeader;
