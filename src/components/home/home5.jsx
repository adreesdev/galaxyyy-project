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
							sx={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token01.png"
									alt="token01"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token02.png"
									alt="token02"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token03.png"
									alt="token03"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token04.png"
									alt="token04"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token05.png"
									alt="token05"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
							<Grid item md={6} sm={12} py={1}>
								<img
									src="/assets/images/token06.png"
									alt="token06"
									style={{ width: ("50%", "200px") }}
								/>
							</Grid>
						</Grid>
					</Container>
				</Box>
				<Box py={1}>
					<Typography variant="body2" textAlign="center">
						Token Distribution
					</Typography>
				</Box>
			</Container>
		</>
	);
};

export default Home5;
