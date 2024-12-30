import React from "react";
import * as S from "./style";

interface BtnProps {
  isButtonEnabled: boolean
}

export default function AuthBtn({isButtonEnabled}: BtnProps) {
  return (
    <>
      <form action="">
        <S.Btn isButtonEnabled={isButtonEnabled}>로그인</S.Btn>
      </form>
    </>
  );
}
