import { Square } from "./Square"

export const WinnerModal = ({ winner, resetGame }) => {
    if (winner === null) return null

    const winnerText = winner === false ? 'Empate' : 'Ganó:'

    return (
        <section className="winner">
            <div className="text">
                <h2>{winnerText} </h2>
                {winner && (
                    <header className="win">
                        <Square>{winner}</Square>
                    </header>
                )}
                <footer>
                    <button onClick={resetGame}>Jugar otra vez</button>
                </footer>
            </div>
        </section>
    )
}

export const checkForDraw = (boardToCheck) => {
    return boardToCheck.every((square) => square !== null)
}