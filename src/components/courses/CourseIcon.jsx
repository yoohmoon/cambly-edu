import { darken } from "polished";
import styled from "styled-components";

function CourseIcon() {
  return (
    <Container>
      <img
        src="https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e"
        alt="Basic Conversation Topics"
      />
      <InfoWrapper>
        <TextWrapper>
          <h3>Basic Conversation Topics</h3>
          <p>비슷한 주제에 대한 스피킹하는 자신감 얻기</p>
          <p>Cambly 수강권으로 등록하거나 무료 Cambly 체험으로 시작해보세요.</p>
        </TextWrapper>
        <button>과정 시작하기</button>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div``;

const InfoWrapper = styled.div`
  button {
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
  }
`;

const TextWrapper = styled.div``;
export default CourseIcon;
