import styled from "styled-components";
import TutorProfile from "./TutorProfile";

function TutorSection() {
  return (
    <Container>
      <TextWrapper>
        <h2>나만의 튜터를 선택하세요!</h2>
        <p>
          여러분에게 딱 맞는 성격, 경력을 가지고 관심 영역을 집중적으로 다루는
          튜터를 선택하세요!
        </p>
      </TextWrapper>
      <ProfileWrapper>
        <TutorProfile />
      </ProfileWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
  background-color: #fff;

  position: relative;
  z-index: 1;
`;

const TextWrapper = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.main_blue};
  }

  p {
    color: #585d71;
  }
`;

const ProfileWrapper = styled.ul`
  /* background-color: #f8f8fb; */
  border: 1px solid #000;
`;

/* 
const Container = styled.div`
  min-height: 600px;
  position: relative;
  margin-top: -200px;
  background-color: #fff;
   border-radius: 100% 100% 0% 0%;
  border: 1px solid #000;
`;

const RoundBox = styled.div`
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    min-width: 2560px;
    width: 132%;
    height: 350px;
    background-color: #fff;
    border-radius: 100% 100% 0% 0%;
    border: 1px solid #000;
  }
`;
 */
export default TutorSection;
