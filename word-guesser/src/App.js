// CSS
import "./App.css";

// React
import { useCallback, useEffect, useState } from "react";

// data
import { wordsList } from "./data/words";

//Components
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setgameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setpickedWord] = useState("");
  const [pickedCategory, setpickedCategory] = useState("");
  const [letters, setletters] = useState([]);

  const pickWordAndCategory = () => {
    // Pick a random category
    const categories = Object.keys(words);
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  // start Word Guesser
  const startGame = () => {
    // pick word & Category
    const { word, category } = pickWordAndCategory();
    console.log(word, category);

    // create a array of letters
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());

    console.log(wordLetters);

    //fill States
    setpickedWord(word);
    setpickedCategory(category);
    setletters(letters);

    setgameStage(stages[1].name);
  };

  // process the letter input
  const verifyLetter = () => {
    setgameStage(stages[2].name);
  };

  const retry = () => {
    setgameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default App;
