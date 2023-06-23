import { Route, Routes } from "react-router-dom";
import { Menu } from "../components/Menu";
import { Category } from "../pages/Category";
import { Search } from "../pages/Search";
import { CategoryDetailts } from "../pages/CategoryDetailts";
import { FoodDetailts } from "../pages/FoodDetailts";
export const Navegation = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/buscar" element={<Search />} />
        <Route path="/categorias-detalle/:category" element={<CategoryDetailts />} />
        <Route path="/alimento/:id" element={<FoodDetailts />} />
      </Routes>
      <Menu />
    </>
  );
};
