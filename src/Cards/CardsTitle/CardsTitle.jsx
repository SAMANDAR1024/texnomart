import { useEffect, useState } from "react";

import axios from "axios";

import Produkt from "./Produkt";


function CardsTitle() {
  const [cards, setCards] = useState([]);
  // const addToCart = useMyStore((state) => state.addToCart);

 
  useEffect(() => {
    axios(
      "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
    ).then((res) => {
      const data = res.data.data.data;
      setCards(data);
    });
  }, []);

  return (
    <div className="grid grid-cols-5 items-center gap-2">
      {cards.map((item, ind) => {

        return (
          <Produkt key={item.id} ind={ind} item={item} />
        );
      })}
    </div>
  );
}

export default CardsTitle;
