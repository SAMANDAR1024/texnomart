import { useEffect, useState } from "react";
import SavatKorzina from "../../assets/Savat";
import axios from "axios";
// import LikeCard from "./LikeCard";
import useMyStore from "../../My_store";
import FavouriteIcon from "../../icons/favourite-stroke-rounded";
import { Link } from "react-router";
// import useMyStore from "../../My_store";

function CardsTitle() {
  const [cards, setCards] = useState([]);
  // const addToCart = useMyStore((state) => state.addToCart);

  const { savatcha,like } = useMyStore();
  useEffect(() => {
    axios(
      "https://gw.texnomart.uz/api/web/v1/home/special-products?type=hit_products"
    ).then((res) => {
      const data = res.data.data.data;
      setCards(data);
    });
  }, []);
  const addCart = (item) => {
    const bomi = savatcha.find((prod) => prod.id === item.id);

    if (bomi) {
      const qoshishSavatcha = savatcha.map((prod) =>
        prod.id === item.id ? { ...prod, soni: prod.soni + 1 } : prod
      );
      useMyStore.setState({
        savatcha: qoshishSavatcha,
      });
    } else {
      const newProduct = {
        ...item,
        soni: 1,
      };
      useMyStore.setState({
        savatcha: [...savatcha, newProduct],
      });
    }
  };
  return (
    <div className="grid grid-cols-5 items-center gap-2">
      {cards.map((item, ind) => {
        // console.log(item);

        return (
          <div key={ind}>
            <div className="w-64 h-[450px] relative mb-5 p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl">
              <Link to={`/cart${item.id}`}>
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
                  // onClick={() => addToCart(item)}
                >
                  <button
                    onClick={() => {
                      addCart(item)
                      // const aa = savatcha.concat({
                      //   name: item.name,
                      //   id: item.id,
                      //   image: item.image,
                      //   sale_price: item.sale_price,
                      // });
                      // useMyStore.setState({
                      //   savatcha: aa,
                      // });
                    }}
                  >
                    <SavatKorzina />
                  </button>
                  <button
                    onClick={() => {
                      const layk = like.concat({
                        name: item.name,
                        id: item.id,
                        image: item.image,
                        sale_price: item.sale_price,
                      });
                      useMyStore.setState({
                        like: layk,
                      });
                      console.log(layk);
                      
                    }}
                    className="absolute right-3 top-1"
                  >
                    {/* <LikeCard item={item} /> */}
                    <FavouriteIcon />
                  </button>
                </div>
              </div></Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardsTitle;
