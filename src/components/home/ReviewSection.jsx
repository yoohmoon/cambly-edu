import styled from "styled-components";
import { FaCommentDots } from "react-icons/fa";

const reviewList = [
  {
    id: 1,
    name: "Junyoung",
    location: "서울",
    title:
      "“다양한 배경의 튜터들과 영어 능력을 나날이 업그레이드 할 수 있어요!”",
    src: "https://www.cambly.com/fe/static/landing_page/students/junyoung.png",
    text: "번역물 검수자로 일하고 있을만큼 영어 실력이 좋은 편이지만, 해외에서 살아본 경험이 없는 저로서는 원어민 고유의 표현들을 이해하기 어려울 때가 있습니다. 하지만 캠블리가 있기 때문에 언제든지 궁금한 부분을 물어볼 수 있고, 다양한 배경의 튜터들과 이야기하며 저의 영어 능력을 나날이 업그레이드 할 수 있어 감사합니다.",
  },
  {
    id: 2,
    name: "Hyunjung",
    location: "대전",
    title:
      "“캠블리키즈를 통해 아이들에게 지구 반대편에 살고 있는 친구이자 멘토를 만들어줄 수 있어 기쁩니다.”",
    src: "https://www.cambly.com/fe/static/landing_page/students/hyunjung.png",
    text: "캠블리키즈를 통해 아이들에게 지구 반대편에 살고 있는 친구이자 멘토를 만들어줄 수 있어 기쁩니다. 처음에는 쑥스러워하던 아이들이 어느새 튜터와 신나게 수다를 떨고 있는 모습을 보면, 공부를 넘어선 소통의 수단으로써 영어를 활용하고 있는 아이들이 자랑스러워집니다.",
  },
  {
    id: 3,
    name: "Kyungbok",
    location: "경기도",
    title:
      "“개개인에 맞춘 일대일 수업을 제공하는 캠블리키즈 덕분에 아이들이 미국 현지 학교에 적응할 수 있었어요!”",
    src: "https://www.cambly.com/fe/static/landing_page/students/kyungbok.png",
    text: "1년간 미국에서 지낼 기회가 있었는데, 처음에는 아이들이 미국 현지 학교에 적응하기 힘들어했습니다. 그 때 캠블리키즈를 만나 영어로 의사표현을 하고, 학급 친구들과 더 잘 소통하는 방법까지 가르쳐 줄 수 있었습니다. 아이들 개개인에 맞춘 일대일 수업을 제공하는 캠블리키즈 덕분입니다.",
  },
];

function ReviewSection() {
  return (
    <Container>
      <TitleWrapper>
        <FaCommentDots color="#4D95EA" size="30" />
        <h2>고객 후기</h2>
      </TitleWrapper>
      {reviewList.map((review) => (
        <ReviewWrapper>
          <ReviewText>
            <h3>{review.title}</h3>
            <p>
              {review.name} – {review.location}
            </p>
          </ReviewText>
          <ReviewBox>
            <img src={review.src} alt={review.name} />
            <p>{review.text}</p>
          </ReviewBox>
        </ReviewWrapper>
      ))}
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

  width: 400px;
  border: 1px solid #000;

  text-align: center;

  user-select: none;
`;

const ReviewText = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  h3 {
    font-size: 24px;
  }

  p {
    margin-top: 0.75rem;
  }
`;

const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  border: 1px solid #edf0f5;
  border-radius: 12px;

  background-color: #eff6fa;

  padding: 10px;
  margin-top: 30px;

  user-select: none;

  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

  p {
    margin-top: 15px;
  }
`;

export default ReviewSection;
