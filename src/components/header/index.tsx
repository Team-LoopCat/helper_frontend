import React from "react";
import * as S from "./style";
import Logo from "../../assets/HeaderImg.svg";

export default function Header() {
  return (
    <>
      <S.Container>
        <img src={Logo} alt="" />
      </S.Container>
    </>
  );
}
