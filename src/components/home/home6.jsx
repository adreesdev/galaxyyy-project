import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Home6 = () => {
	return (
		<>
			<Container>
				<Box pt={20} textAlign="center">
					<Typography variant="subtitle" color="primary">
						06 RoadMap <br />
						______
					</Typography>
					<Typography variant="body2">Galaxy RoadMap</Typography>
				</Box>
				<Grid container pt={5} pb={10}>
					<Grid item md={12} sm={6}>
						<img src="/assets/images/roadmap.png" alt="roadmap" width="84%" />
					</Grid>
					<Grid item md={12} sm={6}>
						<Grid container spacing={10}>
							<Grid
								item
								sm={3}
								sx={{ display: "flex", flexDirection: "column" }}
							>
								<Typography variant="body1">Q2 2021</Typography>
								<Typography variant="subtitle">Presale</Typography>
								<Typography variant="subtitle">Staking</Typography>
								<Typography variant="subtitle">Liquidity Mining</Typography>
								<Typography variant="subtitle">
									Locker deployed for BSC
								</Typography>
								<Typography variant="subtitle">Security Audit</Typography>
								<Typography variant="subtitle">
									Decentralized presale platform
								</Typography>
								<Typography variant="subtitle">IDO platform launch</Typography>
								<Typography variant="subtitle">First project launch</Typography>
							</Grid>
							<Grid
								item
								sm={3}
								sx={{ display: "flex", flexDirection: "column" }}
							>
								<Typography variant="body1">Q3</Typography>
								<Typography variant="subtitle">SmartMint</Typography>
								<Typography variant="subtitle">Partnership</Typography>
								<Typography variant="subtitle">
									Project Catalyst entry
								</Typography>
								<Typography variant="subtitle">CEX Listings</Typography>
							</Grid>
							<Grid
								item
								sm={3}
								sx={{ display: "flex", flexDirection: "column" }}
							>
								<Typography variant="body1">Q4</Typography>
								<Typography variant="subtitle">
									Cardano Main net launch
								</Typography>
								<Typography variant="subtitle">
									Voting mechanism for Decision making
								</Typography>
								<Typography variant="subtitle">DAO structure</Typography>
								<Typography variant="subtitle">
									Permissionless project listing
								</Typography>
							</Grid>
							<Grid
								item
								sm={3}
								sx={{ display: "flex", flexDirection: "column" }}
							>
								<Typography variant="body1">Q1 2021</Typography>

								<Typography variant="subtitle">
									Cross chain interoperability
								</Typography>
								<Typography variant="subtitle">
									New auction modes : Sealed bid, Dutch auction, Batch auction
								</Typography>
								<Typography variant="subtitle">AMM DEX for Cardano</Typography>
								<Typography variant="subtitle">
									Decentralized idea and innovation management center
								</Typography>
								<Typography variant="subtitle">
									Dedicated development center for Cardano project
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home6;
