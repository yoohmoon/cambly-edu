import styled from "styled-components";

function FooterSection() {
  return (
    <Container>
      <InfoLinkList>
        <a href="https://www.cambly.com/legal/privacy_policy?lang=ko">
          <li>개인정보 보호정책</li>
        </a>
        <a href="https://www.cambly.com/legal/user_agreement?lang=ko">
          <li>이용 약관 및 조건</li>
        </a>
        <a href="https://jobs.cambly.com/">
          <li>채용</li>
        </a>
        <a href="https://camblyenglish.zendesk.com/hc/ko">
          <li>고객지원</li>
        </a>
        <a href="https://press.cambly.com/">
          <li>뉴스룸</li>
        </a>
      </InfoLinkList>
      <SocialWrapper>
        <a href="https://twitter.com/cambly">
          <img
            src="https://www.cambly.com/static/images/twitter_logo25.png"
            alt="twitter"
          />
        </a>
        <a href="https://www.instagram.com/cambly.korea/">
          <img
            src="https://www.cambly.com/static/images/instagram_logo24.png"
            alt="instagram"
          />
        </a>
        <a href="https://www.facebook.com/camblykorea.page">
          <img
            src="https://www.cambly.com/static/images/facebook_logo25.png"
            alt="facebook_logo"
          />
        </a>
        <a href="https://www.youtube.com/c/%EC%BA%A0%EB%B8%94%EB%A6%AC">
          <img
            src="https://www.cambly.com/static/images/youtube_social_square_red.png"
            alt="youtube_logo"
          />
        </a>
      </SocialWrapper>
      <Footer>CAMBLY INC. © COPYRIGHT 2023. ALL RIGHTS RESERVED.</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /*  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0; */

  padding: 0 24px;

  color: #333;
  background-color: rgb(247, 247, 247);
  height: 80px;

  font-size: 10px;
  letter-spacing: 1px;
`;

const InfoLinkList = styled.ul`
  display: flex;
  justify-content: space-between;

  gap: 15px;
`;

const SocialWrapper = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 16px;
    height: 16px;

    filter: grayscale(100%) opacity(70%) brightness(120%);
  }
`;

const Footer = styled.footer``;
export default FooterSection;
