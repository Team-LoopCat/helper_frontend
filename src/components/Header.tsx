import Logo from "../assets/WidthLogo.svg"

export default function Header() {
  return (
    <>
      <header className="flex items-center min-h-[8vh] border-b min-w-[100%] border-gray300 px-[7vw] fixed">
        <img src={Logo} alt="로고" />
      </header>
    </>
  );
}
