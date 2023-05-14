import { useState } from "react";

const App = () => {
  const [result, setResult] = useState("");
  return (
    <div>
      <div className="container">
        <form>
          <input type="text" value={result} />
        </form>
        <div className="keypad">
          <button className="">Clear</button>
          <button className="">C</button>
          <button className="">&divide;</button>
          <button className="">7</button>
          <button className="">8</button>
          <button className="">9</button>
          <button className="">&times;</button>
          <button className="">4</button>
          <button className="">5</button>
          <button className="">6</button>
          <button className="">&ndash;</button>
          <button className="">1</button>
          <button className="">2</button>
          <button className="">3</button>
          <button className="">+</button>
          <button className="">0</button>
          <button className="">.</button>
          <button className="">=</button>
        </div>
      </div>
    </div>
  );
};

export default App;
