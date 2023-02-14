import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginForm from "../login/LoginForm";
import LoginHeader from "../login/LoginHeader";

function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <LoginHeader
        siguptext="Don't have an account yet?"
        buttontext="회원가입"
        onClick={() => navigate("/signup")}
      />
      <LoginForm
        titletext="Log into Cambly"
        fbtext="Login with Facebook"
        googletext="Login with Google"
        appletext="Login with Apple"
        buttontext="이메일 주소로 로그인"
      />
    </Container>
  );
}

const Container = styled.div``;

export default Login;
