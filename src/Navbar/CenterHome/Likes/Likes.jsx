import { useState } from "react";
import Likes from "../../../assets/Likes";
import LikesRed from "../../../assets/LikeRed";

function Like() {
  const [like, setLike] = useState(false);
  return (
    <div className="flex flex-col items-center ">
      <button
        onClick={() => {
          setLike(!like);
        }}
        className="cursor-pointer"
      >
        {like ? <LikesRed /> : <Likes />}
      </button>

      <p className="text-xl cursor-pointer">Sevimlilar</p>
    </div>
  );
}

export default Like;
