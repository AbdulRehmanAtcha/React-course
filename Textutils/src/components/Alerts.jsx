import React from 'react'

function Alerts(props) {

    return (
        <div style={{height: "38px"}}>
            {props.alert &&<div>
                <div className="alert alert-primary alert-dismissible fade show" role="alert">
                    <strong>{props.alert.msg}</strong>

                </div>
            </div>}
        </div>
    )
}

export default Alerts;

