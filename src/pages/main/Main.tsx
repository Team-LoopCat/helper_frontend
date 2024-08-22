import Profile from "../../assets/Profile.svg";
import Menu from "../../components/main/Menu";
import { useState } from "react";
import Header from "../../components/Header";
import PerformancePg from "../../components/main/PerformancePg";
/**
 *
 * @returns Main Page
 */

export default function Main() {
  const [selectedMenu, setSelectedMenu] = useState<string>("수행평가");

  const HandleMenuClick = (menuName: string) => {
    setSelectedMenu(menuName);
  };

  return (
    <>
      <Header />
      {/** nav와 main을 묶은 div (container 역할 느낌) */}
      <div className="flex gap-20 relative">
        {/** 반응형으로 구현할 것, border-r가 밑에 까지 닿도록 할 것 */}
        <aside className="flex flex-col max-w-[30vw] pt-[8vh] pr-[3vw] pl-[8vw] gap-5 border-r border-gray300 fixed top-[8vh] bottom-0">
          {/** Profile 부분, 선생님 이름 · 해당 선생님의 과목 연동해야 함 */}
          <div className="flex items-center gap-5">
            <div>
              <p className="font-pretendard font-bold text-[1.5vw]">
                {"Tname"} 선생님
              </p>
              <p className="font-pretendard font-semibold text-[0.9vw] text-gray600">
                {"SubjectName"}
              </p>
            </div>
            <img src={Profile} alt="프로필" />
          </div>
          {/** Menu 부분 */}
          <div className="flex flex-col gap-5 max-w-[40vw] min-h-[10vh] text-[0.9vw] border-t border-b border-gray300 p-[2vw]">
            <Menu
              name="수행평가"
              isSelected={selectedMenu === "수행평가"}
              onClick={HandleMenuClick}
            />
            <Menu
              name="지필고사"
              isSelected={selectedMenu === "지필고사"}
              onClick={HandleMenuClick}
            />
            <Menu
              name="안내사항"
              isSelected={selectedMenu === "안내사항"}
              onClick={HandleMenuClick}
            />
            <Menu
              name="내 정보 수정"
              isSelected={selectedMenu === "내 정보 수정"}
              onClick={HandleMenuClick}
            />
          </div>
          {/** 로그아웃 버튼 */}
          <button className="font-pretendard font-semibold text-[0.8vw] text-white max-w-[5vw] min-h-[3.5vh] rounded-md bg-main">
            로그아웃
          </button>
        </aside>
        {/** main을 컴포넌트화 시키기 */}
        
          <PerformancePg />
      </div>
    </>
  );
}
