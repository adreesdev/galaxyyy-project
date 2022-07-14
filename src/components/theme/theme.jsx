import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
	palette: {
		primary: {
			main: "#00FF60",
		},
		secondary: {
			main: "#fff",
		},
		text: {
			primary: "#fff",
			secondary: "#999999",
		},
	},
	typography: {
		h2: {
			fontFamily: "Montserrat",
			fontWeight: 700,
			fontSize: "60px",
		},
		h4: {
			fontFamily: "Montserrat",
			fontWeight: 700,
			fontSize: "36px",
		},
		body1: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "22px",
		},
		body2: {
			fontFamily: "'Montserrat'",
			fontWeight: "700",
			fontSize: "28px",
		},
		header: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "18px",
		},
		subtitle: {
			fontFamily: "Montserrat",
			fontWeight: 400,
			fontSize: "14px",
		},
		cardhead: {
			fontFamily: "Montserrat",
			fontStyle: "normal",
			fontWeight: 700,
			fontSize: "16px",
		},
		cardbody: {
			fontFamily: "Montserrat",
			fontStyle: "normal",
			fontWeight: 400,
			fontSize: "12px",
		},
	},
});

theme.overrides = {
	MuiCssBaseline: {
		"@global": {
			body: {
				color: "#fff",
			},
		},
	},
};

theme = responsiveFontSizes(theme);

export default theme;
