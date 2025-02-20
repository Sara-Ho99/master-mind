import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "./navbar-routes";

function Navbar() {
  return (
    <nav className="p-4 border-b h-full flex items-center bg-sky-200/20 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </nav>
  );
}

export default Navbar;
