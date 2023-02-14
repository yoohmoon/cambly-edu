import styled from "styled-components";
import { AiFillApple } from "react-icons/ai";
import Input from "../common/Input";
import { darken } from "polished";
import { useState } from "react";

function LoginForm() {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setInputs({
      ...inputs,
      [name]: value,
      // 여기서 ...inputs를 통해 불변성을 지키는 건 어떤 의미지? 기존에 다른 유저들이 적었던 로그인 정보를 잊어버리지 않고 db에 정보를 남겨둔다는 의도인가?
    });
  };

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
              alt="google icon"
            />
            <span>Login with Google</span>
          </GgBtn>
          <ApBtn>
            <AiFillApple color="white" size="31" />
            <span>Login with Apple</span>
          </ApBtn>
        </SnsBtn>
        <TextWrapper>
          <span>OR</span>
        </TextWrapper>
        <LoginInputForm>
          <Input
            type="email"
            name="email"
            // value={inputs.email}
            // value를 포함시키면 인풋 값이 입력이 안되고 고정되는 문제 어떻게 해결??
            placeholder="이메일을 입력하세요"
            onChange={handleInputs}
          />
          <Input
            type="password"
            value={inputs.password}
            name="password"
            placeholder="비밀번호를 입력하세요"
            onChange={handleInputs}
          />
          <LoginButton>이메일 주소로 로그인</LoginButton>
        </LoginInputForm>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* align-items 안먹는 이유, 세로 정렬 100vh 쓰지 않고 스크롤 안생기게 하는 법? */

  max-width: 350px;
  margin: 40px auto 32px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SnsBtn = styled.div`
  /* width: 100%; */
  /* height: auto; */
  padding: 12px;
  /* gap: 10px; */

  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; */
`;

const TextWrapper = styled.div`
  padding: 12px;
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
  margin: 5px 0;

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

const LoginInputForm = styled.form`
  width: 350px;
  height: 35px;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 100%;

  border-radius: 5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.main_color};
  color: #fff;
  font-weight: 700;

  cursor: pointer;

  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${darken(0.095, "#228891")};

    transition: 0.2s ease-in-out;
  }
`;

export default LoginForm;
