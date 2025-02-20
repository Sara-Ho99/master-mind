// default export so no need to destructure
import Sidebar from "../../components/sidebar";
import Navbar from "../../components/navbar";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <div className="h-[66.5px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[66.5px] h-full">{children}</main>
    </div>
  );
}

export default HomeLayout;
