import Language from "../../assets/Language";

function LanguAge() {
  return (
    <div className="cursor-pointer p-1 border flex items-center justify-center gap-2 border-gray-400 rounded-full w-28">
      <Language />
      {/* <button className="cursor-pointer">Oz ▽</button> */}
      <select className="flex items-center cursor-pointer  rounded-xl" name="" id="">
        <option className="text-black px-3 w-28 rounded-xl" value="">uzb</option>
        <option className="text-black px-3 w-28 rounded-xl" value="">eng</option>
        <option className="text-black px-3 w-28 rounded-xl" value="">rus</option>
      </select>
    </div>
  );
}

export default LanguAge;
