/**
 *
 * @returns 수행평가 리스트
 */

interface Props {
  grade: number;
  classroom: number;
  subject: string;
  performanceTitle: string;
  endDay: string;
}

export default function PerformanceList({
  grade,
  classroom,
  subject,
  performanceTitle,
  endDay,
}: Props) {
  return (
    <>
      <main className="border-b border-main py-[2vh]">
        <ul className="flex justify-between text-[0.9vw]">
          <li className="flex-1 text-center">{grade}</li>
          <li className="flex-1 text-center">{classroom}</li>
          <li className="flex-1 text-center">{subject}</li>
          <li className="flex-1 text-center">{performanceTitle}</li>
          <li className="flex-1 text-center">{endDay}</li>
          <div className="flex-1 text-center">
            <button className="font-pretendard font-medium text-[0.8vw] min-w-[2.2vw] min-h-[3vh] rounded-md text-white bg-main">
              수정
            </button>
          </div>
          <div className="flex-1 text-center">
            <button className="font-pretendard font-medium text-[0.8vw] min-w-[2.2vw] min-h-[3vh] rounded-md text-white bg-red">
              삭제
            </button>
          </div>
        </ul>
      </main>
    </>
  );
}
