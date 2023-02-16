import styled from "styled-components";
import { TbBooks } from "react-icons/tb";
import CurriBook from "./CurriBook";

const bookInfo = [
  {
    id: 1,
    level: "Basic",
    count: "10 lessons",
    title: "Basic Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 2,
    level: "Intermediate",
    count: "9 lessons",
    title: "Life in the Internet Age",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 3,
    level: "Intermediate",
    count: "10 lessons",
    title: "Intermediate Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99d0c4288f294426b643?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 4,
    level: "Advanced",
    count: "10 lessons",
    title: "Advanced Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99e60b114e9a327ceb66?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 5,
    level: "Intermediate",
    count: "7 lessons",
    detailed_info: "Intermediate &nbsp;•&nbsp; 7 lessons",
    title: "Caring for Our Planet",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99f70f8f1e9f625e8317?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 6,
    level: "Intermediate",
    count: "6 lessons",
    title: "Healthy Mind, Healthy Body",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a4c05342470fdddf8b8?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 7,
    level: "Intermediate",
    count: "10 lessons",
    detailed_info: "Intermediate &nbsp;•&nbsp; 10 lessons",
    title: "Business English",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a5feb6295be78ddf8c3?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 8,
    level: "Advanced",
    count: "9 lessons",
    title: "Academic English",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5fa1de81b728c84f4ccaaa2f?h=d41d8cd98f00b204e9800998ecf8427e",
  },
];

function CurriSection() {
  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <TbBooks color="#fff" size="30" />
          <h2>다양한 기술과 관심사에 맞는 커리큘럼</h2>
        </TitleWrapper>
        <p>
          영어 면접, 시험 준비, 일상 대화, 비즈니스 영어 등 다양한 커리큘럼을
          통해 목표를 달성해 보아요.
        </p>
      </TextWrapper>
      <BookContainer>
        <CurriWrapper>
          <BookWrapper>
            {bookInfo.map((info) => (
              <CurriBook
                key={info.id}
                title={info.title}
                level={info.level}
                count={info.count}
                src={info.src}
              />
            ))}
          </BookWrapper>

          <button>play/pause</button>
        </CurriWrapper>
      </BookContainer>
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
  background-color: ${({ theme }) => theme.colors.main_blue};

  padding: 50px;
`;

const TextWrapper = styled.div`
  line-height: 50px;
  color: #d5d6dd;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #fff;
`;

const BookContainer = styled.div``;

const CurriWrapper = styled.div``;

const BookWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
`;

export default CurriSection;
