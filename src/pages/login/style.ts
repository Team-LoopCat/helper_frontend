import styled from "styled-components";
import BackgroundImg from "../../assets/backgroundImg.svg";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 96vh;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50%;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
`;

export const ContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 900px;
  height: 640px;
  z-index: 1;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  border: 1px solid #bebebe;
  border-radius: 40px;
  gap: 70px;
  background-color: white;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  gap: 30px;
`;
