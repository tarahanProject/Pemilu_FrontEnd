import Image from "next/image";

export default function PageHeading({ title }) {
  return (
    <div className="p-6 shadow-lg bg-[#D9D9D9] flex justify-between items-center w-full">
      <span className="text-xl text-[#828282] font-semibold">{title}</span>
      <div className="flex gap-5 items-center">
        <p>Admin</p>
        <Image src="/assets/logo.png" alt="Logo DWP" width={50} height={50} />
      </div>
    </div>
  );
}
