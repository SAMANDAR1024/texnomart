import Katalog from "./Katalog";

function TwoText() {
  return (
    <div className="flex items-center gap-5">
      <Katalog/>
      <input
        className="w-[600px] cursor-pointer p-2 rounded-xl border-2 border-amber-500"
        type="text "
        placeholder="Qidirish"
      />
    </div>
  );
}

export default TwoText;
