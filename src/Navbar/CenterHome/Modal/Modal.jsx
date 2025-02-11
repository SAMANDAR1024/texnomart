// import React, { useState } from "react";
// import Savat from "../../../assets/Savat";

// function Modal() {
//   const [modal, setModal] = useState(false);
//   return (
//     <div className="flex flex-col items-center justify-center ">
//       <button onClick={() => setModal(true)}>
//         {" "}
//         <Savat />
//       </button>
//       {modal && (
//         <div className="fixed inset-0  z-20 flex items-center  justify-center bg-black/90">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[1300px] top-0">
//             <div className="flex items-center justify-between">
//               <h2 className="text-4xl font-bold ">Savatcha</h2>
//               <button
//                 onClick={() => setModal(false)}
//                 className="cursor-pointer text-4xl "
//               >
//                 x
//               </button>
//             </div>
//             <div className="flex items-center my-5 justify-around  gap-5">
//               <div className="flex items-center gap-20">
//                 <img src="h" alt="telefon rasmi" />
//                 <p className="w-64">xcfgvhjklkjiuhygftrderftgyhujkljhgf</p>
//                 <div className="flex items-center gap-1">
//                   <p>-</p>
//                   <p>1</p>
//                   <p>+</p>
//                 </div>
//                 <p>narx.som</p>
//                 <div className="flex-col flex gap-5">
//                   <p>yure</p>
//                   <p>delete</p>
//                 </div>
//               </div>
//               <div className="p-4  w-80 h-52 rounded-2xl border border-slate-300">
//                     <div className="rounded-lg bg-slate-100 p-1 mb-5 ">
//                         <button className="w-[50%] cursor-pointer  rounded-lg hover:bg-white p-2">Hoziroq Tolash</button>
//                         <button className="w-[50%] cursor-pointer  rounded-lg hover:bg-white p-2">Muddatli Tolov</button>
//                     </div>
//                     <div className="flex items-center justify-between mb-5 border-b-2 pb-5 border-slate-200">
//                         <p className=" opacity-50">Maxsulot narxi</p>
//                         <p>34567 som</p>
//                     </div>
//                     <div className="flex items-center font-bold text-xl justify-between">
//                         <p className="">Maxsulot narxi</p>
//                         <p>34567 som</p>
//                     </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Modal;
import React, { useState } from "react";
import Savat from "../../../assets/Savat";
import useMyStore from "../../../My_store"; // Store'ni chaqiramiz

function Modal() {
  const [modal, setModal] = useState(false);
  const cart = useMyStore((state) => state.cart); // Savatdagilarni olish
  const removeFromCart = useMyStore((state) => state.removeFromCart);
  const increaseQuantity = useMyStore((state) => state.increaseQuantity);
  const decreaseQuantity = useMyStore((state) => state.decreaseQuantity);

  return (
    <div className="flex flex-col items-center justify-center ">
      <button onClick={() => setModal(true)}>
        <Savat />
      </button>
      {modal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black/90">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[1300px] top-0">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold">Savatcha</h2>
              <button
                onClick={() => setModal(false)}
                className="cursor-pointer text-4xl"
              >
                ×
              </button>
            </div>
            <div className="flex items-center my-5 justify-around gap-5">
              <div className="w-[70%]">
                {cart.length === 0 ? (
                  <p className="text-center text-lg">Savatcha bo‘sh</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b py-4"
                    >
                      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover" />
                      <p className="w-64">{item.name}</p>
                      <div className="flex items-center gap-3 border px-3 py-1 rounded-lg">
                        <button onClick={() => decreaseQuantity(item.id)} className="text-xl">
                          -
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => increaseQuantity(item.id)} className="text-xl">
                          +
                        </button>
                      </div>
                      <p>{item.sale_price * item.quantity} som</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500"
                      >
                        Ochirish
                      </button>
                    </div>
                  ))
                )}
              </div>
              <div className="p-4 w-80 h-52 rounded-2xl border border-slate-300">
                <div className="rounded-lg bg-slate-100 p-1 mb-5">
                  <button className="w-[50%] cursor-pointer rounded-lg hover:bg-white p-2">
                    Hoziroq Tolash
                  </button>
                  <button className="w-[50%] cursor-pointer rounded-lg hover:bg-white p-2">
                    Muddatli Tolov
                  </button>
                </div>
                <div className="flex items-center justify-between mb-5 border-b-2 pb-5 border-slate-200">
                  <p className="opacity-50">Maxsulot narxi</p>
                  <p>
                    {cart.reduce((total, item) => total + item.sale_price * item.quantity, 0)}{" "}
                    som
                  </p>
                </div>
                <div className="flex items-center font-bold text-xl justify-between">
                  <p className="">Umumiy narx</p>
                  <p>
                    {cart.reduce((total, item) => total + item.sale_price * item.quantity, 0)}{" "}
                    som
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
