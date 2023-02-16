import styled from "styled-components";

function CurriBook() {
  return (
    <Container>
      <CurriList>
        <li>
          <img
            src="https://camblycurriculumicons.s3.amazonaws.com/5e2b895e541a832674533c18?h=d41d8cd98f00b204e9800998ecf8427e"
            alt="Basic Conversation Topics"
          />
          <CurriInfo>
            <p>Basic &nbsp;•&nbsp; 10 lessons</p>
            <p>Basic Conversation Topics</p>
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
    width: 180px;
    height: 240px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 10px;
    /* box-shadow 안 먹는 이유,,,,, */

    border: 1px solid rgb(216, 216, 216);
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 55%;
      height: 137px;
    }
  }
`;

const CurriInfo = styled.div`
  /* height: 45%; */
  /* border: 1px solid #000; */

  padding: 10px 10px;

  p:first-child {
    font-size: 0.9rem;
    color: rgb(134 154 184);
    margin-bottom: 5px;
  }

  p:last-child {
    color: #353535;
  }
`;

export default CurriBook;
