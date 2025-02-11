import React, { useState } from "react";
import Savat from "../../../assets/Savat";
import useMyStore from "../../../My_store";

function Modal() {
  const [modal, setModal] = useState(false);
  const { savatcha } = useMyStore();



  const addCart = (item) => {
    const topish = savatcha.find((prod) => prod.id === item.id);

    if (topish) {
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


const handleDel= (id)=>{
  const del = savatcha.filter(item=>item.id!== id)
  useMyStore.setState({
    savatcha:del
  })
}


  const minus = (item) => {
    if (item.soni > 1) {
      const update = savatcha.map((i) =>
        i.id === item.id ? { ...i, soni: i.soni - 1 } : i
      );
      useMyStore.setState({
        savatcha: update,
      });
    }
  };
  const plus = (item) => {
    const update = savatcha.map((i) =>
      i.id === item.id ? { ...i, soni: i.soni + 1 } : i
    );

    useMyStore.setState({
      savatcha: update,
    });
  };
  const pricee = savatcha.reduce((avv,hoz)=>avv+hoz.sale_price*hoz.soni,0)
  console.log(savatcha);
  
  return (
    <div className="relative">
      <button onClick={() => setModal(true)}>
        <Savat />
      </button>
      {modal && (
        <div className="fixed inset-0 z-20 bg-black/90 flex items-center justify-center">
          <div className="bg-white overflow-auto p-6 rounded-lg h-[600px] w-[1100px] ">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Savatcha</h2>
              <button onClick={() => setModal(false)} className="text-6xl">
                ×
              </button>
            </div>

            {savatcha.length > 0 ? (
              <div className="flex  gap-6 my-10">
                <div>
                  {savatcha.map((item) => {
                    console.log(item);

                    return (
                      <div className="flex  items-center gap-5 justify-between">
                        <div className="flex items-center gap-10">
                          <img width={100} src={item.image} alt="" />
                          <p className="w-60">{item.name}</p>
                          <div className="flex gap-5 bg-slate-200 rounded-xl p-2">
                            <button
                              onClick={() => {
                                minus(item);
                              }}
                            >
                              -
                            </button>
                            <p>{item.soni}</p>
                            <button
                              onClick={() => {
                                plus(item);
                              }}
                            >
                              +
                            </button>
                          </div>
                          <p>{(item.sale_price).toLocaleString("ru")}</p>
                          <div className="text-red-500">
                            <p onClick={()=>{
                              handleDel(item.id)
                            }}>dalete</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="border h-48 border-slate-400 rounded-xl p-4 w-80">
                  <div className="bg-slate-200 rounded-xl p-1 flex gap-2">
                    <button className="w-full cursor-pointer bg-white rounded-xl">
                      Hoziroq Tanlash
                    </button>
                    <button className="w-full cursor-pointer  rounded-xl">
                      Muddatli Tolov
                    </button>
                  </div>
                  <div className="flex my-6 justify-between items-center ">
                    <p>Maxsulot Narxi</p>
                    <p>{(pricee).toLocaleString("ru")} som </p>
                  </div>
                  <div className="flex font-bold text-xl justify-between items-center ">
                    <p>Jami:</p>
                    <p>{(pricee).toLocaleString('ru')} som </p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <p className="mx-auto flex justify-center text-6xl">savatcha bo‘sh</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
