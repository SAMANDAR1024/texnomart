import { useState } from "react";
import Likes from "../../assets/Likes";
import LikesRed from "../../assets/LikeRed";

function LikeCard() {
  const [like, setLike] = useState(false);
  return (
    <button
      onClick={() => {
        setLike(!like);
      }}
      className="cursor-pointer"
    >
      {like ? <LikesRed /> : <Likes />}
    </button>
  );
}

export default LikeCard;
