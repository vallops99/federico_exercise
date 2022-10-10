import { useCallback } from "react";
import { Route, Routes, NavLink } from "react-router-dom";

import { Homepage, History } from "../../pages";
import { useTheme } from "../../hooks";
import { ToggleButton } from "../";

import "./Navbar.css";


export function Navbar() {
    const { theme, setTheme } = useTheme();

    const onThemeChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.currentTarget.checked ? 'light' : 'dark');
    }, [setTheme]);

    const mainContainerClasses = `main-container theme-${theme}`;
    const activeStyle = { "textDecoration": "underline" };

    return (
        <div className={mainContainerClasses}>
            <nav className="navbar">
                <div className="nav-side">
                    <div className="link-container">
                        <NavLink
                            to="/"
                            style={({ isActive }) => isActive ? activeStyle : {}}
                            end
                        >
                            Home
                        </NavLink>
                    </div>
                    <div className="link-container">
                        <NavLink
                            to="/history"
                            style={({ isActive }) => isActive ? activeStyle : {}}
                            end
                        >
                            History
                        </NavLink>
                    </div>
                </div>
                <div className="nav-side">
                    <ToggleButton onChange={onThemeChange} checked={theme === "light"}/>
                </div>
            </nav>

            <Routes>
                <Route path="/history" element={<History />} />
                <Route path="/" element={<Homepage />} />
            </Routes>
        </div>
    )
}