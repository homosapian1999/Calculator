import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");

  // handle clear
  const handleClear = () => {
    setResult("");
  };

  // handle C button
  const handleBackSpace = () => {
    setResult(result.slice(0, -1));
  };

  // Handle clicking events
  const handleClick = (e) => {
    setResult(result + e.target.name);
  };

  // handle calculation
  const handleCalculation = () => {
    try {
      setResult(eval(result).toString());
    } catch {
      setResult("Not Valid");
    }
  };
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} onChange={setResult} />
        </form>
        <div className="keypad">
          <button onClick={handleClear} id="clear">
            CLR
          </button>
          <button onClick={handleBackSpace}>C</button>
          <button onClick={handleClick} name="/">
            &divide;
          </button>
          <button onClick={handleClick} name="7">
            7
          </button>
          <button onClick={handleClick} name="8">
            8
          </button>
          <button onClick={handleClick} name="9">
            9
          </button>
          <button onClick={handleClick} name="*">
            &times;
          </button>
          <button onClick={handleClick} name="4">
            4
          </button>
          <button onClick={handleClick} name="5">
            {" "}
            5
          </button>
          <button onClick={handleClick} name="6">
            6
          </button>
          <button onClick={handleClick} name="-">
            &ndash;
          </button>
          <button onClick={handleClick} name="1">
            1
          </button>
          <button onClick={handleClick} name="2">
            2
          </button>
          <button onClick={handleClick} name="3">
            3
          </button>
          <button onClick={handleClick} name="+">
            +
          </button>
          <button onClick={handleClick} name="0">
            0
          </button>
          <button onClick={handleClick} name=".">
            .
          </button>
          <button id="result" onClick={handleCalculation}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
