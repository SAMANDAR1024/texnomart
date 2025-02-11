import { Route, Routes } from "react-router";
import Cards from "./Cards/Cards";
import MainHome from "./Maiin/MainHome";
import NavbarHome from "./Navbar/Home";
import IchkiCard from "./Cards/CardsTitle/IchkiCard";

function App() {
  return (
    <>
      <NavbarHome />

     
      <Routes>
        <Route path="/cart" element={<IchkiCard />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

function HomePage() {
return(
<div>
<MainHome />
<Cards />
</div>
)  
}

export default App;
