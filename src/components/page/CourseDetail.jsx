import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import CourseIcon from "../courses/CourseIcon";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { theme } from "../../styles";
import SmallCourseIcon from "../courses/SmallCourseIcon";
import { LeveledCurriculum } from "../courses/courseDb";
import FooterSection from "../home/FooterSection";

function CourseDetail() {
  const { id } = useParams();
  console.log(id);
  const state = LeveledCurriculum.find((item) => item.id === parseInt(id));
  console.log(state);
  // 소문자로
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
            <CourseIcon state={state} />
          </LeftSection>
          <RightSection>
            <Overview>
              <OverviewTitle>개요</OverviewTitle>
              <Why>
                <h5>이 과정을 왜 수강해야 하나요?</h5>
                <p>{state.why}</p>
              </Why>
              <What>
                <h5>수강 후 어떤 능력이 향상되나요?</h5>
                <p>{state.what}</p>
              </What>
              <Level>
                <h5>경험 레벨</h5>
                <p>{state.level}</p>
              </Level>
              <Length>
                <h5>과정 길이</h5>
                <p>{state.length}</p>
              </Length>
              <PreRequisite>
                <h5>사전요건</h5>
                <p>{state.pre}</p>
              </PreRequisite>
            </Overview>
            <Lessons>
              <LessonsTitle>강의 요강</LessonsTitle>
              <LessonList>
                {/* {state.lessonPlan.map((lesson) => (
                  <li>
                    <span>{lesson.key}</span>
                    <div>{lesson.value}</div>
                  </li>
                ))} */}
                {state.lessonPlan.map((lesson, index) => (
                  <li key={index}>
                    <span>{index + 1}</span>
                    <div>{lesson}</div>
                  </li>
                ))}
                {/* <li>
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
                </li> */}
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
                  <SmallCourseIcon key={curri.id} curri={curri} />
                ))}
              </ItemList>
            </Others>
          </RightSection>
        </Wrapper>
      </MainSectionWrapper>
      {/* <FooterSection /> */}
      {/* footer 아래에 안가는 이유...? */}
    </Container>
  );
}

const Container = styled.div``;

const MainSectionWrapper = styled.div`
  height: 100vh;
  max-width: 1500px;
  margin: auto;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 170px;
  padding: 200px 40px 30px 40px;

  /* margin: 0 auto; */
`;

const LeftSection = styled.div`
  width: 35%;
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
  width: 65%;
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

const Why = styled.div``;
const What = styled.div``;
const Level = styled.div``;
const Length = styled.div``;
const PreRequisite = styled.div``;

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

const Others = styled.div`
  padding-bottom: 50px;
`;

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

  gap: 20px;

  margin-top: 20px;
  /* border: 1px solid #000; */
  overflow-x: auto;

  width: 100%;
`;

export default CourseDetail;
