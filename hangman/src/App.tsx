import { useState } from "react"
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState<string>(() => {
    return words[Math.floor(Math.random() * words.length)]
  })
  return <div 
    style={{
    maxWidth: "800px",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    margin: "0 auto",
    alignItems: "center"
  }}>
    <div style={{font: "Arial", fontSize: "2rem", fontStyle: "italic"}}>You lose!!</div>
    <HangmanDrawing />
    <HangmanWord />
    <Keyboard />
  </div>
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
}
export default App
