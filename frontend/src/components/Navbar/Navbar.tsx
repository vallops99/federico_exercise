import { useCallback } from "react";
import { Route, Link, Routes } from "react-router-dom";

import { Homepage, History } from "../../pages";
import { useTheme } from "../../hooks";
import { ToggleButton } from "../";

import "./Navbar.css";


export function Navbar() {
    const { theme, setTheme } = useTheme();

    const onThemeChange = useCallback((event : React.ChangeEvent<HTMLInputElement>) => {
        setTheme(event.currentTarget.value ? 'light' : 'dark');
    }, [setTheme]);

    const mainContainerClasses = `main-container theme-${theme}`;

    return (
        <div className={mainContainerClasses}>
            <nav className="navbar">
                <div className="nav-side">
                    <div className="link-container">
                        <Link to="/">Home</Link>
                    </div>
                    <div className="link-container">
                        <Link to="/history">History</Link>
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