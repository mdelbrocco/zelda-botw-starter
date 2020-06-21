import React, { useState, useContext } from "react";
import { ReactComponent as Triforce } from "./assets/triforce.svg";
import { ItemGrid } from "./components/ItemGrid";
import items from './data/items';

export const SelectedItemContext = React.createContext({
  selectedItemIndex: "",
  setSelectedItemIndex: (value: string) => {}
});

function App() {
const [selectedItemIndex, setSelectedItemIndex] = useState<string>("");

  return (
    <SelectedItemContext.Provider value={{selectedItemIndex, setSelectedItemIndex}}>
      <div className="min-h-screen flex justify-center items-center bg-zelda-darkGreen">
        <div className="container mx-auto flex flex-col xl:flex-row">
          <div className="w-full xl:w-1/2">
            <ItemGrid items={items.weapons} />
            {/* <ItemGrid items={items.shields} />
            <ItemGrid items={items.armors} /> */}
          </div>
          <div className="w-full xl:w-1/2">
            <Triforce className="ml-4 w-20 h-20 text-zelda-yellow fill-current" />
          </div>
        </div>
      </div>
    </SelectedItemContext.Provider>
  );
}

export default App;
