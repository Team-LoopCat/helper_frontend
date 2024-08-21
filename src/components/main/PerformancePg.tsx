import PerformanceList from "./PerformanceList";

export default function PerformancePg() {
  return (
    <>
      <main className="flex flex-col gap-4 min-w-[60vw] pt-20 pb-5 right-48 absolute top-20 ">
        {/** 수행평가 등록 title(button 포함) */}
        <div className="flex justify-between">
          {/** 수행평가 등록 title (button 미포함) */}
          <div>
            <p className="font-pretendard font-bold text-title3">
              수행평가 관리
            </p>
            <p className="font-pretendard font-medium text-tiny text-gray700">
              수행평가를 등록하고 관리해보세요
            </p>
          </div>
          {/** flex로 인해 변경된 버튼 크기 조절해야 함 */}
          <button className="font-pretendard font-medium text-body3 min-w-28 max-h-7 rounded-md text-white bg-main">
            수행평가 등록
          </button>
        </div>
        {/** List 구분 */}

        <ul className="flex justify-between items-center min-w-[60vw] min-h-14 border-t border-b border-gray400 text-gray700">
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
