import styled from "styled-components";

interface ListItemProps {
  isSelected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  width: 25%;
  height: 100vh;
  padding: 40px 40px 0 0;
  border-right: 1px solid #bebebe;
  gap: 20px;
`;

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding-right: 30px;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Teacher = styled.p`
  font-family: "pretendard";
  font-weight: 700;
  font-size: 26px;
  margin: 0;
`

export const Nickname = styled.p`
  font-family: "pretendard";
  font-weight: 500;
  font-size: 16px;
  color: #7C7C7C;
  margin: 0;
`

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 13vw;
  border-top: 1px solid #bebebe;
  border-bottom: 1px solid #bebebe;
  padding: 30px;
  gap: 20px;
`

export const ListItem = styled.li<ListItemProps>`
  font-family: "pretendard";
  font-size: 16px;
  font-weight: 600;
  list-style-type: disc;
  list-style-position: inside;
  color: ${({isSelected}) => (isSelected ? "#black" : "#A7A7A7")};
  cursor: pointer;

  &::marker {
    color: ${({isSelected}) => (isSelected ? "#FF9900" : "#A7A7A7")}
  }
`

export const Btn = styled.button`
  font-family: "pretendard";
  font-size: 14px;
  width: 100px;
  height: 34px;
  border: none;
  border-radius: 4px;
  color: white;
  background-color: #FF9900;
`