import { Button } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Produkt from "./Produkt";

function Aksesuars({ ProductId }) {
  const [aksesuar, setAksesuar] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    axios
      .get(
        `https://gw.texnomart.uz/api/web/v1/product/accessories?id=${ProductId}`
      )
      .then((res) => {
        setAksesuar(res.data.data.data);
        console.log(res.data.data.data);
      });
  }, []);

  if (aksesuar.length === 0) {
    return <div>
        Loading...
    </div>
  }
  return (
    <div>
      <div className="text-4xl font-bold my-5">Aksesuar</div>
      <div className="flex flex-wrap gap-2">
        {aksesuar.map((item, index) => {
          return (
            <div key={item.name}>
              <Button
                onClick={() => {
                  setActiveIndex(index);
                }}
                type={activeIndex === index ? "primary" : "default"}
              >
                {item.name}
              </Button>
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 overflow-auto my-10">
        {aksesuar[activeIndex].products.map((product) => {
          return <Produkt key={product.id} item={product} />;
        })}
      </div>
    </div>
  );
}

export default Aksesuars;
