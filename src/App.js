import React from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";
import theme from "./components/theme/theme";
function App() {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BrowserRouter>
					<Home />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
}

export default App;

<App />;
