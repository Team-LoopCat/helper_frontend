import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 40px 0 0 70px;
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const Title = styled.p`
  font-family: "pretendard";
  font-weight: 700;
  font-size: 26px;
`;

export const SubTitle = styled.p`
  font-family: "pretendard";
  font-weight: 600;
  font-size: 14px;
  color: #505050;
`;

export const ImgBox = styled.div`
  display: flex;
  gap: 5px;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin-top: 20px;
  height: 62px;
  background-color: rgba(255, 153, 0, 0.15);
  border-top: 1px solid #ff9900;
  border-bottom: 1px solid #ff9900;

  li {
    flex: 1;
    text-align: center;
    padding: 8px;
  }

  .action-items {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    padding: 8px;
  }
`;

export const AddBox = styled.ul`
  display: flex;
  list-style: none;
  height: 62px;
  border-bottom: 1px solid #ff9900;
  align-items: center;

  li {
    flex: 1;
    text-align: center;
    padding: 8px;
  }

  .BtnBox {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    height: 24px;
  }
`;

export const EditBtn = styled.button`
  color: white;
  background-color: #FF9900;
  border: none;
  border-radius: 4px;
  width: 40px;
  height: 24px;
`

export const DelBtn = styled.button`
  color: white;
  background-color: #EA2E33;
  border: none;
  border-radius: 4px;
  width: 40px;
  height: 24px;

`