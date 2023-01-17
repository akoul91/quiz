import React from "react";
import { nanoid } from "nanoid";
import Questions from "./Questions";
import Answers from "./Answers";
import { ReactPropTypes } from "react";

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function Game(props){
    const [correct, setCorrect] = React.useState(0);
    const [totalCorrect, setTotalCorrect] = React.useState(JSON.parse(sessionStorage.getItem("totalCorrect")));
    const [totalGames, setTotalGames] = React.useState(JSON.parse(sessionStorage.getItem("totalGames")));
    const [answersQuestions, setAnswersQuestions] = React.useState([]);
    const [clicked, setClicked] = React.useState(false); 
    const [newGame, setNewGame] = React.useState(false);
    const [showStatistics, SetShowStatistics] = React.useState(false);
    const [, updateState] = React.useState();
    const[le, setLe] = React.useState(0)
    let ra = [0,1,2,3];
    let rn = [];

    React.useEffect(() => {
        newGame && setNewGame(false)
        for(let i=0;i<props.data.length;i++){
            rn.push(i)
        }
        shuffle(rn)
        


        //    let flag = false;
        //    if(i===0){
        //        rn.push(Math.ceil(Math.random()*props.data.length))
        //    }
        //    else{
        //        let c=Math.ceil(Math.random()*props.data.length)
        //        for(let j=0;j<i-1;j++){
        //            if(c===rn[j]){
        //                flag=true;
        //                console.log("same")
        //            }
        //            flag ? i=i-1 : rn.push(c)
        //        }                   
        //    }
        //    }
        //console.log(rn)
        for(let i=0;i<5;i++){
            shuffle(ra)
            if(props.data[rn[i]].type==='multiple'){
                if(ra[0]===0){
                setAnswersQuestions(aq => [...aq, 
                    {
                        value: props.data[rn[i]].question,
                        id: nanoid(),
                        isQuestion : true,
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].correct_answer,
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : true,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[0],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[1],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[2],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    }])
            }
            else if(ra[0]===1){
                setAnswersQuestions(aq => [...aq, 
                    {
                        value: props.data[rn[i]].question,
                        id: nanoid(),
                        isQuestion : true,
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[0],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].correct_answer,
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : true,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[1],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[2],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team: i
                    }
                    ])
            }
            else if(ra[0]===2){
                setAnswersQuestions(aq => [...aq, 
                    {
                        value: props.data[rn[i]].question,
                        id: nanoid(),
                        isQuestion : true,
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[0],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },                   
                    {
                        value : props.data[rn[i]].incorrect_answers[1],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    }, 
                    {
                        value : props.data[rn[i]].correct_answer,
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : true,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[2],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    }
                ])
            }
            else if(ra[0]===3){
                setAnswersQuestions(aq => [...aq, 
                    {
                        value: props.data[rn[i]].question,
                        id: nanoid(),
                        isQuestion : true,
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[0],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[1],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].incorrect_answers[2],
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : false,
                        team : i
                    },
                    {
                        value : props.data[rn[i]].correct_answer,
                        id : nanoid(),
                        isSelected : false,
                        isCorrect : true,
                        team : i
                    }
                ])
            }}
           else if(props.data[rn[i]].type==='boolean'){
                if(props.data[rn[i]].correct_answer==='True'){
                    setAnswersQuestions(aq => [...aq, 
                        {
                            value: props.data[rn[i]].question,
                            id: nanoid(),
                            isQuestion : true,
                            isSelected : false,
                            isCorrect : false,
                            team : i
                        },
                        {
                            value : props.data[rn[i]].correct_answer,
                            id : nanoid(),
                            isSelected : false,
                            isCorrect : true,
                            team : i
                        },
                        {
                            value : props.data[rn[i]].incorrect_answers[0],
                            id : nanoid(),
                            isSelected : false,
                            isCorrect : false,
                            team : i
                        }
                    ])
                }
                else{
                    setAnswersQuestions(aq => [...aq, 
                        {
                            value: props.data[rn[i]].question,
                            id: nanoid(),
                            isQuestion : true,
                            isSelected : false,
                            isCorrect : false,
                            team : i
                        },
                        {
                            value : props.data[rn[i]].incorrect_answers[0],
                            id : nanoid(),
                            isSelected : false,
                            isCorrect : false,
                            team : i
                        },
                        {
                            value : props.data[rn[i]].correct_answer,
                            id : nanoid(),
                            isSelected : false,
                            isCorrect : true,
                            team : i
                        }                        
                    ])
                }
            }
            setLe(answersQuestions.length)}
    },[newGame])
    React.useEffect(() => {
        sessionStorage.setItem("totalCorrect",JSON.stringify(totalCorrect))
        sessionStorage.setItem("totalGames",JSON.stringify(totalGames))
    },[correct])
    
    function SelectAnswer(id){
        !clicked && setAnswersQuestions(aq => aq.map(an =>{
            return(
                an.id===id ? {...an, isSelected : !an.isSelected} : an
            )
        }))
    }
    function DiselectAnswer(id,team){
        !clicked && setAnswersQuestions(aq => aq.map(an =>{
            return(
                an.id != id && an.team === team? {...an, isSelected : false} : an
            )
        }))
    }

    function CorrectAnswers(){
        setClicked(prevClicked => !prevClicked)
        for(let i=0;i<answersQuestions.length;i++){
            if(answersQuestions[i].isSelected && answersQuestions[i].isCorrect){
                setCorrect(pc => pc+1)
                setTotalCorrect(pTC => pTC+1)
            }
        }
        setTotalGames(pTG => pTG+1)
        return correct, totalCorrect, totalGames
      }
      function NewGame(){
        window.location.reload()
      }

      function Update(){
        setNewGame(true)
        setClicked(false)
        setAnswersQuestions([])
        setCorrect(0)
        SetShowStatistics(false)
        //const handleForceupdateMethod = React.useCallback(() => updateState({}), [])
      }

    const cle= le>1? le : 25;

    const questionElements = answersQuestions.slice(0,cle).map(item =>{
        return(
                item.isQuestion?
                <Questions 
                  key={item.id}
                  value={item.value}
                  id = {item.id}/> :
               <Answers 
                  key={item.id}
                  value={item.value}
                  id={item.id}
                  isSelected={item.isSelected}
                  isCorrect={item.isCorrect}
                  SelectAnswer={()=>SelectAnswer(item.id)}
                  DiselectAnswer={()=>DiselectAnswer(item.id,item.team)}
                  clicked={clicked} />       
        )
    })
        return(
        
        <div className="game">
            <div className="game--page">{questionElements}</div>
            <div className="btns">
            {!clicked ?           
                <button className="cabtn" onClick={CorrectAnswers}>Check Answers</button>:
                <button className="cabtn" onClick={Update}>Play Again</button>}
                <h5>Or</h5>
                <button className="cabtn" onClick={()=>{NewGame();localStorage.clear()}}>Start New Game</button>
            </div>
            

            <h5 className="correct">Correct Answers: {correct}/5</h5>
            <div className="stats">
                { !showStatistics ?
                <button className="stats--button" onClick={() =>SetShowStatistics(true)}>Show Statistics</button> :
                <div className="btns">
                    <button className="stats--button" onClick={()=>{sessionStorage.clear(); setTotalCorrect(null);setTotalGames(null)}}>Delete Statistics</button>
                    <h5>{totalCorrect? totalCorrect: 0}/{totalGames? totalGames*5 : 0}</h5>
                </div>}
            </div>
            
        </div>
        )
}

//Game.prototype = {
//    data: ReactPropTypes.array,
//    form : ReactPropTypes.string
//}

export default React.memo(Game)