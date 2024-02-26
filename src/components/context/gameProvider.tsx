import React, { createContext, PropsWithChildren } from 'react'

import Game, { MyGame } from '@game'

// Create a context for the game
export const GameContext = createContext<MyGame>(Game.getGame)

// Create a provider component
export const GameProvider = ({ children }: PropsWithChildren) => {
  const game: MyGame = Game.getGame

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>
}
