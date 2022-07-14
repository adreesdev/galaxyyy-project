import {
	Box,
	Button,
	Container,
	Step,
	StepButton,
	Stepper,
	Typography,
} from "@mui/material";
import React from "react";

const steps = ["Q2 2021", "Q3", "Q4", "Q1 2022"];

const Home6 = () => {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;
		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};
	let content;
	if (activeStep === 0) {
		content = (
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="subtitle">Presale</Typography>
				<Typography variant="subtitle">Staking</Typography>
				<Typography variant="subtitle">Liquidity Mining</Typography>
				<Typography variant="subtitle">Locker deployed for BSC</Typography>
				<Typography variant="subtitle">Security Audit</Typography>
				<Typography variant="subtitle">
					Decentralized presale platform
				</Typography>
				<Typography variant="subtitle">IDO platform launch</Typography>
				<Typography variant="subtitle">First project launch</Typography>
			</Box>
		);
	} else if (activeStep === 1) {
		content = (
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="subtitle">SmartMint</Typography>
				<Typography variant="subtitle">Partnership</Typography>
				<Typography variant="subtitle">Project Catalyst entry</Typography>
				<Typography variant="subtitle">CEX Listings</Typography>
			</Box>
		);
	} else if (activeStep === 2) {
		content = (
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="subtitle">Cardano Main net launch</Typography>
				<Typography variant="subtitle">
					Voting mechanism for Decision making
				</Typography>
				<Typography variant="subtitle">DAO structure</Typography>
				<Typography variant="subtitle">
					Permissionless project listing
				</Typography>
			</Box>
		);
	} else {
		content = (
			<Box sx={{ display: "flex", flexDirection: "column" }}>
				<Typography variant="subtitle">Cross chain interoperability</Typography>
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
			</Box>
		);
	}

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
				<Box sx={{ width: "100%" }} pb={5}>
					<Stepper nonLinear activeStep={activeStep} alternativeLabel>
						{steps.map((label, index) => (
							<Step key={label} completed={completed[index]}>
								<StepButton color="inherit" onClick={handleStep(index)}>
									{label}
								</StepButton>
							</Step>
						))}
					</Stepper>
					<div>
						{allStepsCompleted() ? (
							<React.Fragment>
								<Typography sx={{ mt: 2, mb: 1 }}>
									All steps completed - you&apos;re finished
								</Typography>
								<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
									<Box sx={{ flex: "1 1 auto" }} />
									<Button onClick={handleReset}>Reset</Button>
								</Box>
							</React.Fragment>
						) : (
							<React.Fragment>
								<Typography sx={{ mt: 2, mb: 1 }}>{content}</Typography>
								<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
									<Button
										color="inherit"
										disabled={activeStep === 0}
										onClick={handleBack}
										sx={{ mr: 1 }}
									>
										Back
									</Button>
									<Box sx={{ flex: "1 1 auto" }} />
									<Button onClick={handleNext} sx={{ mr: 1 }}>
										Next
									</Button>
									{activeStep !== steps.length &&
										(completed[activeStep] ? (
											<Typography
												variant="caption"
												sx={{ display: "inline-block" }}
											>
												Step {activeStep + 1} already completed
											</Typography>
										) : (
											<Button onClick={handleComplete}>
												{completedSteps() === totalSteps() - 1
													? "Finish"
													: "Complete Step"}
											</Button>
										))}
								</Box>
							</React.Fragment>
						)}
					</div>
				</Box>
			</Container>
		</>
	);
};

export default Home6;
