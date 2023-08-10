export function HangmanWord() {
    const word = "Text"
    const guessedLetters = ["e"]
    return <div 
    style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontFamily: "monospace",
        fontWeight: "bold",
        textTransform: "uppercase"
    }}>
        {word.split("").map((letter, index) => (
            <span style={{borderBottom: ".1em solid black"}} key={index}>
                <span style={{visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden"}}>{letter}</span>
            </span>
        ))}
    </div>
}