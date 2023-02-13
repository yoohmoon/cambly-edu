import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import Input from "../common/Input";

function LoginForm() {
  return (
    <Container>
      <Wrapper>
        <h2>Log into Cambly</h2>
        <SnsBtn>
          <FbBtn>
            <img
              src="https://d38emex6h5e12i.cloudfront.net/logo/ico-facebook.svg"
              alt="facebook icon"
            />
            <span>Login with Google</span>
          </FbBtn>
          <GgBtn>
            <img
              src="https://d38emex6h5e12i.cloudfront.net/logo/ico-google.svg"
              alt="facebook icon"
            />
            <span>Login with Google</span>
          </GgBtn>
          <ApBtn>
            <AiFillApple color="white" size="31" />
            <span>Login with Apple</span>
          </ApBtn>
        </SnsBtn>
        <div>
          <span>OR</span>
        </div>
        <LoginInputForm>
          <Input />
          <Input />
        </LoginInputForm>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SnsBtn = styled.div`
  /*  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; */
`;

const FbBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;

  width: 350px;
  height: 35px;

  background-color: #0080f9;
  color: #fff;
  border: none;
  border-radius: 4px;

  padding: 13px 20px;

  cursor: pointer;
`;

const GgBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;

  width: 350px;
  height: 35px;

  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;

  padding: 13px 20px;

  cursor: pointer;
`;

const ApBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 5px;

  width: 350px;
  height: 35px;

  background-color: #000;
  color: #fff;
  border-radius: 4px;

  padding: 13px 20px;

  cursor: pointer;
`;

const LoginInputForm = styled.form``;

export default LoginForm;
