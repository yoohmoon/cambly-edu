import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import CourseIcon from "../courses/CourseIcon";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { theme } from "../../styles";
import SmallCourseIcon from "../courses/SmallCourseIcon";
import { LeveledCurriculum } from "../courses/courseDb";

function CourseDetail() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <MainSectionWrapper>
        <Wrapper>
          <LeftSection>
            <Navigator>
              <div onClick={() => navigate("/courses")}>
                <HiArrowLeftCircle size="27" />
                <span>모든 과정</span>
              </div>
            </Navigator>
            <CourseIcon />
          </LeftSection>
          <RightSection>
            <Overview>
              <OverviewTitle>개요</OverviewTitle>
              <Why>
                <h5>이 과정을 왜 수강해야 하나요?</h5>
                <p>
                  문법과 어휘를 얼마나 배웠든 외국인과 말하는 것은 겁이 날 수
                  있습니다. 영어에 대한 기본 지식은 있지만, 영어로 말할 기회가
                  없었다면 이 코스틀 통해 첫 영어 대화를 쉽게 시작할 수
                  있습니다.
                </p>
              </Why>
              <What>
                <h5>수강 후 어떤 능력이 향상되나요?</h5>
                <p>
                  이 코스는 CEFR A2 레벨의 어휘를 다룹니다. 다양한 공통, 일상
                  주제에 대해 말하는 학습 중에 자신감을 얻게 됩니다. 또한,
                  강사가 정답을 알려주고 실수를 짚어주면서 절대적인 문법 지식을
                  얻게 됩니다.
                </p>
              </What>
              <Level>
                <h5>경험 레벨</h5>
                <p>초급</p>
              </Level>
              <Length>
                <h5>과정 길이</h5>
                <p>10개 수업</p>
              </Length>
              <PreRequisite>
                <h5>사전요건</h5>
                <p>
                  자신에 대한 소개와 어디에서 왔는지를 말할 수 있게 됩니다. 아직
                  기본적인 소개에 익숙하지 않은 경우, "영어 대화 101" 코스로
                  시작하세요.
                </p>
              </PreRequisite>
            </Overview>
            <Lessons>
              <LessonsTitle>강의 요강</LessonsTitle>
              <LessonList>
                <li>
                  <span>1</span>
                  <div>Foods You Love</div>
                </li>
                <li>
                  <span>2</span>
                  <div>Your Job</div>
                </li>
                <li>
                  <span>3</span>
                  <div>Playing and Watching Sports</div>
                </li>
                <li>
                  <span>4</span>
                  <div>The Best Pet</div>
                </li>
                <li>
                  <span>5</span>
                  <div>Having Fun in Your Free Time</div>
                </li>
                <li>
                  <span>6</span>
                  <div>Your Daily Routine</div>
                </li>
                <li>
                  <span>7</span>
                  <div>Childhood Memories</div>
                </li>
                <li>
                  <span>8</span>
                  <div>Your Family Members</div>
                </li>
                <li>
                  <span>9</span>
                  <div>Your Hometown</div>
                </li>
                <li>
                  <span>10</span>
                  <div>Shopping Habits</div>
                </li>
              </LessonList>
            </Lessons>
            <Others>
              <OthersHeader>
                <OthersTitle>다른 커리큘럼</OthersTitle>
                <CourseNavigator>
                  <div onClick={() => navigate("/courses")}>
                    <span>모든 과정</span>
                    <HiArrowRightCircle size="27" />
                  </div>
                </CourseNavigator>
              </OthersHeader>
              <ItemList>
                {LeveledCurriculum.map((curri) => (
                  <SmallCourseIcon key={curri.id} />
                ))}
              </ItemList>
            </Others>
          </RightSection>
        </Wrapper>
      </MainSectionWrapper>
    </Container>
  );
}

const Container = styled.div``;

const MainSectionWrapper = styled.div`
  max-width: 1500px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 170px;
  padding: 200px 40px 30px 40px;

  /* margin: 0 auto; */
`;

const LeftSection = styled.div`
  max-width: 450px;
  padding: 16px;
`;

const Navigator = styled.div`
  margin-bottom: 30px;

  div {
    color: ${({ theme }) => theme.colors.main_color};
    cursor: pointer;

    font-weight: 500;
    font-size: 1.3rem;

    display: flex;
    align-items: center;

    gap: 5px;

    span {
      /* font-weight: 500;
      font-size: 1.2rem; */
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 50px;

  padding: 16px;
  padding-left: 32px;
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  line-height: 28px;
  h5 {
    color: ${({ theme }) => theme.colors.course_title};
    font-size: 1.4rem;
    font-weight: 400;
  }
  p {
    color: ${({ theme }) => theme.colors.course_detail};
    font-size: 1.35rem;
  }
`;

const OverviewTitle = styled.h4`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.course_title};
`;

const Why = styled.p``;
const What = styled.p``;
const Level = styled.p``;
const Length = styled.p``;
const PreRequisite = styled.p``;

const Lessons = styled.div``;
const LessonsTitle = styled.h4`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.course_title};
`;

const LessonList = styled.ol`
  color: ${({ theme }) => theme.colors.course_detail};
  font-size: 1.35rem;
  line-height: 3.75rem;

  li {
    display: flex;
    gap: 25px;
  }
`;

const Others = styled.div``;

const OthersHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OthersTitle = styled.h4`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.colors.course_title};
`;

const CourseNavigator = styled.div`
  div {
    color: ${({ theme }) => theme.colors.main_color};
    cursor: pointer;

    font-weight: 500;
    font-size: 1.3rem;

    display: flex;
    align-items: center;

    gap: 5px;
  }
`;

const ItemList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  border: 1px solid #000;
  overflow-x: scroll;
`;

export default CourseDetail;
