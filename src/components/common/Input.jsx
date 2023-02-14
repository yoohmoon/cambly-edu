import styled from "styled-components";

function Input({ type, name, placeholder, onChange, value }) {
  return (
    <Container>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 35px;

  margin-bottom: 10px;

  input {
    width: 100%;
    height: 100%;

    border: 1px solid #bbb;
    border-radius: 5px;
    outline-color: ${({ theme }) => theme.colors.main_color};
  }
`;

Input.defaultProps = {
  type: "text",
};

export default Input;
