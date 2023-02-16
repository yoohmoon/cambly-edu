import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../common/Header";

function CourseDetail() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header />
      <Wrapper>
        <LeftSection>
          <div>
            <span onClick={() => navigate("/courses")}>모든 과정</span>
          </div>
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

const RightSection = styled.div``;

export default CourseDetail;
