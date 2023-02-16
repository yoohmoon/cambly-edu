import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";
import CourseIcon from "../courses/CourseIcon";

function CourseDetail() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftSection>
          <Navigator>
            <span onClick={() => navigate("/courses")}> &lt; 모든 과정</span>
          </Navigator>
          <CourseIcon />
        </LeftSection>
        <RightSection></RightSection>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div``;

const Wrapper = styled.div`
  padding-top: 170px;
`;

const LeftSection = styled.div``;

const Navigator = styled.div`
  span {
    color: ${({ theme }) => theme.colors.main_color};
    cursor: pointer;
  }
`;

const RightSection = styled.div``;

export default CourseDetail;
