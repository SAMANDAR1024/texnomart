import MiniCards from "./MiniCards/MiniCards";
import Carusel from "./Carusel/Carusel";


function MainHome() {
  return (
    <div className="container px-16 py-2 w-[1500px] mx-auto">
      <Carusel/>
      <MiniCards/>
    </div>
  );
}

export default MainHome;
