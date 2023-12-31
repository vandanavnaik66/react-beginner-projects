import {  useEffect, useState } from "react";

function App() {
  const[state,setState]=useState("");
  // need state to keep track of the todo items, because localstorage is synchronous-that  could slow down the application , instead of using just an empty array as initial state=> we can use function in its place , Which will only be executed on the initial render
  const[message,setMessage]=useState(()=>{
   let savedTodos= localStorage.getItem("todoItem");
   console.log(savedTodos)
   if(savedTodos){
      return JSON.parse(savedTodos)
   }
   else {
    return []
   }
  });

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

useEffect(()=>{

  //This useEffect will run when message changes each time, means when you add new todo to the array that time it will run and save those data 
  localStorage.setItem("todoItem", JSON.stringify(message))
},[message]
)

useEffect(()=>{
  localStorage.removeItem("todoItem")
},[])


function removeItem(i){
     setMessage((preState)=>{
          return  (
            preState.filter((item,index)=>{
              return index!==i;
            })
          )
      })
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

