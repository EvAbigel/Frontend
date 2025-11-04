import { useState } from "react";
import TabButton from "./tab-button";
import { EXAMPLES } from "../data";

export default function Examples(){
    const [selectedButton, setSelectedButton] = useState(
        undefined);
    
    function handleSelect(selected){
        setSelectedButton(selected)
    }
    
    const buttons = ["Components", "Jsx", "Props", "State"]

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              {buttons.map((b) => (
                <TabButton key = {b} 
                onSelect={()=>handleSelect(b.toLocaleLowerCase())} 
                isActive={selectedButton == b.toLocaleLowerCase()}>{b}</TabButton>))}
            </menu>
            <div id="tab-content">
                {!selectedButton && "Click the button for more information!" }
                {selectedButton && (
                  <>
                    <h3>{EXAMPLES[selectedButton].title}</h3>
                    <p>{EXAMPLES[selectedButton].description}</p>
                    <pre>
                      <code>{EXAMPLES[selectedButton].code}</code>
                    </pre>
                  </>
                )}
            </div>
        </section>
    );
}