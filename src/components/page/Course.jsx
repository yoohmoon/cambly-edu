import styled from "styled-components";
import Header from "../common/Header";

function Course() {
  return (
    <Container>
      <Header />
      <MainContent>
        <h2>과정 둘러보기</h2>
        <BasicCourse>
          <TextWrapper>
            <h3>유창한 영어의 기본 요소</h3>
            <p>
              유창한 영어로 대화하며 자신감을 키워보세요. 간단한 대화부터 복잡한
              시사 문제에 대해 논리정연한 의견을 표현하는 것까지, 다양한 레벨의
              과정을 통해 모두가 무언가를 배울 수 있습니다.
            </p>
          </TextWrapper>
        </BasicCourse>
      </MainContent>
    </Container>
  );
}

const Container = styled.div``;

const MainContent = styled.div`
  padding-top: 170px;
  padding: 230px 60px 60px 60px;
`;

const BasicCourse = styled.div``;

const TextWrapper = styled.div``;

export default Course;
