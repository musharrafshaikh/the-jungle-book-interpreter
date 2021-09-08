import react, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🐻": "Baloo",
  "🐺": "Akela",
  "🐯": "Sher Khan",
  "👩‍🦰": "Shanti",
  "👨‍🦱": "Mowgli",
  "🐍": "Kaa",
  "🦧": "King Louie"
};

var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>The Jungle Book</h1>
      <input
        placeHolder="Search emoji here"
        onChange={emojiInputHandler}
        style={{
          padding: "1rem",
          margin: "0.5rem auto 2rem",
          width: "80%",
          border: "2px solid",
          outline: "none",
          borderRadius: "20px"
        }}
      />
      <span
        style={{
          color: "#42EADDFF"
        }}
      >
        <h2> {meaning}</h2>
      </span>

      <h3>Characters we know 👇 </h3>

      <ul>
        {emojiWeKnow.map(function (emoji) {
          return (
            <li
              key={emoji}
              onClick={() => emojiClickHandler(emoji)}
              style={{
                padding: "1rem",
                margin: "1rem",
                display: "inline-block",
                fontSize: "2rem",
                cursor: "pointer"
              }}
            >
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
