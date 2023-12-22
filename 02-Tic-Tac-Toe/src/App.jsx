import React, { useState } from 'react'
import confetti from 'canvas-confetti'

import { Square } from './components/Square'
import { WinnerModal, checkForDraw } from './components/WinnerModal'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'

function App () {
  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ?? TURNS.X
  })

  const [winner, setWinner] = useState(null) // null = ganador, false = empate

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {
    // retorna si ya hay algo en la posición clickeada
    // o si hay un ganador
    if (board[index] || winner) return
    // actualiza el board
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    // chequea si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkForDraw(newBoard)) {
      setWinner(false)
    } else {
      // cambia el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)

      window.localStorage.setItem('turn', newTurn)
    }
  }
  return (
    <main className="board">
      <h1>Tatetí hehe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          )
        })}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  )
}

export default App
