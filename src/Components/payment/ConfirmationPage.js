import Nav3 from "./Navbar";
import {useLocation} from 'react-router-dom';
import './ConfirmationPage.css'

import {Routes, Route, useNavigate} from 'react-router-dom';

function ConfirmationPage() {
    const location = useLocation();

    const navigate = useNavigate();
    const navigatePayment =() =>{
        navigate('/payment');
      };
      const navigateStatus =() =>{
        navigate('/status');
      };

    return (<body id="paypage"><Nav3 />
        <div>
            <table className="table">
            
                <tr className="row">
                    <td className="cell1">Sender Account ID </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> Account id</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Sender Account Type </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> Account Type</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Recepient Phone Number </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> Number</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Recepient Email Id </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> Email id</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Transfer Amount </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> Amount</td>
                </tr>
                <tr className="row">
                    <td className="cell1">Description </td>
                    <td className="cell2"> : </td>
                    <td className="cell3"> description</td>
                </tr>
             
            </table>

            <div className="cell4">Do you want to confirm the transfer? </div>
            <div className="button-container">
            <button className="buttoncnfrmpg" onClick={navigateStatus}>Confirm</button>
            <button className="buttoncnfrmpg" onClick={navigatePayment}>Cancel</button>
            </div>
        </div></body>)
}

export default ConfirmationPage;