import { Route, Routes } from "react-router";
import Cards from "./Cards/Cards";
import MainHome from "./Maiin/MainHome";
import NavbarHome from "./Navbar/Home";
import IchkiCard from "./Cards/CardsTitle/IchkiCard";
import CatalogPage from "./Navbar/BottomHome/CatalogPage";

function App() {
  return (
    <>
      <NavbarHome />

     
      <Routes>
        <Route path="/cart/:id" element={<IchkiCard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/katalog/:slug" element={<CatalogPage />} />
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
