import { ToggleButton } from "../";
import { Homepage } from "../../pages";
import { ThemeContext } from "../../utils";
import { useCallback, useContext } from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./Navbar.css";


export function Navbar() {
    const { theme, setTheme } = useContext(ThemeContext);

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
                </div>
                <div className="nav-side">
                    <ToggleButton onChange={onThemeChange} checked={theme === "light"}/>
                </div>
            </nav>

            <Switch>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}