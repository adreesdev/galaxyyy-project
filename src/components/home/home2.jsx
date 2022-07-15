import { Grid, Container, Typography } from "@mui/material";
import React from "react";

const Home2 = () => {
	return (
		<>
			<Container>
				<Grid container sx={{ alignItems: "center", justifyContent: "center" }}>
					<Grid item md={6}>
						<img
							src="/assets/images/astronautlaptop.png"
							alt="astronautlaptop"
							width="80%"
						/>
					</Grid>
					<Grid item md={6} py={{ md: 0, sm: 2, xs: 2 }}>
						<Typography variant="subtitle" color="primary" id="about">
							01 About <br />
							______
						</Typography>

						<Typography variant="h4">Lorem ipsum dolor sit amet, </Typography>
						<Typography
							variant="subtitle1"
							py={2}
							sx={{ textAlign: "justify" }}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
							tortor nunc, interdum at justo sed, dignissim imperdiet elit. In
							cursus facilisis metus nec placerat. Morbi eu porttitor ex.Lorem
							ipsum dolor sit amet, consectetur adipiscing elit. Mauris tortor
							nunc, interdum at justo sed, dignissim imperdiet elit. In cursus
							facilisis metus nec placerat. Morbi eu porttitor ex.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit. Mauris tortor nunc,
							interdum at justo sed, dignissim imperdiet elit. In cursus
							facilisis metus nec placerat. Morbi eu porttitor ex.Lorem ipsum
							dolor sit amet, consectetur adipiscing elit. Mauris tortor nunc,
							interdum at justo sed, dignissim imperdiet elit. In cursus
							facilisis metus nec placerat. Morbi eu porttitor ex.
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</>
	);
};

export default Home2;
