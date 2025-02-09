import axios from "axios";

import { useEffect, useState } from "react";

function Carusel() {
  const [imgs, setImgs] = useState([]);
  const [carusel, setCarusel] = useState(0);

  useEffect(() => {
    axios
      .get("https://mobile.olcha.uz/api/v2/extra/sliders")
      .then((res) => {
        const sliders = res.data.data.sliders.map((item) => item.image_oz);
        setImgs(sliders);
      })
      .catch((err) => console.error("Xatolik yuz berdi:", err));
  }, []);

  function next() {
    setCarusel((prev) => (prev + 1) % imgs.length);
  }

  function prev() {
    setCarusel((prev) => (prev - 1 + imgs.length) % imgs.length);
  }

  if (!imgs.length) {
    return (
      <div className="flex justify-center items-center h-64 ">
        <div className="w-16 h-16 border-4 border-t-transparent border-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full py-4">
      <div className="relative w-full container ">
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 -translate-y-1/2 border border-gray-300 shadow-md rounded-full p-3 bg-white hover:bg-gray-100 active:scale-95 transition"
        >
          ⇽
        </button>

        <img
          className="w-full h-[350px] rounded-lg shadow-lg transition-transform duration-700"
          src={imgs[carusel]}
          alt="Carusel rasmi"
        />

        <button
          onClick={next}
          className="absolute top-1/2 right-4 -translate-y-1/2 border border-gray-300 shadow-md rounded-full p-3 bg-white hover:bg-gray-100 active:scale-95 transition"
        >
          ⇾
        </button>
      </div>
    </div>
  );
}

export default Carusel;
