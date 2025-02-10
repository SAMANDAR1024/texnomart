import Savat from "../../assets/Savat";
import UserIcon from "../../assets/User";
import Like from "./Likes/Likes";
import useMyStore from "../../My_store";

function ThreeText() {
  const cartLength = useMyStore((state) => state.cart.length);
  return (
    <div className="flex cursor-pointer items-center gap-15">
      <div className="flex flex-col items-center">
        <UserIcon />
        <p className="text-xl">Kirish</p>
      </div>
      <Like />
      <div className="relative flex flex-col items-center">
        <Savat />
        {cartLength > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartLength}
          </span>
        )}
        <p className="text-xl">Savat</p>
      </div>
    </div>
  );
}

export default ThreeText;
