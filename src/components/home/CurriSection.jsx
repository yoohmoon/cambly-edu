import styled, { keyframes } from "styled-components";
import { TbBooks } from "react-icons/tb";
import CurriBook from "./CurriBook";
import { useNavigate } from "react-router-dom";

const bookInfo = [
  {
    id: 1,
    level: "Basic",
    count: "10 lessons",
    title: "Basic Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 2,
    level: "Intermediate",
    count: "9 lessons",
    title: "Life in the Internet Age",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 3,
    level: "Intermediate",
    count: "10 lessons",
    title: "Intermediate Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99d0c4288f294426b643?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 4,
    level: "Advanced",
    count: "10 lessons",
    title: "Advanced Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99e60b114e9a327ceb66?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 5,
    level: "Intermediate",
    count: "7 lessons",
    title: "Caring for Our Planet",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99f70f8f1e9f625e8317?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 6,
    level: "Intermediate",
    count: "6 lessons",
    title: "Healthy Mind, Healthy Body",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a4c05342470fdddf8b8?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 7,
    level: "Intermediate",
    count: "10 lessons",
    title: "Business English",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a5feb6295be78ddf8c3?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 8,
    level: "Advanced",
    count: "9 lessons",
    title: "Academic English",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5fa1de81b728c84f4ccaaa2f?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 1,
    level: "Basic",
    count: "10 lessons",
    title: "Basic Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 2,
    level: "Intermediate",
    count: "9 lessons",
    title: "Life in the Internet Age",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e0e8b212ac750e7dc9886ac?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 3,
    level: "Intermediate",
    count: "10 lessons",
    title: "Intermediate Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99d0c4288f294426b643?h=d41d8cd98f00b204e9800998ecf8427e",
  },

  {
    id: 4,
    level: "Advanced",
    count: "10 lessons",
    title: "Advanced Conversation Topics",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99e60b114e9a327ceb66?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 5,
    level: "Intermediate",
    count: "7 lessons",
    title: "Caring for Our Planet",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b99f70f8f1e9f625e8317?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 6,
    level: "Intermediate",
    count: "6 lessons",
    title: "Healthy Mind, Healthy Body",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a4c05342470fdddf8b8?h=d41d8cd98f00b204e9800998ecf8427e",
  },
  {
    id: 7,
    level: "Intermediate",
    count: "10 lessons",
    title: "Business English",
    src: "https://camblycurriculumicons.s3.amazonaws.com/5e2b9a5feb6295be78ddf8c3?h=d41d8cd98f00b204e9800998ecf8427e",
  },
];

function CurriSection() {
  /* function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < ?????????_?????????_????????????) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedFront];
  }
  console.log(slides);

  const itemSize = items.length;
  // itemSize??? items ??????(?????? curriInfo ????????? ??? ?????? ????????? ????????? ????????? ?????????)??? ??????.


  const handleClick = (id) => {
    const click = slides.find((slide) => slide.id === id);
    // ???????????? ????????? ??????(???????????? ???)??? ????????? ?????? slides ????????? ??? ????????? ????????????.

    // navigate("/courses");
    navigate(`/courses/${click.id}`);
    console.log("????????? ???????????? ?????????!", click.id);
  };
 */
  const navigate = useNavigate();
  const handleClick = (id) => {
    const click = bookInfo.find((info) => info.id === id);

    navigate(`/courses/${click.id}`);
  };

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <TbBooks color="#fff" size="30" />
          <h2>????????? ????????? ???????????? ?????? ????????????</h2>
        </TitleWrapper>
        <p>
          ?????? ??????, ?????? ??????, ?????? ??????, ???????????? ?????? ??? ????????? ???????????????
          ?????? ????????? ????????? ?????????.
        </p>
      </TextWrapper>
      <BookContainer>
        <CurriWrapper>
          <BookWrapper>
            {bookInfo.map((info) => {
              return (
                <CurriBook
                  handleClick={handleClick}
                  key={info.id}
                  info={info}
                  // onClick={() => handleClick(slide.id)}
                  /* key={info.id}
                        title={info.title}
                        level={info.level}
                        count={info.count}
                        src={info.src} */
                />
              );
            })}
          </BookWrapper>

          {/* <button>play/pause</button> */}
        </CurriWrapper>
      </BookContainer>
    </Container>
  );
}

const slide = keyframes`
 /* from{
  transform: translate(-80px);
 } */
  
  to {
    transform: translate(-840px);
    /* transform: translate(-310px); */

    /* id2??? ????????? id3??? ???????????? ????????? */
  }
`;

const Container = styled.div`
  min-height: 600px;
  background-color: ${({ theme }) => theme.colors.main_blue};

  padding: 50px;
`;

const TextWrapper = styled.div`
  line-height: 50px;
  color: #d5d6dd;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  color: #fff;
`;

const BookContainer = styled.div``;

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
  /* transform: translate(300px); */
  transform: translate(200px);
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 20px;

  animation: ${slide} 8s linear infinite;
`;

// (180 * 7)+ (20 * 6) = 1380px

// (container : 1380px) + (item width length : 180)  + [gap?? 20px??] =1560 +[]

export default CurriSection;
