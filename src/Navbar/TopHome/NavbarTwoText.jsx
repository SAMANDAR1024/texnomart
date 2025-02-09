import LanguAge from "./LanguAge";

function NavbarTwoText() {
  return (
    <div className="flex items-center gap-10">
      <div className="flex items-center gap-2">
        <h2 className="cursor-pointer">Aloqa markazi :</h2>
        <a className="cursor-pointer text-xl" href="tel:+998944085444">
          +998 94 408 54 44
        </a>
      </div>
      <LanguAge />  
    </div>
  );
}

export default NavbarTwoText;
