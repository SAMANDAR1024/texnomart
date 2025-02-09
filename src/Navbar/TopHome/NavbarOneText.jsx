import Locatioon from "./Locatioon";

function NavbarOneText() {
  return (
    <div className="flex items-center gap-7">
      <Locatioon />
      <div className="flex items-center gap-5 ">
        <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
          Bizning dokonlarimiz
        </p>
        <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
          Yuridik shaxslar uchun
        </p>
        <p className="cursor-pointer hover:bg-gray-700 rounded-xl px-2 py-1 ">
          Tolov usullari
        </p>
      </div>
    </div>
  );
}

export default NavbarOneText;
