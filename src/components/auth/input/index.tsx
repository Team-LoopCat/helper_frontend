import React, { useState } from "react";
import * as S from "./style";
import OpenEyes from "../../../assets/OpenEyes.svg";
import CloseEyes from "../../../assets/CloseEyes.svg";

interface InputProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ id, type, placeholder, value, onChange }: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(type !== "password");

  const toggleVisibility = () => {
    if (type === "password") {
      setIsPasswordVisible((prev) => !prev);
    }
  };

  return (
    <>
      <S.InputWrapper>
        <S.Input
          id={id}
          type={isPasswordVisible ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <S.Icon
            src={isPasswordVisible ? OpenEyes : CloseEyes}
            onClick={toggleVisibility}
          />
        )}
      </S.InputWrapper>
    </>
  );
}
