import React from "react";
import { Paper } from "@mui/material";
import Home1 from "../../components/home/home1";
import Home2 from "../../components/home/home2";
import Home3 from "../../components/home/home3";
import Home4 from "../../components/home/home4";
import Home5 from "../../components/home/home5";
import Navbar from "../../components/header/header";
import Home6 from "../../components/home/home6";
import Footer from "../../components/footer/footer";

const Home = () => {
	return (
		<>
			<Paper
				sx={{
					backgroundImage: `url(${"/assets/images/backgrounds/bg1.png"})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
			>
				<Navbar />
				<Home1 />
				<Home2 />
			</Paper>
			<Paper
				sx={{
					backgroundImage: `url(${"/assets/images/backgrounds/bg2.png"})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
			>
				<Home3 />
				<Home4 />
			</Paper>
			<Paper
				sx={{
					backgroundImage: `url(${"/assets/images/backgrounds/bg2.png"})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
			>
				<Home5 />
				<Home6 />
			</Paper>
			<Paper
				sx={{
					backgroundImage: `url(${"/assets/images/backgrounds/footer.png"})`,
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat",
					width: "100%",
				}}
			>
				<Footer />
			</Paper>
		</>
	);
};

export default Home;
