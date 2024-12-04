import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About  from "./pages/about"
import Profile from "./pages/profile"
import Budget from './pages/budget';

 
export default function App() {
  return (
    <>
      <h1>APP</h1>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/about">About</Link>&nbsp;
      <Link to="/profile">Profile</Link>&nbsp;
      <Link to="/budget">Budget</Link>&nbsp;

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/budget" element={<Budget />} />
        
      </Routes>

    
    </>

  );
}


/* 
-- Lägga till inkomster och utgifter
-- Totala saldot
-- Kategorieserade poster (t.ex. "mat", "hyra" etc)
*/
