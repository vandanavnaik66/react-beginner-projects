import { useState } from "react";
import "./App.css";

function App() {
  let data = { name: "", email: "", password: "" };
  const [inputs, setInputs] = useState(data);
  const [display, setDisplay] = useState(); //this state variable is only for displaying the values so just copied all input state variable to this variable
  const [flag, setFlag] = useState(false);

  function handleChange(e) {
    // const{name,value} = e.target ;
    // setInputs((pre)=>({ ...pre, name:value }));  <=> this also we can use 

    setInputs((pre)=>({ ...pre, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.password) {
      alert("all fields are mandatory");
    } else {
      setFlag(true);
    }
    setDisplay({...inputs})
   setInputs({ name: "", email: "", password: "" } )
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="main-container">
            <div className="inner-content">
              <pre>
                {flag ? ( <h2> {`${display.name} have registered successfully...`} </h2>) : 
                (""  )}
              </pre>
              <div className="reg-text">
                <h3>Registration Form</h3>
              </div>
              <div className="input-box-button">
                <div className="input-box">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={inputs.name}
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={inputs.email}
                    onChange={handleChange}
                  />
                  <br />
                  <input
                    type="text"
                    name="password"
                    placeholder="Enter Your Password"
                    value={inputs.password}
                    onChange={handleChange}
                  />
                  <br />
                </div>
                <div>
                  <button className="btn" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default App;
