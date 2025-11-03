import CoreConcept from "./components/core-concept";
import Header from "./components/header";
import TabButton from "./components/tab-button";

import { CORE_CONCEPTS } from "./data";

function App() {
  let dynamicContent = "Click a button for more information!"

  function handleSelect(selectedButton){
    dynamicContent = `You selected the ${selectedButton} button!`
    console.log(`${selectedButton} works!`);
  }

  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description} 
            image={CORE_CONCEPTS[0].image}/>
            <CoreConcept 
            {...CORE_CONCEPTS[1]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[2]}/>
            <CoreConcept 
            {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>

        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={()=>handleSelect("Components")}>Components</TabButton>
              <TabButton onSelect={()=>handleSelect("JSX")}>JSX</TabButton>
              <TabButton onSelect={()=>handleSelect("Props")}>Props</TabButton>
              <TabButton onSelect={()=>handleSelect("State")}>State</TabButton>
            </menu>
        </section>
        {dynamicContent}
      </main>
    </div>
  );
}

export default App;
