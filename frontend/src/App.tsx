import { Navbar } from "./components";
import { ThemeContextProvider } from "./utils";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import "./theme.css";

function App() {
	return (
		<ThemeContextProvider>
			<Router>
				<Navbar />
			</Router>
		</ThemeContextProvider>

	);
}

export default App;
