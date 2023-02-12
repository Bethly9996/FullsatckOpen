import React, { useState } from "react";

const Statistics = (props) => {
  return (
    <div>
      {props.text} {props.good} {props.neutral} {props.bad} 
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  const isGood = () => {
    console.log("value of good increased by one");
    setGood(good + 1);
  };
  const isBad = () => {
    console.log("value of bad increased by one");
    setBad(bad + 1);
  };
  const isNeutral = () => {
    console.log("value of neutral increased by one");
    setNeutral(neutral + 1);
  };
//   const isAll = () => {
//     console.log("Total feedback");
//     setAll(good + bad + setNeutral)

//   }

  return (
    <div>
      <h1>Give Feedback</h1>
      {good}
      <button onClick={isGood}>Good</button>
      {neutral}
      <button onClick={isNeutral}>Neutral</button>
      {bad}
      <button onClick={isBad}>Bad</button>
      <h2>Statistics</h2>
      <Statistics text="Good" good={good} />
      <Statistics  text="Neutral" neutral={neutral}/>
      <Statistics text="Bad" bad={bad}/>
      <Statistics text="All"/>
      
    </div>
  );
};

export default App;
