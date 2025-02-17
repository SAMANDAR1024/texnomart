import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Produkt from "../../Cards/CardsTitle/Produkt";
import Sort from "./Sort";
import { Pagination } from "antd";

function CatalogPage() {
  const params = useParams();
  const [catigor, setCatigor] = useState();
  const [catigor1, setCatigor1] = useState(1);
  const [currentSort, setCurrentSort] = useState("Narxi Boyicha");
  useEffect(() => {
    setCatigor();
    axios
      .get(
        `https://gw.texnomart.uz/api/common/v1/search/filters?category_all=${params.slug}&sort=-order_count&page=${catigor1}`
      )
      .then((res) => {
        console.log(res.data.data);
        setCatigor(res.data.data);
      });
  }, [params.slug, catigor1]);

  if (!catigor) {
    return (
      <div className="mx-auto  text-center inset-0 text-6xl">Loading...</div>
    );
  }

  const arr = [
    { name: "Narxi Boyicha" },
    { name: "Reyting Boyicha" },
    { name: "Yangi Kelganlar Boyicha" },
    { name: "Ommabopligi Boyicha" },
  ];
  return (
    <>
      <div className="flex mx-auto px-16 my-10  container gap-10">
        <div className="w-[20%]">
          <div className="flex  justify-between">
            <p>Narxi</p>
            <p>▲</p>
          </div>
        </div>
        <div>
          <div className=" flex mb-10 justify-between items-center">
            <div className="flex  gap-10 items-center">
              {arr.map((item, ind) => {
                return (
                  <div key={ind}>
                    <Sort
                      setCurrentSort={setCurrentSort}
                      currentSort={currentSort}
                      name={item.name}
                    />
                  </div>
                );
              })}
              {/* <Sort
                setCurrentSort={setCurrentSort}
                currentSort={currentSort}
                name={"Reyting Boyicha"}
              />
              <Sort
                setCurrentSort={setCurrentSort}
                currentSort={currentSort}
                name={"Yangi Kelganlar Boyicha"}
              />
              <Sort
                setCurrentSort={setCurrentSort}
                currentSort={currentSort}
                name={"Ommabopligi Boyicha"}
              /> */}
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
