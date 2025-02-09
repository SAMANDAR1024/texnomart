import NavbarOneText from "./NavbarOneText";
import NavbarTwoText from "./NavbarTwoText";

function NavbarTop() {
  return (
    <div className="bg-black text-sm">
      <header className="container w-full mx-auto p-1 px-16 text-white">
        <div className="flex items-center justify-between">
          <NavbarOneText/>
          <NavbarTwoText/>
        </div>
      </header>
    </div>
  );
}

export default NavbarTop;
