import { useState } from "react";
import Menu from "../../assets/Menu";
import X from "../../assets/x";
function Katalog() {
  const [katalog, setKatalog] = useState(false);
  return (
    <button
      onClick={() => {
        setKatalog(katalog === false ? true : false);
      }}
      className="p-2 cursor-pointer bg-yellow-500 rounded-xl flex items-center gap-2 w-32 justify-center"
    >
      {katalog === true ? <X /> : <Menu />}
      Katalog
    </button>
  );
}

export default Katalog;
