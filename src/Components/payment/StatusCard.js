import "./StatusPage.css";

function StatusCard(props) {

    const status = props.status

    if (status === "Successful") {
        return (
            <div className="statusbox1">
                <div className="checkBox">
                    <div className="check">&#x2713;</div>
                </div>
                <div className="status">Status : {status}</div>
            </div>
        )
    }

    return (
        <div className="statusbox2">
            <div className="checkBox">
                <div className="check">&#x2717;</div>
            </div>
            <div className="status">Status : {status}</div>
        </div>
    )
}

export default StatusCard;