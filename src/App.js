//counter
/**
 * We want to display a counter.
 * It needs to be incremented after every second.
 */

import React from "react";
function App() {
  const [count, setCount] = React.useState(1);
  React.useEffect(() => {
    startTimer();
  }, []);
  function startTimer() {
    var id = setInterval(() => {
      setCount((v) => v + 1);
    }, 2000);
    setTimeout(() => {
      clearInterval(id);
    }, 9000);
  }
  return <div>Current Count {count}</div>;
}

export default App;
