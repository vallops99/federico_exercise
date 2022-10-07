import { useCallback } from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Homepage, History } from "../../pages";
import { useTheme } from "../../hooks";
import { ToggleButton } from "../";

import "./Navbar.css";


export function Navbar() {
    const { theme, setTheme } = useTheme();

    const onThemeChange = useCallback((value : boolean) => {
        setTheme(value ? 'light' : 'dark');
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

            <Switch>
                <Route path="/history">
                    <History />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}