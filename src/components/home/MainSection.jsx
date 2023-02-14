import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../common/Button";

function MainSection() {
  const navigate = useNavigate();
  return (
    <Container>
      <CloudImg>
        <img
          src="https://www.cambly.com/fe/static/landing_page/clouds.svg"
          alt="clouds"
        />
      </CloudImg>
      <ContentWrap>
        <MainWrapper>
          <InfoWrapper>
            <h2>
              원어민과 함께하는 <br /> 화상 영어 수업
            </h2>
            <Button onClick={() => navigate("/signup")}>시작하기</Button>
          </InfoWrapper>
          <ManImg>
            <img
              src="https://www.cambly.com/fe/static/landing_page/userAndWorldIllustration.svg"
              alt="/userAndWorldIllustration"
            />
          </ManImg>
        </MainWrapper>
      </ContentWrap>
    </Container>
  );
}

const Container = styled.div`
  min-height: 700px;
  background-color: ${({ theme }) => theme.colors.main_blue};

  overflow: hidden;

  padding-top: 200px;
`;

const CloudImg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  margin-top: 60px;
  z-index: 1;

  /* min-height: inherit; */
  img {
    min-height: 0;
    pointer-events: none;
  }
`;

const ContentWrap = styled.div`
  position: relative;
`;

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;

  /* flex-wrap: wrap; */
`;

const InfoWrapper = styled.div`
  padding-left: 20px;
  padding-top: 30px;
  h2 {
    color: #fff;
    font-size: 3.2rem;
    text-align: left;
    margin-bottom: 30px;
  }
`;

const ManImg = styled.div`
  img {
    max-width: 300px;
    vertical-align: middle;
  }
`;
export default MainSection;
