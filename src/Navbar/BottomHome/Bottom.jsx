import axios from "axios";
import { useEffect, useState } from "react";
import olov from "../../assets/olov.svg";
function NavbarBottom() {
  const [navbarText, setNavbarText] = useState([]);
  useEffect(() => {
    axios("https://gw.texnomart.uz/api/web/v1/header/top-categories").then(
      (response) => {
        setNavbarText(response.data.data.data);
      }
    );
  }, []);
  return (
    <div className="bg-slate-200">
      <div className="flex items-center py-2 text-lg gap-2 transition-all duration-300 justify-between container mx-auto px-16">
        <div className="flex items-center gap-1 ">
          <img className="w-5" src={olov} alt="" />
          <h2 className="cursor-pointer hover:opacity-60">Aksiyalar</h2>
        </div>
        {navbarText.map((item, ind) => {
          return (
            <div key={ind}>
              <p className="cursor-pointer hover:opacity-60">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavbarBottom;
