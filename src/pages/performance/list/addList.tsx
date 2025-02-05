import React from "react";
import * as S from "./style"

interface AddProps {
  Subject: string;
  PerformanceName: string; 
  Period: string;
}

export default function AddList ({Subject, PerformanceName, Period}: AddProps) {
  return (
    <>
      <S.AddBox>
        <li>{Subject}</li>
        <li>{PerformanceName}</li>
        <li>{Period}</li>
        <div className="BtnBox">
          <S.EditBtn>수정</S.EditBtn>
          <S.DelBtn>삭제</S.DelBtn>
        </div>
      </S.AddBox>
    </>
  )
}