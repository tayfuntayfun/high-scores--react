import React, { useState } from 'react';
import Scoreboard from './Scoreboard';
import allCountryScores from './scores';
import './App.css';

const App = () => {
  const [scoreOrder, setScoreOrder] = useState("*Click for ascending order*");
  
  
  const handleButtonClick = () => {
    if (scoreOrder === "*Click for ascending order*"){
      allCountryScores.map((a) => a.scores.sort((a,b) => a.s - b.s))
      setScoreOrder ("*Click for descending order*") 
    } else {
      allCountryScores.map((a) => a.scores.sort((a,b) => b.s - a.s))
      setScoreOrder ("*Click for ascending order*")
    }
  }
  return (
    <div className="App">
      <h1>High Scores per Country</h1>
        <button name="button" className="button" onClick={handleButtonClick}> {scoreOrder}
      </button>
        {allCountryScores
          .sort((a, b) => a.name > b.name ? 1 : -1)
          .map(element => <Scoreboard
            name= {element.name}
            scores={element.scores}
        />
       )}      
    </div>
  );
}

export default App;
