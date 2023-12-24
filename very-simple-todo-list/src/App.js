import {  useState } from "react";

function App() {
  const[state,setState]=useState("");
  const[message,setMessage]=useState([]);
const fun=(e)=>{
if(e.key==="Enter"){
  let obj={
    state
  }
  setMessage([...message,obj])
  setState('')
}
}

let clickFun=()=>{
  let obj={state} 
  setMessage([...message,obj])
  setState('')

}

function removeItem(i){
     setMessage((preState)=>{
          return  (
            preState.filter((item,index)=>{
              return index!==i;
            })
          )
      })
     }  
}


  return (
    <>
<input type="text" value={state} onKeyDown={fun} onChange={(e)=>setState(e.target.value)}/>
<button onClick={clickFun}>Enter</button>
<p>{message.map((item,index)=><ul>  {item.state}
<button onClick={()=>removeItem(index)}>remove</button>
</ul>)}</p>
    </>

  );


}
export default App;

