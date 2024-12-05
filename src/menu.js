import { NavLink, Outlet } from "react-router-dom";
import "./style.css"

export function Menu() {

    return (
        <>
            <nav>
            <NavLink to="/">Home</NavLink> &nbsp;
            <NavLink to="/about">About</NavLink> &nbsp;
            <NavLink to="/profile">Profile</NavLink>&nbsp;
            <NavLink to="/budget">Budget</NavLink>&nbsp;
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    )
}