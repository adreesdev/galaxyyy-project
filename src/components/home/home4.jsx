import { Box, Container } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const Home4 = () => {
	return (
		<>
			<Container>
				<Typography variant="subtitle" color="primary">
					03 Multichain <br />
					______
				</Typography>
				<Box
					py={{ sm: 10, xs: 5 }}
					sx={{ display: "flex", justifyContent: "center" }}
				>
					<img
						src="/assets/images/multichain.png"
						alt="multichain"
						style={{
							width: "600px",
							maxWidth: "100%",
						}}
					/>
				</Box>
			</Container>
			<Box sx={{ position: "relative" }}>
				<img
					src="/assets/images/globe.png"
					alt="globe"
					style={{
						position: "absolute",
						top: "4%",
						left: "0",
						width: "700px",
						maxWidth: "100%",
					}}
				/>
			</Box>

			<Container
				sx={{
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<Box
					py={20}
					pl={{ sm: 10, xs: 0 }}
					width={{ md: "45%", sm: "75%", xs: "100%" }}
				>
					<Typography variant="subtitle" color="primary">
						04 Swap <br />
						______
					</Typography>
					<Typography variant="h2">Gallaxy Swap</Typography>
					<Typography py={2} variant="body1">
						The first and only worldwide multi-chain exchanger. You can buy in
						BSC and ETH… All in one place.
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default Home4;
