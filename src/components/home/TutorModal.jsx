import styled from "styled-components";

function TutorModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <Container>
      <button onClick={closeModal}>X</button>
      <p>튜터 정보 모달창</p>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  height: 200px;

  z-index: 999;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: #eee;
  border: 1px solid #000;
  border-radius: 8px;

  button {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`;

export default TutorModal;
