import React, {useState} from 'react';

export const CountContext = React.createContext({
  buyCount: 0,
  setBuyCount: () => {},
  compareCount: 0,
  setCompareCount: () => {},
  chosenCount: 0,
  setChosenCount: () => {},
});

export const CountProvider = ({children}) => {
  const [buyCount, setBuyCount] = useState(0);
  const [chosenCount, setChosenCount] = useState(0);
  const [compareCount, setCompareCount] = useState(0);

  const ContextValue = {
    buyCount,
    setBuyCount,
    chosenCount,
    setChosenCount,
    compareCount,
    setCompareCount,
  }

return (
    <CountContext.Provider value={ContextValue}>
      {children}
    </CountContext.Provider>
  )
}
