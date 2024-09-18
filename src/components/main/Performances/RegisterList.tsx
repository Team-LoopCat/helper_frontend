interface Props {
  grade: number;
  classroom: string;
  date: string;
  isSelected: boolean; // 선택 상태를 표시
  onClick: (classroom: string) => void; // 선택 이벤트 처리
}

export default function RegisterList({
  grade,
  classroom,
  date,
  isSelected,
  onClick,
}: Props) {
  return (
    <>
      <ul
        className={`flex max-w-[32vw] py-[1.5vh] border-b border-main cursor-pointer ${
          isSelected ? "bg-blue-100" : ""
        }`} // 선택된 경우 스타일 변경
        onClick={() => onClick(classroom)} // 클릭 시 onClick 호출
      >
        <li className="flex-1 text-center ">
          <input
            type="checkbox"
            checked={isSelected} // 선택 상태에 따라 체크박스 상태 변경
            onChange={() => onClick(classroom)} // 체크박스 클릭 시 선택 처리
            className="accent-main "
          />
        </li>
        <li className="flex-1 text-center">{grade}</li>
        <li className="flex-1 text-center">{classroom}</li>
        <li className="flex-[2] text-center">{date}</li>
      </ul>
    </>
  );
}
