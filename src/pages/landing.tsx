import { useNavigate } from "react-router-dom";

/**
 * 
 * @returns Landing 페이지
 */

export default function Landing() {
  const navigate = useNavigate();

  const HandleEnter = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="bg-[url('./assets/landingBackground.svg')] bg-cover ">
        <div className="flex flex-col h-[100dvh] justify-center items-center">
          <p className="font-pretendard font-extrabold text-title3 flex justify-center text-gray500">
            HELPER
          </p>
          <div className="text-center">
            <p className="font-pretendard font-bold text-title1">DSM 학습 도움 서비스</p>
            <p className="font-pretendard font-bold text-title1">
              HELPER에 오신걸 환영합니다!
            </p>
          </div>
          <button
            className="font-pretendard font-bold mt-10 text-white text-body2 bg-main w-landingButton h-landingButton rounded-full"
            onClick={HandleEnter}
          >
            지금 바로 시작하기
          </button>
        </div>
      </div>
    </>
  );
}
