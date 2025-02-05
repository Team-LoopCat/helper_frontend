import React, { useState } from "react";
import * as S from "./style";
import Header from "../../../components/header";
import Aside from "../../../components/aside";
import Filter from "../../../assets/filter.svg";
import Add from "../../../assets/add.svg";
import AddList from "./AddList"; // 추가된 컴포넌트

interface PerformanceItem {
  subject: string;
  performanceName: string;
  period: string;
}

export default function PerformanceList() {
  const [items, setItems] = useState<PerformanceItem[]>([]);

  // 새로운 수행평가 추가
  const handleAddItem = () => {
    const newItem = {
      subject: "수학", // 테스트 값 (실제 구현에서는 입력값을 받아야 함)
      performanceName: "중간고사",
      period: "2024-06-15 ~ 2024-06-20",
    };
    setItems([...items, newItem]); // 기존 리스트에 새로운 항목 추가
  };

  return (
    <>
      <Header />
      <S.Container>
        <Aside />
        <S.ListBox>
          <S.TitleBox>
            <div>
              <S.Title>수행평가 관리</S.Title>
              <S.SubTitle>수행평가를 등록하고 관리해보세요</S.SubTitle>
            </div>
            <div>
              <img src={Filter} alt="" />
              <img src={Add} alt="" onClick={handleAddItem} /> {/* 클릭 시 추가 */}
            </div>
          </S.TitleBox>
          <S.List>
            {["과목", "수행평가 이름", "수행평가 기간"].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
            <li className="action-items">
              <span>수정</span>
              <span>삭제</span>
            </li>
          </S.List>

          {items.map((item, index) => (
            <AddList
              key={index}
              Subject={item.subject}
              PerformanceName={item.performanceName}
              Period={item.period}
            />
          ))}
        </S.ListBox>
      </S.Container>
    </>
  );
}
