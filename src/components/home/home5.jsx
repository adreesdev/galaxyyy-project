import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Home5 = () => {
	return (
		<>
			<Container>
				<Box py={20}>
					<Typography variant="subtitle" color="primary">
						05 Tokenomics <br />
						______
					</Typography>
					<Container maxWidth="md">
						<Grid
							container
							py={5}
							// sx={{
							// 	display: "flex",
							// 	justifyContent: "center",
							// 	alignItems: "center",
							// }}
						>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">Token Type</Typography>
										<Typography variant="cardbody">BEP20</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">
											Ownership Renounced
										</Typography>
										<Typography variant="cardbody">Yes</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">Token Symbol</Typography>
										<Typography variant="cardbody">$CRDN</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">
											Total possible Supply
										</Typography>
										<Typography variant="cardbody">50 million</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">
											Initial circulating supply
										</Typography>
										<Typography variant="cardbody">15 million</Typography>
									</Box>
								</Box>
							</Grid>
							<Grid item md={6} sm={12} xs={12} py={1}>
								<Box sx={{ position: "relative" }}>
									<img
										src="/assets/images/token.png"
										alt="token"
										width="100px"
									/>
									<Box
										sx={{
											position: "absolute",
											top: "30px",
											left: "60px",
											display: "flex",
											flexDirection: "column",
										}}
									>
										<Typography variant="cardhead">
											Token Contract Address
										</Typography>
										<Typography variant="cardbody">
											0xfa17b330bcc4e7f3e2456996d89a5a54ab044831
										</Typography>
									</Box>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Box py={1}>
					<Typography variant="body2" textAlign="center">
						Token Distribution
					</Typography>
				</Box>
				<Grid
					container
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Grid item md={5}>
						<img
							src="/assets/images/chart.png"
							alt="chart"
							style={{ width: ("100%", "650px") }}
						/>
					</Grid>
					<Grid item md={2}></Grid>
					<Grid item md={5}>
						<img
							src="/assets/images/tokenDistribution.png"
							alt="chart"
							style={{ width: ("100%", "400px") }}
						/>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home5;
