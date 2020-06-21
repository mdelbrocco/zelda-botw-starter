import React from "react";
import { ReactComponent as Triforce } from "./assets/triforce.svg";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-zelda-darkGreen">
      <div className="container mx-auto flex flex-col xl:flex-row">
        <div className="w-full xl:w-1/2">
          <Triforce className="ml-4 w-20 h-20 text-zelda-yellow fill-current" />
        </div>
        <div className="w-full xl:w-1/2">
          <Triforce className="ml-4 w-20 h-20 text-zelda-yellow fill-current" />
        </div>
      </div>
    </div>
  );
}

export default App;
