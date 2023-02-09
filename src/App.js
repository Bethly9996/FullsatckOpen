const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age;

  return (
    <>
      <p>
        Hello {name} you are {age} years old
      </p>
      <p>So you are probably born in {bornYear()}</p>
    </>
  );
};

const App = () => {
  const name = "Esther";
  const age = 20;

  return (
    <>
      <h1> Greetings</h1>
      <Hello name="Beth" age={23 + 10} />
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
