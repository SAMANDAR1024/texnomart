
import Savat from "../../assets/Savat";
import UserIcon from "../../assets/User";
import Like from "./Likes/Likes";

function ThreeText() {
  return (
    <div className="flex cursor-pointer items-center gap-15">
      <div className="flex flex-col items-center ">
        <UserIcon />
        <p className="text-xl">Kirish</p>
      </div>{" "}
      <Like />
      <div className="flex flex-col items-center ">
        <Savat />
        <p className="text-xl">Savat</p>
      </div>
    </div>
  );
}

export default ThreeText;
