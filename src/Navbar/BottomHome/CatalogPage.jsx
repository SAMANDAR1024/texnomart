import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Produkt from "../../Cards/CardsTitle/Produkt";
import Sort from "./Sort";
import { Collapse, Pagination } from "antd";
import useMyStore from "../../My_store";
import SideLeft from "./SideLeft";

function CatalogPage() {
  const params = useParams();
  const [catigor, setCatigor] = useState();
  const [catigor1, setCatigor1] = useState(1);

  const state = useMyStore();
const {tartibi}= state

  useEffect(() => {
    setCatigor();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${
          params.slug
        }&sort=${tartibi ? "-" : ""}${state.currentSort}&page=${catigor1}`
      )
      .then((res) => {
        setCatigor(res.data.data);
        console.log(res.data.data);
        
      });
  }, [params.slug, catigor1, state.currentSort, tartibi]);

  if (!catigor) {
    return (
      <div className="mx-auto  text-center inset-0 text-6xl">Loading...</div>
    );
  }

  const arr = [
    { name: "price", title: "Narxi Boyicha " },
    { name: "rating", title: "Retingi Boyicha " },
    { name: "new", title: "Yangi kelganlar Boyicha " },
    { name: "order_count", title: "Ommabopligi Boyicha " },
  ];
  function onChange(name) {
    useMyStore.setState({
      currentSort: name,
    });
  }
//   console.log(setCatigor);
  
  return (
    <>
      <div className="flex mx-auto px-16 my-10  container gap-10">
        <div className="w-[20%]">
          <SideLeft filter={catigor.filter}/>
         
          
        </div>
        <div>
          <div className=" flex mb-10 justify-between items-center">
            <div className="flex  gap-10 items-center">
              {arr.map((item, ind) => {
                return (
                  <div key={ind}>
                    <Sort
                      setCurrentSort={onChange}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                );
              })}
            </div>

            <div>icon icon</div>
          </div>
          <div className="grid grid-cols-4  gap-5">
            {catigor.products.map((item, ind) => {
              return (
                <div key={ind}>
                  <Produkt item={item} />
                </div>
              );
            })}
          </div>
          <Pagination
            className="flex justify-center"
            pageSize={catigor.pagination.page_size}
            defaultCurrent={catigor1}
            total={catigor.pagination.total_count}
            onChange={(page) => {
              setCatigor1(page);
            }}
          />
        </div>
      </div>
    </>
  );
}
export default CatalogPage;
