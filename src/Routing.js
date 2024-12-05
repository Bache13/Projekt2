import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/about"
import Profile from "./pages/profile"
import Budget from './pages/budget';
import { Menu } from './BasicLayout';

 
export function Routing() {
  return (
    <>
      <Routes>
      <Route path="/" element ={<Menu />}>
      <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
