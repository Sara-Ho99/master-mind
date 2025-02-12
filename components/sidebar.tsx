import Image from "next/image";
function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-white shadow-sm">
      <div className="p-6">
        <Image height={130} width={130} alt="logo" src="/logo.svg" />
      </div>
    </div>
  );
}

export default Sidebar;
