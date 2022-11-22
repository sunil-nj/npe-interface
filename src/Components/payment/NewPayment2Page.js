import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Button,
    Typography,
    Box,
    Grid,
    CircularProgress,
} from '@material-ui/core';
import {
    SentimentVerySatisfied,
    SentimentVeryDissatisfied
} from '@material-ui/icons';
import StepperIcons from "./StepperIcons";
import PaymentForm from "./NewPayment2";
import {
    useStripe,
    useElements,
    CardCvcElement,
} from '@stripe/react-stripe-js';
import StepConnector from './StepConnector'


// OVERALL STYLE
const style = makeStyles(theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around"
    },
    buttonWrapper: {
        justifyContent: "flex-end"
    },
}));



const Steppers = () => {
    const classes = style();

    // const handleNext = () => {
    //     if (activeStep === 2) {
    //         capture()
    //     } else {
    //         setActiveStep(prevActiveStep => prevActiveStep + 1);
    //     }
    // };
    // const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // const handleReset = () => setActiveStep(0);

    // const capture = async () => {

    //     setLoading(true);

    //     console.log(formValues);
    //     const clientSecretDataObject = clientSecretDataObjectConverter(formValues);
    //     const clientSecret = await clientSecretPull(clientSecretDataObject);
    //     const cardElement = elements.getElement(CardCvcElement);
    //     const stripeDataObject = stripeDataObjectConverter(formValues, cardElement);
    //     const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, stripeDataObject);

    //     if (error) {
    //         setCardStatus(false);
    //         setCardMessage(error.message)
    //     } else if (paymentIntent && paymentIntent.status === "succeeded") {
    //         setCardStatus(true);
    //         setCardMessage("");
    //         dispatch({ type: 'emptyFormValue' });
    //     }
    //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //     setLoading(false);
    // }

    return (
        <>
            <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} >
                {/* Change the number of loops here based on StepContent */}
                {[1, 2, 3].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )}
            </Stepper>
            <Box className={classes.mainBox}>
                
                    <form autoComplete="off" className={classes.form} onSubmit={e => { e.preventDefault(); }}>
                        <Grid container spacing={3}>
                        <PaymentForm />
                            <Grid container item justify="flex-end">
                                <Button className={classes.button} >
                                    Back
                                    </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"
                                >Pay
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                
            </Box>
        </>
    );
}

export default Steppers;
