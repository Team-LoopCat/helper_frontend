import React, { useState } from "react";
import * as S from "./style";
import profile from "../../assets/profile.svg";

export default function Aside() {
  const [selected, setSelected] = useState("수행평가");

  const handleSelect = (item: any) => {
    setSelected(item);
  };
  return (
    <>
      <S.Container>
        <S.ProfileBox>
          <S.NameBox>
            <S.Teacher>{"XXX"} 선생님</S.Teacher>
            <S.Nickname>아이디</S.Nickname>
          </S.NameBox>
          <img src={profile} alt="profile" />
        </S.ProfileBox>
        <S.ListBox>
          {["수행평가", "지필고사", "마이페이지"].map((item) => (
            <S.ListItem
              key={item}
              isSelected={selected === item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </S.ListItem>
          ))}
        </S.ListBox>
        <S.Btn>로그아웃</S.Btn>
      </S.Container>
    </>
  );
}
