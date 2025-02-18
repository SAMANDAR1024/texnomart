import React, { useState } from "react";
// import Bosilganda from "../../icons/bosilganda";
import Tepaga from "../../icons/menu-05-stroke-rounded";
import Bosilganda from "../../icons/bosilganda";
import useMyStore from "../../My_store";

function Sort({ name, setCurrentSort,  title }) {
  // const [tartibi, setTartibi]= useState(false)
  const state = useMyStore();
const {tartibi}= state
  return (
    <>
      <div
        onClick={() => {
          useMyStore.setState({
            tartibi: !tartibi
          })
          setCurrentSort(name)
        }}
        className="flex items-center gap-1 select-none"
      >
        <p className="cursor-pointer text-sm opacity-70">{title}</p>
        <button>{state.currentSort === name ? <>{ state.tartibi ? <Tepaga /> : <Bosilganda/> }</> : null}</button>
      </div>
    </>
  );
}

export default Sort;
