import Nav3 from "./Navbar";

import Divider from '@mui/material/Divider';
import "./ProfilePage.css"

function AccountsPage(){
    return(<body id="accpage"><Nav3/>
    <div className="proftitle">ACCOUNT DETAILS</div>
    <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
        <div className="details">Personal Information</div>

    <table className="details">
        <tr className="row">
            <td className="c1">Account Id</td>
            <td className="c2"> : </td>
            <td className="c3"> 123456</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Name</td>
            <td className="c2"> : </td>
            <td className="c3"> account name 123</td>
        </tr>
        <tr className="row">
            <td className="c1">Address </td>
            <td className="c2"> : </td>
            <td className="c3"> Address Line 1</td>
        </tr>
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> city</td>
        </tr>
        <tr className="row">
            <td className="c1"> </td>
            <td className="c2">  </td>
            <td className="c3"> pincode</td>
        </tr>
    </table>
    <table className="details">
        <tr className="row">
            <td className="c1">Total Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 123354</td>
        </tr>
        <tr className="row">
            <td className="c1">Available Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 2365485</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Credit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 7347</td>
        </tr>
        <tr className="row">
            <td className="c1">Blocked Debit Balance</td>
            <td className="c2"> : </td>
            <td className="c3"> 87746</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Created Date</td>
            <td className="c2"> : </td>
            <td className="c3"> date</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Status</td>
            <td className="c2"> : </td>
            <td className="c3"> acc status</td>
        </tr>
        <tr className="row">
            <td className="c1">Account Type</td>
            <td className="c2"> : </td>
            <td className="c3"> Savings</td>
        </tr>
        </table>
    </body>)
}

export default AccountsPage;