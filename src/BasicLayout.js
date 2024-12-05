import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

export function Menu() {

    return (
        <>
            <h1>Budgethantering</h1>
            
            <nav>
            <NavLink to="/">Home</NavLink> &nbsp;
            <NavLink to="/budget">Budget</NavLink>&nbsp;
            <NavLink to="/about">About</NavLink> &nbsp;
            <NavLink to="/profile">Profile</NavLink>&nbsp;
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}