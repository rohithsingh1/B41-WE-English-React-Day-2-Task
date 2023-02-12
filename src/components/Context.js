import React, {useState, useContext} from "react";

const CardItemsContext=React.createContext();

export function CardItemsProvider({children}){
  const [count, setCount]=useState(0);
    function decrementCounter(count){
      setCount(count-1);
  }
  function incrementCounter(count) {
    setCount(count+1);
  }
    return (
        <CardItemsContext.Provider value={{count,decrementCounter,incrementCounter}}>
            {children}
        </CardItemsContext.Provider>
    )
}

export function CardItemsConsumer(){
  return useContext(CardItemsContext);
}