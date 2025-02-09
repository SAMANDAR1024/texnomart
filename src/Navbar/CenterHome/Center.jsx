import CenterImg from "./CenterImg";
import ThreeText from "./ThreeText";
import TwoText from "./TwoText";

function NavbatCenter() {
  return (
    <div className="bg-slate-200">
      <nav className="container w-full mx-auto px-16 py-4 flex items-center justify-between gap-8">
        <CenterImg />

        <TwoText />

        <ThreeText />
      </nav>
    </div>
  );
}

export default NavbatCenter;
