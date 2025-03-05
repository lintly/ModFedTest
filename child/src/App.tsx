// @ts-expect-error Typescript sucks sometimes
import "./App.css";

import React from "react";


function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <div className="card">
        <button
          children={`count is ${count}`}
          onClick={() => setCount((count) => count + 1)}
        />
      </div>
    </>
  );
}

export default App;
