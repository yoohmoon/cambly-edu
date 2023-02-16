import styled from "styled-components";
import { TbBooks } from "react-icons/tb";
import CurriBook from "./CurriBook";
import { useEffect, useRef, useState } from "react";
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
    detailed_info: "Intermediate &nbsp;•&nbsp; 7 lessons",
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
    detailed_info: "Intermediate &nbsp;•&nbsp; 10 lessons",
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
];

function useInterval(callback, delay) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function CurriSection() {
  const 양끝에_추가될_데이터수 = 8;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipe = (direction) => {
    setCurrentIndex((currentIndex) => currentIndex + direction);
  };

  useInterval(() => {
    setCurrentIndex((currentIndex) => currentIndex + 1);
  }, 100);

  const items = [
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
      detailed_info: "Intermediate &nbsp;•&nbsp; 7 lessons",
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
      detailed_info: "Intermediate &nbsp;•&nbsp; 10 lessons",
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
  ];

  let slides = setSlides();

  function setSlides() {
    let addedFront = [];
    let addedLast = [];
    var index = 0;
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(items[index % items.length]);
      addedFront.unshift(items[items.length - 1 - (index % items.length)]);
      index++;
    }
    return [...addedFront, ...items, ...addedFront];
  }

  const itemSize = items.length;
  // itemSize는 items 배열(기존 curriInfo 배열에 앞 뒤로 요소를 추가한 배열을 의미함)의 길이.

  function getItemIndex(index) {
    index -= 양끝에_추가될_데이터수;
    if (index < 0) {
      index += itemSize;
    } else if (index >= itemSize) {
      index -= itemSize;
    }
    return index;
  }

  const navigate = useNavigate();
  const handleClick = (id) => {
    const click = slides.find((slide) => slide.id === id);
    // 사용자가 클릭한 교재(커리큘럼 북)의 정보가 담긴 slides 배열의 한 요소를 보여준다.

    navigate(`course/${click.id}`);
    console.log("클릭한 커리큘럼 아이디!", click.id);
  };

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <TbBooks color="#fff" size="30" />
          <h2>다양한 기술과 관심사에 맞는 커리큘럼</h2>
        </TitleWrapper>
        <p>
          영어 면접, 시험 준비, 일상 대화, 비즈니스 영어 등 다양한 커리큘럼을
          통해 목표를 달성해 보아요.
        </p>
      </TextWrapper>
      <BookContainer>
        <CurriWrapper>
          <SliderArea>
            <Slider>
              <SliderList>
                <SliderTrack
                  style={{
                    transform: `translateX(${
                      (-100 / slides.length) * (0.5 + currentIndex)
                    }%)`,
                  }}
                >
                  {slides.map((slide, slideIndex) => {
                    const itemIndex = getItemIndex(slideIndex);
                    return (
                      <CurriBook
                        key={slideIndex}
                        slide={slide}
                        onClick={handleClick}
                        /* key={info.id}
                        title={info.title}
                        level={info.level}
                        count={info.count}
                        src={info.src} */
                      />
                    );
                  })}
                </SliderTrack>
              </SliderList>
            </Slider>
          </SliderArea>

          {/* <button>play/pause</button> */}
          <button direction="prev" onClick={() => handleSwipe(-1)}>
            prev
          </button>
          <button direction="next" onClick={() => handleSwipe(1)}>
            next
          </button>
        </CurriWrapper>
      </BookContainer>
    </Container>
  );
}

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

const CurriWrapper = styled.div``;

const SliderArea = styled.div``;

const Slider = styled.div``;

const SliderList = styled.div``;

const SliderTrack = styled.div`
  display: flex;
  justify-content: center;
  gap: 17px;
`;

export default CurriSection;
