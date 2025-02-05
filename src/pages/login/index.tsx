import React, { useState } from "react";
import * as S from "./style";
import Logo from "../../assets/Logo.svg";
import Input from "../../components/auth/input";
import { Btn } from "../../components/auth/button/style";

export default function Login() {
  const [inputs, setInputs] = useState({ ID: "", PW: "" });
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleInputChange = (e: any) => {
    const { id, value } = e.target;
    const updatedInputs = { ...inputs, [id]: value };
    setInputs(updatedInputs);

    setIsButtonEnabled(
      updatedInputs.ID.trim() !== "" && updatedInputs.PW.trim() !== ""
    );
  };

  return (
    <S.Container>
      <S.Background />
      <S.ContentBox>
        <S.Content>
          <img src={Logo} alt="Logo" />
          <S.InputBox>
            <Input
              id="ID"
              type="text"
              placeholder="아이디를 입력해주세요"
              value={inputs.ID}
              onChange={handleInputChange}
            />
            <Input
              id="PW"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={inputs.PW}
              onChange={handleInputChange}
            />
          </S.InputBox>
          <Btn isButtonEnabled={isButtonEnabled} />
        </S.Content>
      </S.ContentBox>
    </S.Container>
  );
}
