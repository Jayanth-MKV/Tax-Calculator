import React, { useState } from "react";
const DataContext = React.createContext();

function DataContextProvider(props) {
  const [Data, setData] = useState(props.data);

  function updateData(name,value) {
    setData((income) => ({
      ...income,
      [name]: value,
    }));
  }

  return (
    <DataContext.Provider value={{Data,updateData}}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };
