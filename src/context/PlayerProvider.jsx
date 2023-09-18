import { useState, createContext, useContext } from 'react';

const PlayerContext = createContext();
const PlayerContextUpdate = createContext();

export function usePlayer() {
  return useContext(PlayerContext);
}

export function usePlayerUpdate() {
  return useContext(PlayerContextUpdate);
}

export default function PlayerProvider({ children }) {
  const [inGame, setInGame] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerTimeStamp, setPlayerTimeStamp] = useState('');
  const [playerScore, setPlayerScore] = useState(0);

  const contextValue = { inGame, playerName, playerTimeStamp, playerScore };
  const contextUpdateValue = { setInGame, setPlayerName, setPlayerTimeStamp, setPlayerScore };

  return (
    <PlayerContext.Provider value={contextValue}>
      <PlayerContextUpdate.Provider value={contextUpdateValue}>{children}</PlayerContextUpdate.Provider>
    </PlayerContext.Provider>
  );
}
