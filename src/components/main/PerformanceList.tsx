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
      <main className="border-b border-gray400 pb-4">
        <ul className="flex justify-between items-center">
          <li className="flex-1 text-center">{grade}</li>
          <li className="flex-1 text-center">{classroom}</li>
          <li className="flex-1 text-center">{subject}</li>
          <li className="flex-1 text-center">{performanceTitle}</li>
          <li className="flex-1 text-center">{endDay}</li>
          {/** button 크기 조절해야 함 */}
          <div className="flex-1 text-center">
            <button className="font-pretendard font-medium text-tiny min-w-10 min-h-6 rounded-md text-white bg-main">
              수정
            </button>
          </div>
          <div className="flex-1 text-center">
            <button className="font-pretendard font-medium text-tiny min-w-10 min-h-6 rounded-md text-white bg-red">
              삭제
            </button>
          </div>
        </ul>
      </main>
    </>
  );
}
