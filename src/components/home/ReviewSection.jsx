import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";

function ReviewSection() {
  return (
    <Container>
      <TitleWrapper>
        <FaCommentDots color="#4D95EA" size="30" />
        <h2>고객 후기</h2>
      </TitleWrapper>
      <ReviewWrapper>
        <ReviewText>
          <h3>
            "언제든지 궁금한 부분을 물어볼 수 있고, 다양한 배경의 튜터들과 영어
            능력을 나날이 업그레이드 할 수 있어요!"
          </h3>
          <p>Junyoung – 서울</p>
        </ReviewText>
        <ReviewBox>
          <img
            src="https://www.cambly.com/fe/static/landing_page/students/junyoung.png"
            alt="Junyoung"
          />
          <p>
            번역물 검수자로 일하고 있을만큼 영어 실력이 좋은 편이지만, 해외에서
            살아본 경험이 없는 저로서는 원어민 고유의 표현들을 이해하기 어려울
            때가 있습니다. 하지만 캠블리가 있기 때문에 언제든지 궁금한 부분을
            물어볼 수 있고, 다양한 배경의 튜터들과 이야기하며 저의 영어 능력을
            나날이 업그레이드 할 수 있어 감사합니다.
          </p>
        </ReviewBox>
      </ReviewWrapper>
    </Container>
  );
}

const Container = styled.div`
  min-height: 600px;
  background-color: #fff;

  padding: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.colors.main_blue};
`;

const ReviewWrapper = styled.div`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 450px;
  border: 1px solid #000;
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export default ReviewSection;
