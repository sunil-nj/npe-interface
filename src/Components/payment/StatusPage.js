import Nav3 from "./Navbar";
import StatusCard from "./StatusCard";
import "./StatusPage.css"

function StatusPage(){
    return(<body id="paypage"><Nav3/>
    <div className="stpage">
        <StatusCard status="FAILED"></StatusCard>
    </div>
    </body>)
}

export default StatusPage;