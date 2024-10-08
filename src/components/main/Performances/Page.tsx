import { useNavigate } from "react-router-dom";
import PerformanceList from "./List";

export default function PerformancePg() {

  const navigate = useNavigate();

  const PerformanceRegisterMove = () => {
    navigate('/PerformanceRegister')
  }
  return (
    <>
      <main className="flex flex-col min-w-[60vw] min-h-[auto] pt-[9vh] absolute top-[7vh] right-[9vw]">
        {/** 수행평가 등록 title(button 포함) */}
        <div className="flex justify-between pb-[2vh]">
          {/** 수행평가 등록 title (button 미포함) */}
          <div>
            <p className="font-pretendard font-bold text-[1.5vw]">
              수행평가 관리
            </p>
            <p className="font-pretendard font-medium text-[0.8vw] text-gray700">
              수행평가를 등록하고 관리해보세요
            </p>
          </div>
          <div className="flex items-end">
            <button onClick={PerformanceRegisterMove} className="font-pretendard font-medium text-[0.9vw] min-w-[7vw] min-h-[3.5vh] rounded-md text-white bg-main">
              수행평가 등록
            </button>
          </div>
        </div>
        <ul className="flex justify-between items-center font-pretendard font-semibold max-w-[60vw] min-h-[6vh] text-[0.9vw] border-t border-b border-main text-gray700 bg-opacityMain">
          <li className="flex-1 text-center">학년</li>
          <li className="flex-1 text-center">반</li>
          <li className="flex-1 text-center">과목</li>
          <li className="flex-1 text-center">수행평가 이름</li>
          <li className="flex-1 text-center">마감일</li>
          <li className="flex-1 text-center">수정</li>
          <li className="flex-1 text-center">삭제</li>
        </ul>

        <PerformanceList
          grade={2}
          classroom={2}
          subject="자바프로그래밍"
          performanceTitle="프로젝트 수행평가"
          endDay="2024-10-01"
        />
        <PerformanceList
          grade={2}
          classroom={2}
          subject="자바프로그래밍"
          performanceTitle="프로젝트 수행평가"
          endDay="2024-10-01"
        />
        <PerformanceList
          grade={2}
          classroom={2}
          subject="자바프로그래밍"
          performanceTitle="프로젝트 수행평가"
          endDay="2024-10-01"
        />
      </main>
    </>
  );
}
