import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function TutorProfile() {
  return (
    <Container>
      <ProfileButton>
        <img
          src="https://www.cambly.com/fe/static/landing_page/tutors/highlighted/thumbnail_joshua.png"
          alt="tutor profile pic1"
        />
        <TextInfo>
          <TextBox>
            <p>Joshua</p>
            <p>미국</p>
          </TextBox>
          <RatingBox>
            <AiFillStar color="#FFC929" size="20" />
            <span>4.9</span>
          </RatingBox>
        </TextInfo>
      </ProfileButton>
    </Container>
  );
}

const Container = styled.li`
  max-width: 300px;
  height: 400px;
  background-color: #f8f8fb;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 10px;
`;

const ProfileButton = styled.button``;

const TextInfo = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 12px 4px 4px;
`;

const TextBox = styled.div`
  text-align: left;
`;

const RatingBox = styled.div`
  display: flex;
  align-items: center;
`;

export default TutorProfile;
