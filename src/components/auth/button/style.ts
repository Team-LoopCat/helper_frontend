import styled from "styled-components";

export const Btn = styled.button<{isButtonEnabled: boolean}>`
  width: 240px;
  height: 60px;
  border: none;
  border-radius: 30px;
  color: black;
  background-color: ${({isButtonEnabled}) => (isButtonEnabled ? "#FF9900" : "#BEBEBE")};
`;