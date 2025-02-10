import Likes from "../../assets/Likes";
import LikesRed from "../../assets/LikeRed";
import useMyStore from "../../LikeMyStore"; 

function LikeCard({ item }) {
  const { likedItems, toggleLike } = useMyStore(); 
  const isLiked = likedItems.some((liked) => liked.id === item.id); 

  return (
    <button onClick={() => toggleLike(item)} className="cursor-pointer">
      {isLiked ? <LikesRed /> : <Likes />}
    </button>
  );
}

export default LikeCard;
