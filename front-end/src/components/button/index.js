import React from "react";

const Button = (props) => {
    return(
        <React.Fragment>
            <button className="btn">{props.name}</button>
        </React.Fragment>
    )
}

export default Button