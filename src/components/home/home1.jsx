import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";

const Home1 = () => {
	return (
		<Box width="100%">
			<img
				src="/assets/images/astronaut.png"
				alt="astronaut"
				style={{
					position: "absolute",
					top: "4%",
					right: "0",
					maxWidth: "100%",
					width: "1100px",
				}}
			/>
			<Container>
				<Box py={25} width={{ md: "45%", sm: "75%", xs: "100%" }}>
					<Typography variant="h4">
						An IDO platform and accelerator for Cardano. First on BSC
					</Typography>
					<Typography py={2} variant="body1">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
						tortor nunc, interdum at justo sed, dignissim imperdiet elit. In
						cursus facilisi
					</Typography>
					<Stack direction="row" spacing={2}>
						<img
							src="/assets/images/icons/twitter.png"
							alt="twitter"
							width="40px"
							height="40px"
						/>
						<img
							src="/assets/images/icons/facebook.png"
							alt="facebook"
							width="40px"
							height="40px"
						/>
						<img
							src="/assets/images/icons/linkedin.png"
							alt="linkedin"
							width="40px"
							height="40px"
						/>
						<img
							src="/assets/images/icons/telegram.png"
							alt="telegram"
							width="40px"
							height="40px"
						/>
						<img
							src="/assets/images/icons/social.png"
							alt="social"
							width="40px"
							height="40px"
						/>
					</Stack>
				</Box>
				<Box pb={15}>
					<img
						src="/assets/images/icons/anchor icon.png"
						alt="anchor"
						width="25px"
						height="30px"
					/>
				</Box>
			</Container>
		</Box>
	);
};

export default Home1;
