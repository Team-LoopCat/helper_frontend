import ColorDot from "../../assets/ColorDot.svg";
import BlackDot from "../../assets/BlackDot.svg";

interface Props {
  name: string;
  isSelected: boolean;
  onClick: (name: string) => void;
}

export default function Menu({ name, isSelected, onClick }: Props) {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <div className="flex items-center gap-5 hover: cursor-pointer focus:outline-none" onClick={handleClick}>
      <img src={isSelected ? ColorDot : BlackDot} alt="점" />
      <p className={`font-pretendard font-semibold ${isSelected ? "text-black" : "text-gray500"}`}>{name}</p>
    </div>
  );
}
