import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-orange-300 flex justify-center items-center p-2">
      <Image
        alt="logo"
        width={80}
        height={80}
        src="/header/logo.jpg"
        className="rounded-full"
      />
    </div>
  );
}
