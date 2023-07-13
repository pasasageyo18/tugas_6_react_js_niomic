import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import MenuHome from "./Page/MenuHome";
import Kontak from "./Page/Kontak";
import MenuMakanan from "./Page/MenuMakanan";
import MenuMinuman from "./Page/MenuMinuman";

//Page Routes
const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route "/" are the parent route*/}
        <Route path="/" element={<App />}>
          {/* Menu Home is consider as "/" route because of the "index property"*/}
          <Route index element={<MenuHome />} />{" "}
          {/* take the "/" route as an instance and fuse it with every paths */}
          <Route path="kontak" element={<Kontak />} />
          <Route path="menu_makanan" element={<MenuMakanan />} />
          <Route path="menu_minuman" element={<MenuMinuman />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoute;
