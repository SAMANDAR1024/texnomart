import React from "react";
import { Link } from "react-router";
import SavatKorzina from "../../assets/Savat";
import FavouriteIcon from "../../icons/favourite-stroke-rounded";
import useMyStore from "../../My_store";

function Produkt({item, ind}) {

    if (!item) {
        return <p>Mahsulot ma’lumoti mavjud emas</p>;
      }

    const { savatcha,like } = useMyStore();

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
    <div key={ind}>
      <div className="w-64 h-[450px] relative mb-5 p-6 cursor-pointer bg-white hover:shadow-lg rounded-2xl">
        <Link to={`/cart/${item.id}`}>
          <img className="w-60 h-48" src={item.image} alt="" />
          <h2 className="my-2 cursor-pointer">{item.name}</h2>
          <button className="bg-slate-200 cursor-pointer my-8 p-1 px-2 text-sm rounded-full font-medium">
            {item.axiom_monthly_price.toLocaleString("ru")}
          </button>
        </Link>
        <div className="flex items-center justify-between">
          <p className="cursor-pointer">
            <span className="font-bold text-lg">
              {item.sale_price.toLocaleString("ru")}
            </span>{" "}
            som
          </p>
          <div className="border-2 cursor-pointer border-amber-500 p-1 rounded-xl">
            <button
              onClick={() => {
                addCart(item);
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
              <FavouriteIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Produkt;
