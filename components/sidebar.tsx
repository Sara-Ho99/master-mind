import Image from "next/image";
import SidebarRoutes from "./sidebar-routes";

function Sidebar() {
  return (
    <div className="h-full border-r flex flex-col overflow-y-auto bg-sky-200/20 shadow-sm">
      <div className="p-6">
        <Image height={130} width={130} alt="logo" src="/logo.svg" />
      </div>
      <div className="flex flex-col w-full">
        <SidebarRoutes />
      </div>
    </div>
  );
}

export default Sidebar;
