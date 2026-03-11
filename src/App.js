import React, { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div className="container">

      <h1 className="title">Counter App</h1>

      <div className="counter">{count}</div>

      <button 
        className="increase"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button 
        className="decrease"
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>

      <button 
        className="reset"
        onClick={() => setCount(0)}
      >
        Reset
      </button>

    </div>
  );
}

export default App;