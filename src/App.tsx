import { useState } from "react";
import { Navbar } from "./components";
import { ThemeContext } from "./utils";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "./theme.css";

function App() {
	const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
	const [theme, setTheme] = useState(isBrowserDefaultDark() ? 'dark' : 'light');

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<Router>
				<Navbar />
			</Router>
		</ThemeContext.Provider>

	);
}

export default App;
