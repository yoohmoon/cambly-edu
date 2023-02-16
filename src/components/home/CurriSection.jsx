import styled from "styled-components";
import { TbBooks } from "react-icons/tb";
import CurriBook from "./CurriBook";



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
            <CurriBook />
            <CurriBook />
            <CurriBook />
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
  gap: 17px;
`;

export default CurriSection;
