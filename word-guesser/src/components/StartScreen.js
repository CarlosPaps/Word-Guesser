import "./StartScreen.css";

const StartScreen = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Word Guesser</h1>
      <p>Click on the button to start!</p>
      <button onClick={startGame}>Begin!</button>
    </div>
  );
};

export default StartScreen;
