import React, { useState } from "react";
// import Bosilganda from "../../icons/bosilganda";
import Tepaga from "../../icons/menu-05-stroke-rounded";
import Bosilganda from "../../icons/bosilganda";

function Sort({ name, setCurrentSort, currentSort }) {
  const [tartibi, setTartibi]= useState(false)
  return (
    <>
      <div
        onClick={() => {
          setTartibi(!tartibi)
          setCurrentSort(name);
        }}
        className="flex items-center gap-1 select-none"
      >
        <p className="cursor-pointer text-sm opacity-70">{name}</p>
        <button>{currentSort === name ? <>{ tartibi ? <Tepaga /> : <Bosilganda/> }</> : null}</button>
      </div>
    </>
  );
}

export default Sort;
