import Likes from "../../../assets/Likes";
import useMyStore from "../../../My_store";

function Like() {
  const{like}=useMyStore()

  return (
    <div className="relative flex flex-col items-center cursor-pointer">
      <Likes />
      {like.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {like.length}
        </span>
      )}
      <p className="text-xl">Sevimlilar</p>
    </div>
  );
}

export default Like;
