//Importando React
import React from "react";

//Usando PROPS
const Button = (props) => {
    return(
        //Usando REACT FRAGMENT, outra forma de usar <> </> ou <div> </div>
        <React.Fragment>
            <button className="btn btn-primary">{props.name}</button>
        </React.Fragment>
    )
}

export default Button