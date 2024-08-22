import Logo from "../../assets/Auth/Logo.svg";
import AuthBackground from "../../assets/Auth/Background.svg";
import LoginInput from "../../components/auth/LoginInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OpenEyes from "../../assets/Auth/OpenEyes";
import CloseEyes from "../../assets/Auth/CloseEyes";

/**
 *
 * @returns Login Pg
 */

export default function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [pswd, setPswd] = useState({
    type: "password",
    visible: false,
  });

  const showPswd = () => {
    setPswd((prevState) => ({
      type: prevState.type === "password" ? "text" : "password",
      visible: !prevState.visible,
    }));
  };

  const isButtonEnabled = username !== "" && password !== "";

  const handleLogin = () => {
    if (username !== "" && password !== "") navigate("/main");
    else console.error("Can't login");
  };

  return (
    <>
      <div className="flex w-[100vw] h-[100vh] items-center justify-center">
        <img src={AuthBackground} alt="" className="fixed bottom-0 z-0" />
        <div className="flex flex-col justify-center items-center bg-white gap-10 border border-gray300 w-[50vw] h-[65vh] rounded-3xl z-10">
          <img src={Logo} alt="It is Logo" />
          <LoginInput
            name="아이디"
            type="text"
            placeholder="아이디를 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="relative">
            <LoginInput
              name="비밀번호"
              type={pswd.type}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div onClick={showPswd} className="absolute top-[2vh] left-[24.5vw]">
              {pswd.visible ? <OpenEyes /> : <CloseEyes />}
            </div>
          </div>
          <button
            onClick={handleLogin}
            className={`font-pretendard font-bold text-white min-w-[10vw] min-h-[5vh] text-[1vw] ${
              isButtonEnabled ? "bg-main" : "bg-gray300"
            } rounded-3xl`}
            disabled={!isButtonEnabled}
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}
