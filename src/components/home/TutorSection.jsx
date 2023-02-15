import styled from "styled-components";
import TutorProfile from "./TutorProfile";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import TutorModal from "./TutorModal";

const tutorInfo = [
  {
    id: 1,
    name: "Josha",
    src: "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/thumbnail_joshua.png",
    alt: "Josha pic",
    nationality: "미국",
    rating: 4.9,
  },
  {
    id: 2,
    name: "Whitney",
    src: "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/thumbnail_whitney.png",
    alt: "Whitney pic",
    nationality: "호주",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Nikola",
    src: "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/thumbnail_nikola.png",
    alt: "thumbnail_nikola",
    nationality: "미국",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Alana",
    src: "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/thumbnail_alana.png",
    alt: "thumbnail_alana",
    nationality: "영국",
    rating: 4.8,
  },
];

function TutorSection() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출하는 함수
  const showModal = () => {
    setModalOpen(true);
  };

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <FaChalkboardTeacher color="#4D95EA" size="30" />
          <h2>나만의 튜터를 선택하세요!</h2>
        </TitleWrapper>
        <p>
          여러분에게 딱 맞는 성격, 경력을 가지고 관심 영역을 집중적으로 다루는
          튜터를 선택하세요!
        </p>
      </TextWrapper>
      <ProfileWrapper>
        {tutorInfo.map((info) => (
          <TutorProfile
            showModal={showModal}
            key={info.id}
            name={info.name}
            src={info.src}
            alt={info.alt}
            nationality={info.nationality}
            rating={info.rating}
          />
        ))}
        {modalOpen && <TutorModal setModalOpen={setModalOpen} />}
      </ProfileWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
  background-color: #fff;

  position: relative;
  z-index: 1;

  padding: 50px;
`;

const TextWrapper = styled.div`
  line-height: 50px;

  h2 {
    color: ${({ theme }) => theme.colors.main_blue};
  }

  p {
    color: #585d71;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 11px;
`;

const ProfileWrapper = styled.ul`
  display: flex;
  justify-content: center;

  gap: 25px;

  margin-top: 10px;

  /* background-color: #f8f8fb; */
  /* border: 1px solid #000; */
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
