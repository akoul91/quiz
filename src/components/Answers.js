import React from "react";
import he from "he"

function Answers(props){
    let selectColor
        if(!props.clicked){
            selectColor = {backgroundColor : props.isSelected? "#D6DBF5" : "white"}
        }
        else{
            if(props.isSelected){
                selectColor = {backgroundColor : props.isCorrect? "#94D7A2" : "#F8BCBC"} 
            }
            else{
                selectColor = {backgroundColor : props.isCorrect? "#94D7A2" : "white"}
            }
        }
    return(
        <div>
            <h3 className="answers" onClick={()=>{props.SelectAnswer();props.DiselectAnswer()}} style={selectColor}>{he.decode(props.value)}</h3>
          <hr />
        </div>
    )
          
}

export default Answers

