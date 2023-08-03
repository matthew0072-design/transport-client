import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import RouteForm from "./routeForm";
import PaymentForm from "./paymentForm";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "3px solid tomato",
    height: 450,
    padding: theme.spacing(1),
  },
  backButton: {
    marginRight: theme.spacing(2),
  },

  stepper: {
    // border: "2px solid blue",
    height: 30,
  },
  booking: {
    textAlign: "center",
  },
  toggleButton: {
    display: "flex",
    justifyContent: "space-around",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },

  buttonBox: {
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "tomato",
    },
  },
}));

function getSteps() {
  return ["Select Route", "Make Payment"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <RouteForm />;
    case 1:
      return <PaymentForm />;
  }
}

export default function StepperRoute() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" color="primary" className={classes.booking}>
        {" "}
        Booking{" "}
      </Typography>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        className={classes.stepper}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.toggleButton}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Box className={classes.buttonBox} clone>
                <Button variant="contained" onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
