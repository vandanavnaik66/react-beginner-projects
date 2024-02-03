import { useRef, useState } from 'react';
import './App.css';

function App() {

  const[state,setState]=useState(0);
 const[running,setRunning]=useState(false)
 const refVal= useRef();  

const handleStart=()=>{
if(running){return ;}
setRunning(true);
  refVal.current=  setInterval(()=>{
setState(pre=> pre+1)
},1000)
}
const handleStop=()=>{
  if(!running){
  return;
  }
  setRunning(false)
  clearInterval(refVal.current)
}
const handleReset=()=>{
  if(!running){
    setState (0)
    return ;
  }
  clearInterval(refVal.current);
  setState(0)
}

  return (
<>
<h3>{state}</h3>
<button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
<button onClick={handleReset}>Reset</button>

</>
  );
}

export default App;
