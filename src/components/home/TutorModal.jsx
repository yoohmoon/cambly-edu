import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";

function TutorModal({ modal, setModal }) {
  const {
    video_src,
    img_src,
    img_alt,
    name,
    nationality,
    rating,
    introduction,
  } = modal;
  const closeModal = () => {
    // setModalOpen(false);
    setModal(null );
  };

  return (
    <Container>
      <button onClick={closeModal}>X</button>
      <video controls src={video_src}></video>
      <TutorProfile>
        <Tutor>
          <BasicInfo>
            <img src={img_src} alt={img_alt} />
            <TutorInfoText>
              <p>{name}</p>
              <p>{nationality}</p>
            </TutorInfoText>
          </BasicInfo>
          <Rating>
            <StarWrapper>
              <AiFillStar color="#FFC929" />
              <AiFillStar color="#FFC929" />
              <AiFillStar color="#FFC929" />
              <AiFillStar color="#FFC929" />
              <AiFillStar color="#FFC929" />
            </StarWrapper>

            <span>{rating}</span>
          </Rating>
        </Tutor>
        <p>{introduction}</p>
        <CtaButton>{name}와 영어 배우기</CtaButton>
      </TutorProfile>
    </Container>
  );
}

const Container = styled.div`
  width: 600px;
  height: 610px;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #eee;
  border: 1px solid #000;
  border-radius: 50px;

  overflow: hidden;

  video {
    width: 100%;
  }

  button {
    position: absolute;
    right: 10px;
    top: 10px;

    background-color: rgba(0, 0, 0, 0.3);
    width: 40px;
    height: 40px;

    border: none;
    border-radius: 50%;

    cursor: pointer;
    z-index: 1300;
  }
`;

const TutorProfile = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */

  /* justify-content: space-evenly; */

  /* border: 1px solid #000; */

  padding: 25px;

  /* position: relative; */

  p {
    margin: 10px 0;
  }
`;

const Tutor = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 30px;
  }
`;
const TutorInfoText = styled.div`
  p:first-child {
    font-weight: 500;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  span {
    font-size: 0.9rem;
  }
`;

const StarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CtaButton = styled.div`
  position: absolute;
  bottom: 25px;
  right: 120px;
  background-color: ${({ theme }) => theme.colors.main_yellow};

  padding: 10px 100px;

  border-radius: 12px;
  cursor: pointer;
`;
export default TutorModal;
