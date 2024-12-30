import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  font-family: pretendard;
  font-size: 16px;
  width: 100%;
  height: 60px;
  border: 1px solid #BEBEBE;
  border-radius: 8px;
  padding-left: 30px;

  &:focus {
    outline: none;
  }
`

export const Icon = styled.img`
  position: absolute;
  cursor: pointer;
  right: 1vw;
`