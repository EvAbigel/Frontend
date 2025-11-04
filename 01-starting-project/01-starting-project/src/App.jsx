import { useState } from "react";
import Header from "./components/header";
import CoreConcepts from "./components/core-concepts";
import Examples from "./components/examples";


function App() {

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <CoreConcepts/>
        <Examples/>
        
      </main>
    </div>
  );
}

export default App;
