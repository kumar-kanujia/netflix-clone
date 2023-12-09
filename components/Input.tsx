import { ChangeEvent, FC } from "react";

interface InputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

const Input: FC<InputProps> = ({ id, label, onChange, value, type }) => {
  return (
    <div className="relative">
      <input
        id={id}
        className="block rounded-md px-6 pt-6 pb-1 w-full text-base text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer "
        placeholder=" "
        value={value}
        onChange={onChange}
        type={type}
      />
      <label
        className="absolute text-base text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
        htmlFor="email"
      >
        {label}
      </label>
    </div>
  );
};
export default Input;
