import { BrowserRouter as Router } from "react-router-dom";

import { Navbar } from "./components";
import { SearchContextProvider, ThemeContextProvider } from "./utils";

import "./App.css";
import "./theme.css";

function App() {
	return (
		<ThemeContextProvider>
			<SearchContextProvider>
				<Router>
					<Navbar />
				</Router>
			</SearchContextProvider>
		</ThemeContextProvider>

	);
}

export default App;
