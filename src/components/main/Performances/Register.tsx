import { useRef, useState } from "react";
import Percent from "../../../assets/Performance/Percent.svg";
import RegisterList from "./RegisterList";

export default function Register() {
  const [isSelected, setIsSelected] = useState<string>(""); // 선택된 항목 관리
  const FileInput = useRef<HTMLInputElement | null>(null);

  const HandleSelected = (Select: string) => {
    setIsSelected(Select); // 새로운 항목 선택 시 상태 업데이트
  };

  const onClickFileUpload = () => {
    if (FileInput.current) {
      FileInput.current.click();
    }
  };

  return (
    <>
      {/** container */}
      <div className="flex flex-col min-w-[60vw] min-h-[auto] py-[9vh] absolute top-[7vh] right-[9vw] gap-[30px] ">
        {/** select component */}
        <div className="flex flex-col">
          <label className="font-pretendard text-[18px] text-gray700 ">
            과목명
          </label>
          <select
            name=""
            id=""
            className="flex text-center font-pretendard font-semibold text-[20px] max-w-[12vw] min-h-[6vh] border border-gray600 rounded-[8px] px-[10px] "
          >
            <option value="">자바프로그래밍</option>
            <option value="">웹 프로그래밍</option>
            <option value="">운영체제</option>
            <option value="">컴퓨터 네트워크</option>
          </select>
        </div>

        {/** 수행평가명 component */}
        <div className="flex flex-col">
          <label className="font-pretendard text-[18px] text-gray700 ">
            수행평가명
          </label>
          <input
            type="text"
            placeholder="수행평가명을 입력해주세요"
            className="max-w-[40vw] min-h-[5vh] border border-gray600 rounded-[8px] px-[10px] outline-none "
          />
        </div>

        {/** 수행평가 설명 component */}
        <div className="flex flex-col">
          <label className="font-pretendard text-[18px] text-gray700 ">
            수행평가 설명
          </label>
          <textarea
            placeholder="수행평가에 대한 설명을 입력해주세요"
            className="max-w-[40vw] min-h-[12vh] resize-none border border-gray600 rounded-[8px] px-[10px] py-[18px] outline-none "
          />
        </div>

        {/** 반영 비율 */}
        <div className="flex flex-col">
          <label className="font-pretendard text-[18px] text-gray700 ">
            반영 비율
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="반영 비율"
              className="max-w-[160px] min-h-[54px] border border-gray600 rounded-[8px] px-[20px] outline-none "
            />
            <img
              className="absolute top-[2.2vh] left-[6.5vw]"
              src={Percent}
              alt=""
            />
          </div>
        </div>

        {/** 마감 날짜 */}
        <div>
          <label htmlFor="">마감 날짜</label>
          <ul className="flex max-w-[32vw] py-[1.5vh] border-t border-b border-main bg-opacityMain ">
            <li className="flex-1 text-center ">선택</li>
            <li className="flex-1 text-center ">학년</li>
            <li className="flex-1 text-center ">반</li>
            <li className="flex-[2] text-center ">마감일</li>
          </ul>

          {/** RegisterList 컴포넌트에 isSelected를 전달하여 선택 상태 관리 */}
          <RegisterList
            grade={2}
            classroom="공통"
            date="2024-08-30"
            isSelected={isSelected === "공통"} // 선택 상태 반영
            onClick={HandleSelected} // 클릭 시 상태 변경
          />
          <RegisterList
            grade={2}
            classroom="1"
            date="2024-08-30"
            isSelected={isSelected === "1"}
            onClick={HandleSelected}
          />
          <RegisterList
            grade={2}
            classroom="2"
            date="2024-08-30"
            isSelected={isSelected === "2"}
            onClick={HandleSelected}
          />
        </div>

        {/** 평가 기준 */}
        <div className="flex flex-col gap-[2px]">
          <label htmlFor="" className="text-[1vw] text-gray700">
            평가기준
          </label>
          <p className="text-[0.8vw] text-gray600">
            수행평가 기준을 올려주세요
          </p>
          <input type="file" className="hidden" ref={FileInput} />
          <button
            onClick={onClickFileUpload}
            className="max-w-[160px] min-h-[40px] border rounded-[4px] border-gray500 text-gray700 bg-gray100 "
          >
            파일 업로드
          </button>
        </div>

        {/** 등록 버튼 */}
        <div className="flex justify-end max-w-[40vw]">
          <button className="font-semibold min-w-[120px] min-h-[42px] rounded-[8px] text-white bg-main ">
            등록하기
          </button>
        </div>
      </div>
    </>
  );
}
