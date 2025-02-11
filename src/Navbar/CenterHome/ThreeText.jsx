import UserIcon from "../../assets/User";
import useMyStore from "../../My_store";
import Like from "./Likes/Likes";
// import useMyStore from "../../My_store";
import Modal from "./Modal/Modal";

function ThreeText() {
  const { savatcha } = useMyStore();
  // const cartLength = useMyStore((state) => state.cart.length);
  return (
    <div className="flex cursor-pointer items-center gap-15">
      <div className="flex flex-col items-center">
        <UserIcon />
        <p className="text-xl">Kirish</p>
      </div>
      <Like />
      <div className="relative flex flex-col items-center">
        <Modal />
        <p className="text-xl">Savat</p>
        <button className="bg-red-500 px-2 text-white text-sm rounded-full  absolute top-[-10px] right-0 ">
          {savatcha.length}
        </button>
      </div>
    </div>
  );
}

export default ThreeText;
