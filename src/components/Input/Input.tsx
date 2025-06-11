import { PropsInput } from "./type";
type Props = {
  propsInput: PropsInput;
};
export default function Input({ propsInput }: Props) {
  return (
    <input
      type={propsInput.type}
      placeholder={propsInput.placeholder}
      className="p-2 w-full rounded-xl border-gray-400 border"
      onChange={propsInput.onChange}
      value={propsInput.value}
    />
  );
}
