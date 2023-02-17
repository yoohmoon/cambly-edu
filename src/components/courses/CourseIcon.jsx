import { darken } from "polished";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CourseIcon({ state }) {
  const { src, title, desc } = state;
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/signup");
  };

  return (
    <Container>
      <img src={src} alt={title} />
      <InfoWrapper>
        <TextWrapper>
          <h3>{title}</h3>
          <p>{desc}</p>
          <p>Cambly 수강권으로 등록하거나 무료 Cambly 체험으로 시작해보세요.</p>
        </TextWrapper>
        <button onClick={handleButton}>과정 시작하기</button>
      </InfoWrapper>
    </Container>
  );
}

const Container = styled.div`
  /* max-width: 450px; */
  /* height: 580px; */

  border: 1px solid ${({ theme }) => theme.colors.box_color};
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;

  gap: 20px;

  padding: 10px 24px;
  button {
    width: 100%;
    height: 100%;

    border-radius: 5px;
    border: none;
    padding: 8px 22px;

    background-color: ${({ theme }) => theme.colors.main_color};
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;

    cursor: pointer;

    transition: 0.2s ease-in-out;

    &:hover {
      background-color: ${darken(0.095, "#228891")};

      transition: 0.2s ease-in-out;
    }
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;

  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.87);
  }

  p {
    color: ${({ theme }) => theme.colors.course_detail};
  }
`;
export default CourseIcon;
