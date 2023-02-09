import React, { useState } from "react";

const Display = (counter) => {
  return <>{counter}</>;
};

const Button = (onClick, text) => <button onClick={onclick}>{text}</button>;

const App = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const increaseByOne = () => setCounter(counter + 1);
  console.log("increasing, value before", counter);
  const decreaseByOne = () => setCounter(counter - 1);
  console.log("decreasing, value before", counter);
  console.log("resetting to zero, value before", counter);
  const setToZero = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <br />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  );
};

export default App;
