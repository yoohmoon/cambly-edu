import styled from "styled-components";
import TutorProfile from "./TutorProfile";
import { FaChalkboardTeacher } from "react-icons/fa";
import { useState } from "react";
import TutorModal from "./TutorModal";

const tutorInfo = [
  {
    id: 1,
    name: "Joshua",
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

const modalInfo = [
  {
    id: 1,
    name: "Joshua P",
    nationality: "미국",
    video_src:
      "https://cambly.s3.us-west-2.amazonaws.com/landing_page/joshua_profile_vid_264.mp4",
    img_src:
      "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/avatar_joshua.png",
    img_alt: "Joshua Profile",
    rating: 4.9,
    introduction:
      "안녕하세요, 세계를 여행하는 유튜버입니다. 여러분이 세계를 편하게 여행할 수 있도록 영어를 가르쳐드릴게요!",
  },
  {
    id: 2,
    name: "Teacher Whitney",
    nationality: "호주",
    video_src:
      "https://cambly.s3.us-west-2.amazonaws.com/landing_page/whitney_profile_vid_264.mp4",
    img_src:
      "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/avatar_whitney.png",
    img_alt: "Whitney Profile",
    rating: 4.9,
    introduction:
      "안녕하세요! 저는 10년 이상 성인을 대상으로 영어를 가르쳤고, 그중 2년은 다른 언어를 사용하는 사람들에게 영어를 가르쳤어요. 또한, 학생이 영어 능력을 향상해 점점 성장하고 자신감을 키울 수 있도록 돕는 걸 좋아해요. 효과적인 교육을 통한 긍정적인 학습이 제 교육 목표에요. 저는 여행하며 새로운 문화와 사람들에 대해 배우는 걸 좋아해요. 전 세계의 사람들에게 영어를 가르치는 것은 큰 기쁨이죠! 저는 성인 학생들이 영어로 자신을 좀 더 잘 표현하고, 경력, 개인 및 교육적 목표를 달성할 수 있도록 돕는 걸 좋아해요. 곧 수업에서 만나요!",
  },
  {
    id: 3,
    name: "Nikola Jovanović",
    nationality: "미국",
    video_src:
      "https://cambly.s3.us-west-2.amazonaws.com/landing_page/nikola_profile_vid_264.mp4",
    img_src:
      "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/avatar_nikola.png",
    img_alt: "Nikola Profile",
    rating: 4.8,
    introduction:
      "안녕하세요! 저는 니콜라 선생님이에요. 영어, 문학과 문화 학사 학위를 받았고, TESOL, TEYL 및 TEFL 자격증이 있으며, 10년 동안 학생을 가르쳤어요! 당시, 온라인으로 25,000명 이상의 중국 학생들을 가르쳤어요. 또한, 영어 개인 튜터로 일하며 학생들이 발음과 억양을 개선하도록 도왔어요. 제 교육 목표는 고품질 자료와 항상 몰입할 수 있는 교육 수업을 제공함으로써 모든 학생이 최대한 잠재력을 발휘해 영어 원어민처럼 말하도록 돕는 거예요. 수업을 하지 않을 때는, 독서를 하고 자전거를 타거나 가족과 반려견과 함께 시간을 보내요. 사진 찍는 것도 좋아하고요. 여러분을 만나 말하기 실력을 높일 수 있도록 도울 수 있어 너무 기뻐요! 곧 교실에서 만나요! :)",
  },
  {
    id: 4,
    name: "Alana Dunsmore",
    nationality: "영국",
    video_src:
      "https://cambly.s3.us-west-2.amazonaws.com/landing_page/alana_profile_vid_264.mp4",
    img_src:
      "https://www.cambly.com/fe/static/landing_page/tutors/highlighted/avatar_alana.png",
    img_alt: "Alana Profile",
    rating: 4.8,
    introduction:
      "제 이름은 엘레나이고, 에든버러대학교를 졸업했어요. 저는 재밌고, 가치 있고, 기억에 남는 수업을 진행하는 것을 좋아해요!",
  },
];

function TutorSection() {
  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출하는 함수
  const showModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  /*   //   modal 창을 useRef로 취득
  const modalRef = useRef < HTMLDivElement > null;

  useEffect(() => {
    const handler = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
 */
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

        {modalOpen && (
          <ModalContainer onClick={closeModal}>
            {modalInfo.map((info) => (
              <TutorModal
                setModalOpen={setModalOpen}
                key={info.id}
                name={info.name}
                nationality={info.nationality}
                video_src={info.video_src}
                img_src={info.img_src}
                img_alt={info.img_alt}
                rating={info.rating}
                introduction={info.introduction}
              />
            ))}
            {/* <TutorModal setModalOpen={setModalOpen} /> */}
          </ModalContainer>
        )}
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  /* z-index: 1500; */
  /* header보다 모달 백그라운드가 위로 가게 하는 법? */

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
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
