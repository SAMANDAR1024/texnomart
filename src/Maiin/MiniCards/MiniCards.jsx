import axios from "axios";
import { useEffect, useState } from "react";

function MiniCards() {
  const [miniCards, setMiniCards] = useState([]);

  useEffect(() => {
    axios("https://gw.texnomart.uz/api/web/v1/home/special-categories").then(
      (res) => {
        console.log(res.data.data.data);

        setMiniCards(res.data.data.data);
      }
    );
  }, []);
  return (
    <div className="flex items-center gap-4  overflow-auto">
      {miniCards.map((item , ind) => {
        return (
          <div key={ind}>
            <div className="rounded-xl p-2">
              <div className="relative min-w-44" >
                <p className="absolute top-2 left-2 text">{item.title}</p>
                <img className="w-96" src={item.image} alt="" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MiniCards;
