import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Produkt from "../../Cards/CardsTitle/Produkt";


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
<Produkt item={item}/>
          )
        })}
      </div>
      
    </>
  );
}
export default CatalogPage;
