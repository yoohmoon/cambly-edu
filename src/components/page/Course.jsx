import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import { LeveledCurriculum } from "../courses/courseDb";
import MediumCourseIcon from "../courses/MediumCourseIcon";

function Course() {
  const navigate = useNavigate();
  const handleNavigate = (id) => {
    const click = LeveledCurriculum.find((item) => item.id === id);

    navigate(`/courses/${click.id}`);
  };

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
            <CurriWrapper>
              <BookWrapper>
                {LeveledCurriculum.map((curri) => (
                  <MediumCourseIcon
                    key={curri.id}
                    curri={curri}
                    handleNavigate={handleNavigate}
                  />
                ))}
              </BookWrapper>

              {/* <button>play/pause</button> */}
            </CurriWrapper>
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

// 캐러셀 부분!
const CurriWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  overflow: hidden;
  border: 1px solid #000;
  border-radius: 12px;
  background-color: #fff;
  max-width: 1380px;
`;

const BookWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;
`;

export default Course;
