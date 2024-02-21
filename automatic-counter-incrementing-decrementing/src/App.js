import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const usereff = useRef();

  const decrementFun = () => {
    usereff.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  };

  useEffect(() => {
    if (count >= 5) {
      clearInterval(usereff.current);
      decrementFun();
    } else if (count <= 0) {
      clearInterval(usereff.current);
    }
  }, [count]);

  useEffect(() => {
    usereff.current = setInterval(() => {
      setCount((pre) => pre + 1);
    }, 1000);
    return () => {
      clearInterval(usereff.current);
    };
  }, []); // keep this empty dependency array at the end only If you keep that above else if doesn't work

  return (
    <div className="App">
      <h3>{count}</h3>
      {/* <button onClick={startFun}>start</button> */}
    </div>
  );
}

export default App;
