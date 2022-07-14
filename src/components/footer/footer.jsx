import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

const Footer = () => {
	return (
		<>
			<Container>
				<Box py={10}>
					<Typography variant="subtitle" color="primary">
						07 Contact <br />
						______
					</Typography>
				</Box>
				<Grid container spacing={5} pb={20}>
					<Grid item xs={12} sm={6} md={3}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="header" color="primary" py={1}>
								LOGO HERE
							</Typography>
							<Typography variant="subtitle" py={1}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
								aliquam nisi in ipsum convallis rhoncus. Morbi mauris ipsum,
								aliquam sed nisl congue, molestie congue lorem.
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="header" color="primary" py={1}>
								About
							</Typography>
							<Typography variant="subtitle" py={1}>
								Features
							</Typography>
							<Typography variant="subtitle" py={1}>
								Multichain
							</Typography>
							<Typography variant="subtitle" py={1}>
								Swap
							</Typography>
							<Typography variant="subtitle" py={1}>
								Tokenomics
							</Typography>
							<Typography variant="subtitle" py={1}>
								RoadMap
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="header" color="primary" py={1}>
								Social Links
							</Typography>

							<Typography variant="subtitle" py={1}>
								<TwitterIcon sx={{ fontSize: "18px" }} /> &nbsp;&nbsp;Your text
								here
							</Typography>
							<Typography variant="subtitle" py={1}>
								<FacebookIcon sx={{ fontSize: "18px" }} /> &nbsp;&nbsp;Your text
								here
							</Typography>
							<Typography variant="subtitle" py={1}>
								<LinkedInIcon sx={{ fontSize: "18px" }} /> &nbsp;&nbsp;Your text
								here
							</Typography>
							<Typography variant="subtitle" py={1}>
								<TelegramIcon sx={{ fontSize: "18px" }} /> &nbsp;&nbsp;Your text
								here
							</Typography>
							<Typography variant="subtitle" py={1}>
								<BubbleChartIcon sx={{ fontSize: "18px" }} /> &nbsp;&nbsp;Your
								text here
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={3}>
						<Box sx={{ display: "flex", flexDirection: "column" }}>
							<Typography variant="header" color="primary" py={1}>
								Other Links
							</Typography>

							<Typography variant="subtitle" py={1}>
								Terms of use
							</Typography>
							<Typography variant="subtitle" py={1}>
								Privacy Policy
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Footer;
