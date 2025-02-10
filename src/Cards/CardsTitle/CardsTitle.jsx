import { useEffect, useState } from "react";
import SavatKorzina from "../../assets/Savat";
import axios from "axios";
import LikeCard from "./LikeCard";
import useMyStore from "../../My_store"; 

function CardsTitle() {
  const [cards, setCards] = useState([]);
  const addToCart = useMyStore((state) => state.addToCart); 

  useEffect(() => {
    axios(
      "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
    ).then((res) => {
      const data = res.data.data.data;
      setCards(data.slice(0, 5)); 
    });
  }, []);

  return (
    <div className="grid grid-cols-5 items-center gap-2">
      {cards.map((item, ind) => {
        return (
          <div key={ind}>
            <div className="w-64 h-[450px] relative p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl">
              <button className="absolute right-3 top-1">
                <LikeCard />
              </button>
              <img className="w-60" src={item.image} alt="" />
              <h2 className="my-2 cursor-pointer">{item.name}</h2>
              <button className="bg-slate-200 cursor-pointer my-8 p-1 px-2 text-sm rounded-full font-medium">
                {item.axiom_monthly_price}
              </button>
              <div className="flex items-center justify-between">
                <p className="cursor-pointer">
                  <span className="font-bold text-lg">{item.sale_price}</span>{" "}
                  som
                </p>
                <div
                  className="border-2 cursor-pointer border-amber-500 p-1 rounded-xl"
                  onClick={() => addToCart(item)} 
                >
                  <SavatKorzina />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsTitle;
