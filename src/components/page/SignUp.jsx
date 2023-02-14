import { useNavigate } from "react-router-dom";
import LoginForm from "../login/LoginForm";
import LoginHeader from "../login/LoginHeader";

function SignUp() {
  const navigate = useNavigate();
  return (
    <div>
      <LoginHeader
        siguptext="Already have an account?"
        buttontext="로그인"
        onClick={() => navigate("/login")}
      />
      <LoginForm
        titletext="Welcome to Cambly!"
        fbtext="Sign up with Facebook"
        googletext="Sign up with Google"
        appletext="Sign up with Apple"
        buttontext="이메일 주소로 회원가입"
      />
    </div>
  );
}

export default SignUp;
