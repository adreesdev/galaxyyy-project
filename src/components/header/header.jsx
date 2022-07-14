import {
	Button,
	Drawer,
	Grid,
	Typography,
	List,
	Divider,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Link,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const Navbar = (props) => {
	const [state, setState] = useState({
		left: false,
	});

	const matches = useMediaQuery("(max-width:1000px)");

	const toggleDrawer = (anchor, open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [anchor]: open });
	};

	const list = (anchor) => (
		<Box
			sx={{
				width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
			}}
			role="presentation"
			onClick={toggleDrawer(anchor, false)}
			onKeyDown={toggleDrawer(anchor, false)}
		>
			<List>
				{[
					"About",
					"Features",
					"Multichain",
					"Swap",
					"Tokenomics",
					"Roadmap",
				].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DoubleArrowIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
			<Divider />
			<List>
				{["White Paper"].map((text, index) => (
					<ListItem key={text} disablePadding>
						<ListItemButton>
							<ListItemIcon>
								<DoubleArrowIcon />
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	);

	return (
		<>
			<Box py={2}>
				<Grid container columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}>
					<Grid item xs={2}>
						<Box
							width="100%"
							height="100%"
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Typography variant="header">Logo</Typography>
						</Box>
					</Grid>
					{matches ? (
						<>
							<Grid item xs={10}>
								<Box
									width={"100%"}
									height="100%"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-end",
									}}
								>
									{["left"].map((anchor) => (
										<React.Fragment key={anchor}>
											<Button onClick={toggleDrawer(anchor, true)}>
												<MenuRoundedIcon />
											</Button>
											<Drawer
												anchor={anchor}
												open={state[anchor]}
												onClose={toggleDrawer(anchor, false)}
											>
												{list(anchor)}
											</Drawer>
										</React.Fragment>
									))}
								</Box>
							</Grid>
						</>
					) : (
						<>
							<Grid
								item
								xs={10}
								sx={{ display: "flex", justifyContent: "flex-end" }}
							>
								<Box
									width="100%"
									height="100%"
									sx={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-evenly",
									}}
								>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										About
									</Link>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										Features
									</Link>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										Multichain
									</Link>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										Swap
									</Link>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										Tokenomics
									</Link>
									<Link
										color="secondary"
										variant="header"
										href="#"
										underline="none"
									>
										Roadmap
									</Link>
									<Button
										variant="contained"
										sx={{
											width: "180px",
											height: "45px",
											borderRadius: "36px",
											fontFamily: "theme.header",
											fontSize: "theme.header",
											fontWeight: "theme.header",
										}}
									>
										White Paper
									</Button>
								</Box>
							</Grid>
						</>
					)}
				</Grid>
			</Box>
		</>
	);
};

export default Navbar;
