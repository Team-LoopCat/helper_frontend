/**
 *
 * @returns Login Input 컴포넌트
 */

interface Props {
  type?: string;
  placeholder?: string;
  value?: string;
  name?: string;
  onChange?: (e: any) => void;
}

export default function LoginInput({ type, value, name, placeholder, onChange }: Props) {
  return (
    <>
      <input
        name={name}
        value={value}
        onChange={onChange}
        className="font-pretendard px-5 w-[28vw] h-[6vh] border border-border rounded-xl focus:outline-none focus:border-main focus:delay-200"
        type={type}
        placeholder={placeholder}
      />
    </>
  );
}
