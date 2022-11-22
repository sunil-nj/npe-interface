import Nav3 from "./Navbar";
import React, { useState } from "react";
import "./PaymentPage.css"

import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import {Routes, Route, useNavigate} from 'react-router-dom';
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
import StepperIcons from "./StepperIcons";
import StepConnector from "./StepConnector"

function PaymentPage(props) {

    const [inputs, setInputs] = useState({});

    const navigate = useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        console.log(inputs);

        navigate('/confirmation',{state:inputs});
    
      };
    const initval={sender_account_id:"account id", sender_account_type:"Savings", recipient_phone_number:"mobile number", recipient_email_id:"mail Id",transfer_amount:"0000",description:"Description1"};

    const handleReset = (event) =>{
        setInputs(initval)
    }
    const style = makeStyles(theme => ({
        
        stepper: {
            height: "calc(10vh - 40px)",
            minHeight: "55px",
            color: "#1165af"
        },
        
    }));
    const classes = style();
    // JSX code for login form
    const renderForm = (
        <div className="form1" onSubmit={handleSubmit}>
            <div >
                <div className="title2">Funds Transfer</div>
                <br />
                {/* {[1, 2, 3].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )} */}
                <Stepper alternativeLabel className={classes.stepper} connector={<StepConnector />} activeStep={3}>
                {/* Change the number of loops here based on StepContent */}
                {[1, 2, 3].map(e =>
                    <Step key={e}>
                        <StepLabel StepIconComponent={StepperIcons} />
                    </Step>
                )}
            </Stepper>
                <form >
                    <div >
                        <label className="">Sender Account ID </label>
                        <input type="text" name="sender_account_id" value={inputs.sender_account_id || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Sender Account Type </label>
                        <select name="sender_account_type" value={inputs.sender_account_type || ""} onChange={handleChange}>
                            <option value="Savings">Savings</option>
                            <option value="Current">Current</option>
                        </select>
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Phone Number </label>
                        <input type="text" name="recipient_phone_number" value={inputs.recipient_phone_number || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Recepient Email Id </label>
                        <input type="text" name="recipient_email_id" value={inputs.recipient_email_id || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label className="">Transfer Amount </label>
                        <input type="number" name="transfer_amount" value={inputs.transfer_amount || ""}
                            onChange={handleChange}
                            required />
                    </div>
                    <br />
                    <div >
                        <label>Description </label>
                        <select name="description" value={inputs.description || ""} onChange={handleChange}>
                            <option value="Description1">Description 1</option>
                            <option value="Description2">Description 2</option>
                        </select>
                    </div>
                    <br />
                    <br />
                    <div className="button-container">
                        <button type="submit">Continue</button>
                        <button type="button" onClick={handleReset}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );


    return (<body id="paypage">
        <Nav3 />
        <div>{renderForm}</div>
    </body>)
}

export default PaymentPage;