import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Homepage } from "../../pages";

import './Navbar.css';

export function Navbar() {
    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="link-container">
                    <Link to="/">Home</Link>
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