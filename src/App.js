import React from 'react';
//import { useQuery } from 'react-query';
import fetchPosts from './components/FetchApi';
import './App.css';
import Game from "./components/Game"
import { SpinnerCircular } from 'spinners-react';
import { ThemeContextConsumer } from './components/ContextTheme';


function App(props) {

  const [form, setForm] = React.useState(
    {
        difficulty : JSON.parse(localStorage.getItem("difficulty")) || '',
        category : JSON.parse(localStorage.getItem("category")) || '',
        type : JSON.parse(localStorage.getItem("type")) || ''
    }
  )
  const[firstGame, setFirstGame] = React.useState(false);
  const [data, setData] = React.useState();
  
  React.useEffect(() => {
    let active =true;
    const fetcData = async () => {
      setTimeout(async () =>{
          const response = await fetch(`https://opentdb.com/api.php?amount=50&category=${form.category}&difficulty=${form.difficulty}&type=${form.type}`);
          const newData = await response.json();
          setData(newData);
          console.log(form)      
    }, Math.round(1000));
  };
    fetcData();
    return () => {
      active = false;
    }
  },[form]);

  React.useEffect(() => {
    localStorage.setItem("difficulty",JSON.stringify(form.difficulty))
    localStorage.setItem("category",JSON.stringify(form.category))
    localStorage.setItem("type",JSON.stringify(form.type))
  },[form])
  
  //const { data, error, isError, isLoading } = useQuery('allData', fetchPosts);
  //
  //if (isLoading) {
  //  return <SpinnerCircular/>
  //}
  //if (isError) {
  //    return <div>Error! {error.message}</div>
  //}  
  if(data){

  function StartGame(){
    setFirstGame(true)
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setForm(prevFormData => {
        return {
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }
    })
  }  

    return (
    <main className='App'>
      {
        !firstGame ?
        <ThemeContextConsumer>
          {context => (
            <div className={`start--page--${context.theme}`}>
              <nav className={`${context.theme}`}>
            
              <div className="toggler">
              <p className="toggler--light">Light</p>
              <div className="toggler--slider" onClick={context.toggleTheme}
              >
                  <div className="toggler--slider--circle"></div>
              </div>
              <p className="toggler--dark">Dark</p>
          </div>
          </nav>
          
           <h1>Quizzyy</h1>
           <form>
            <label htmlFor='difficulty'>Select difficulty</label>
            <br />
            <select
              id = "difficulty"
              value = {form.difficulty}
              onChange = {handleChange}
              name = "difficulty">
                <option value = "">Any Difficulty</option>
                <option value = 'easy'>Easy</option>
                <option value = "medium">Medium</option>
                <option value = "hard">Hard</option>
              </select>
              <br />
              <label htmlFor='typr'>Select Type</label>
              <br />
              <select
                id = "type" 
                value ={form.type}
                onChange = {handleChange}
                name = "type">
                  <option value = "">Any</option>
                  <option value = "multiple">Multiple Choice</option>
                  <option value = "boolean">True - False</option>
              </select>
              <br />
              <label htmlFor='category'>Select Category</label>
              <br />
              <select
                id="category"
                value={form.category}
                onChange={handleChange}
                name="category">
                  <option value="">Any Category</option>
                  <option value="9">General Knowledge</option>
                  <option value="10">Entertainment : Books</option>
                  <option value="29">Entertainment : Comics</option>
                  <option value="31">Entertainment : Japanese Anime & Manga</option>
                  <option value="32">Entertainment : Cartoon & Animations</option>
                  <option value="11">Entertainment : Films</option>
                  <option value="12">Entertainment : Music</option>
                  <option value="13">Entertainment : Musicals & Theaters</option>
                  <option value="14">Entertainment : Television</option>
                  <option value="15">Entertainment : Video Games</option>
                  <option value="16">Entertainment : Boarder Games</option>
                  <option value="17">Science & Nature</option>
                  <option value="18">Science : Computers</option>
                  <option value="32">Science : Gadgets</option>
                  <option value="19">Science : Mathematics</option>
                  <option value="20">Mythology</option>
                  <option value="21">Sports</option>
                  <option value="22">Geography</option>
                  <option value="23">History</option>
                  <option value="24">Politics</option>
                  <option value="25">Art</option>
                  <option value="26">Celebrities</option>
                  <option value="27">Animals</option>
                  <option value="28">Vehicles</option>
                </select>
           </form>
           <button className='start-btn' onClick={()=>{StartGame()}}>Start Game</button>
        </div>
        )}
        </ThemeContextConsumer> :
        data.results<5 ?
        <div className='error-page'>
          <h1>There are no questions in this category yet</h1>
          <button onClick={() =>window.location.reload()}>Try Again</button>
        </div>
         :
        <ThemeContextConsumer>
          {context => (
            <div className={`game--${context.theme}`}>
            <Game 
              data={data.results}
              type = {form.type}/>
         </div> 
          )}
        </ThemeContextConsumer>
      }
    
     </main>

  )
    }
    else{
      return(
        <div className='loading'>
          <SpinnerCircular  color='blue'/>
        </div>
      )
    }  
}

export default App;
