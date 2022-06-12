import './App.css';

import {useState} from 'react';

function App(){
 
  const [team1 , setTeam1] = useState(0);
  const [team2 , setTeam2] = useState(0);

  function increase1(){
    setTeam1(team1+1);
  }

  function decrease1(){
    setTeam1(team1-1);
  }

  
  function increase2(){
    setTeam2(team2+1);
  }

  function decrease2(){
    setTeam2(team2-1);
  }

  function reset(){
    setTeam1(0);
    setTeam2(0);
  }
  return(
    <div className='container'>

      <div className='team-container'>

        <h2 className='heading'>Tom</h2>

        <h1 id='counter' className='count'>{team1}</h1>

        <div className='btn-container'>
          <button onClick={decrease1} className='btn'>
            -
          </button>

          <button onClick={increase1} className='btn'>
            +
          </button>
        </div>

      </div>
      
  
      
      <div className='team-container'>

        <h2 className='heading'>Jerry</h2>

        <h1 id='counter' className='count'>{team2}</h1>

        <div className='btn-container'>
          <button onClick={decrease2} className='btn'>
            -
          </button>

          <button onClick={increase2} className='btn'>
            +
          </button>
        </div>

      </div>

      <div className='reset-container'>
        <button onClick={reset} className='reset-btn'>
          Reset
        </button>
      </div>
      
    </div>
  
  );
}

export default App;
