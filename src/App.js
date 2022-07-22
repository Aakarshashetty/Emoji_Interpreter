// import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "💈": "Barber Pole",
  "🎎": "Japanese Dolls",
  "🎏": "Carp Streamer",
  "🎐": "Wind Chime",
  "🪀": "Yo-Yo",
  "🧿": "Nazar Amulet",
  "🪕": "Banjo",
  "🏷️": "Label",
  "🗃️": "Card File Box",
  "🔧": "Wrench"
};
var emojiArray = Object.keys(emojiDictionary);
//console.log(emojiArray);


function App() {
  const [emoji, setEmoji] = useState("");
  function inputChangeHandler(event) {
    // console.log(event.target.value);
    var input = event.target.value;
    if (!input) {
      setEmoji("");
    } else if (input in emojiDictionary) {
      setEmoji(emojiDictionary[input]);
    } else {
      setEmoji("Oops! We don't have that in our database😀");
    }
  }
  function clickEmojiHandler(item) {
    console.log("Clicked!");
    setEmoji(emojiDictionary[item]);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        onChange={inputChangeHandler}
        placeholder="Enter any emoji"
      ></input>

      <h2>Click on the Emojis to know their meaning:</h2>
      {emojiArray.map((item) => {
        return (
          <span
            class="emojis"
            key={item}
            style={{
              margin: "10px",
              padding: "0.5rem",
              fontSize: "30px",
              cursor: "pointer"
            }}
            onClick={() => clickEmojiHandler(item)}
          >
            {item}
          </span>
        );
      })}
      <h2>
        Emoji Meaning:{" "}
        <span class="output">
          <em>{emoji}</em>
        </span>
      </h2>
    </div>
  );
}

export default App;
