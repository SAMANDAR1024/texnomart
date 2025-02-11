import { Link } from "react-router";

function CenterImg() {
  return (
    <div>
      <Link to={"/"}>
        <img
          className="cursor-pointer"
          src="https://texnomart.uz/_nuxt/img/texnomart-logo.3b2791c.svg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default CenterImg;
