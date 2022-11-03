import Nav3 from "./Navbar";

import Divider from '@mui/material/Divider';
import "./ProfilePage.css"

function ProfilePage(){
    return(<body id="profpage"><Nav3/>
    <div className="proftitle">PROFILE DETAILS</div>
    <Divider variant="middle" sx={{
          marginLeft:'4%',
          marginRight:'4%'
        }}/>
        <div className="details">Personal Information</div>

    <table className="details">
        <tr className="row">
            <td className="c1">Customer Id</td>
            <td className="c2"> : </td>
            <td className="c3"> 123456</td>
        </tr>
        <tr className="row">
            <td className="c1">Email Id</td>
            <td className="c2"> : </td>
            <td className="c3"> email@xyz</td>
        </tr>
        <tr className="row">
            <td className="c1">Phone Number</td>
            <td className="c2"> : </td>
            <td className="c3"> 1234567890</td>
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
    <div className="details">Services</div>
    <table className="details">
        <tr className="row">
            <td className="c1">Product</td>
            <td className="c2"> : </td>
            <td className="c3"> product 1</td>
        </tr>
        <tr className="row">
            <td className="c1">Service Name</td>
            <td className="c2"> : </td>
            <td className="c3"> service 123</td>
        </tr>
        <tr className="row">
            <td className="c1">Enrollment Status</td>
            <td className="c2"> : </td>
            <td className="c3"> status</td>
        </tr>
        </table>
    </body>)
}

export default ProfilePage;