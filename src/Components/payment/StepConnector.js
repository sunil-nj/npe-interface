import { withStyles, StepConnector } from "@material-ui/core";

// STYLE THE STEPPER CONNECTOR
const Connector = withStyles(theme => ({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
        },
    },
    completed: {
        '& $line': {
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#1165af59',
        borderRadius: 1,
    },
}))(StepConnector);

export default Connector;