import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


function CatalogPage() {
  const params = useParams();
  const [catigor, setCatigor] = useState([]);
  useEffect(() => {
    setCatigor()
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=1`
      )
      .then((res) => {
        console.log(res.data.data.products);
        setCatigor(res.data.data.products);
      });
  }, [params.slug]);
  
  if (!catigor) {
    return <div className="mx-auto  text-center inset-0 text-6xl">Loading...</div>
  }
  return (
    <>
      {/* <p>{params.slug}</p> */}
      <div className="grid grid-cols-4 mx-auto px-16 my-10  container gap-4">
        {catigor.map((item) => {
          return (
            <div className=" p-2 rounded-2xl hover:shadow-2xl mx-auto w-72">
              <img className="mx-auto w-52 h-52" width={150} src={item.image} alt="" />
              <p className="mb-10">{item.name}</p>
              <button className="bg-slate-200 rounded-2xl px-2 text-sm">{item.axiom_monthly_price}</button>
              <p className="my-8 text-2xl font-bold">{(item.sale_price).toLocaleString('ru')} So'm</p>
            </div>
          )
        })}
      </div>
      
    </>
  );
}
export default CatalogPage;
