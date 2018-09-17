import React from "react";
import "./Input.css";

const Input = props => (
    <div className="input-group input-group-lg">
        <input id="inputField" className="form-control" type="text" {...props} />
    </div>
);

export default Input;