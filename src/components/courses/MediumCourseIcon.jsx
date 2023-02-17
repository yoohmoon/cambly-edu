import styled from "styled-components";

function MediumCourseIcon({ curri, handleNavigate }) {
  const { src, title, desc, level, length, id } = curri;
  return (
    <Container onClick={() => handleNavigate(id)}>
      <CurriList>
        <li>
          <img src={src} alt={title} />
          <CurriInfo>
            <p>
              {level} &nbsp;•&nbsp; {length}
            </p>
            <p>{title}</p>
            <p>{desc}</p>
          </CurriInfo>
        </li>
      </CurriList>
    </Container>
  );
}

const Container = styled.div``;

const CurriList = styled.div`
  cursor: pointer;
  li {
    width: 260px;
    height: 390px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 10px;
    /* box-shadow 안 먹는 이유,,,,, */

    border: 1px solid rgb(216, 216, 216);
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 55%;
      height: 180px;
    }
  }
`;

const CurriInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  line-height: 30px;

  text-align: center;

  /* height: 45%; */
  /* border: 1px solid #000; */

  padding: 10px 10px;

  p:first-child {
    display: flex;
    justify-content: center;

    font-size: 0.9rem;
    color: rgb(134 154 184);
    margin-bottom: 5px;
  }

  p:nth-child(2) {
    font-size: 20px;
  }

  p:last-child {
    margin-top: 5px;
    color: #353535;
    text-align: center;
    line-height: 20px;
  }
`;

// 캐러셀 너비 계산 : 260*5 + 20*4 =1380

export default MediumCourseIcon;
