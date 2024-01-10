import React from "react";

function Alert(props) {
  return (
    <div style={{height:'50px'}} className="mb-3">
     {props.alert &&  <div
        className={`alert alert-warning alert-${props.alert.type} fade show text-center`}
        role="alert" style={{backgroundColor:props.alert.type==='success' ?'red':"yellowgreen"}}
      >
        <strong>{props.alert.msg === null ? "No msg" : props.alert.msg}</strong>
      </div>}
    </div>
  );
}

export default Alert;
