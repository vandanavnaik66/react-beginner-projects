import { useState } from "react";
import './App.css'

function App() {
  const time = new Date().getHours();
  let message = "";
 
  let timeDisplay = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(timeDisplay);

  if (time >= 1 && time < 12) {
    message = "Good Morning";
  } else if (time >= 12 && time < 16) {
    message = "Good Afternoon";
  } else if (time >= 16 && time < 19) {
    message = "Good Evening";
  } else if (time >= 19 && time <= 24) {
    message = "Good Night";
  }

  function updateTime() {
    //you need to update the time here again, for each seconds
     timeDisplay = new Date().toLocaleTimeString();
    setTime(timeDisplay);
  }


//whatever you keep inside setInterval it will print that after one one second
  setInterval(updateTime,1000); //for each second time should change, so updating time by calling updateTime method

  return (
    <>
    <div className="container">
      <div className="in-container">
      <h1>{Time}</h1>
      <h3> {`${message} Everyone!!!`}</h3>
      </div>
    </div>
      
    </>
  );
}

export default App;
