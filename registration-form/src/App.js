import { useState } from "react";
import "./App.css";

function App() {
  let data = { name: "", email: "", password: "" };
  const [inputs, setInputs] = useState(data);
  const [flag, setFlag] = useState(false);

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!inputs.name || !inputs.email || !inputs.password) {
      alert("all fields are mandatory");
    } else {
      setFlag(true);
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="main-container">
            <div className="inner-content">
              <pre>
                {flag ? ( <h2> {`${inputs.name} have registered successfully...`} </h2>) : 
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
