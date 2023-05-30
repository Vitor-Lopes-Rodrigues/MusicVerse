import React from "react";

const Button = (props) => {
    return(
        <React.Fragment>
            <button className="btn btn-primary">{props.name}</button>
        </React.Fragment>
    )
}

export default Button