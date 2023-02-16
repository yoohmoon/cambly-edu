import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function TutorProfile({
  name,
  nationality,
  rating,
  handleModal,
  src,
  alt,
  showModal,
  id,
}) {
  console.log(id);
  return (
    <Container>
      <ProfileButton onClick={() => handleModal(id)}>
        <img src={src} alt={alt} />
        <TextInfo>
          <TextBox>
            <p>{name}</p>
            <p>{nationality}</p>
          </TextBox>
          <RatingBox>
            <AiFillStar color="#FFC929" size="20" />
            <span>{rating}</span>
          </RatingBox>
        </TextInfo>
      </ProfileButton>
    </Container>
  );
}

const Container = styled.li`
  /* max-width: 300px;
  height: 400px; */
  background-color: #f8f8fb;
`;

const ProfileButton = styled.button`
  /*  width: 100%;
  height: 100%;
 */

  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 6px 10px;

  padding: 10px;

  border: none;

  cursor: pointer;

  user-select: none;
`;

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
