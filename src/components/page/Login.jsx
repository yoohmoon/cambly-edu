import styled from "styled-components";
import LoginForm from "../login/LoginForm";
import LoginHeader from "../login/LoginHeader";

function Login() {
  return (
    <Container>
      <LoginHeader />
      <LoginForm />
    </Container>
  );
}

const Container = styled.div``;

export default Login;
