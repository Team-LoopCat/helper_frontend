import Logo from "../assets/WidthLogo.svg"

export default function Header() {
  return (
    <>
      <header className="flex items-center min-h-20 border-b min-w-[100%] border-gray300 px-44 fixed">
        <img src={Logo} alt="로고" />
      </header>
    </>
  );
}
