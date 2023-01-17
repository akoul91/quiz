import React from "react";
import he from "he"

function Questions(props){
    return(
            <h1 className="questions" >{he.decode(props.value)}</h1> 
    )
}

export default React.memo(Questions)