import { useState } from "react"
import CoreConcept from "./core-concept"
import { CORE_CONCEPTS } from "../data"

  /*array[0] -> state jelenlegi állapota (get)
    array[1] -> függvény, amivel beállítható a state állapota (set)
  */

export default function CoreConcepts(){
    return (
        <section id="core-concepts">
                  <ul>
                    {CORE_CONCEPTS.map(item => (<CoreConcept key = {item.title} {...item}/>))}
                    {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
                    <CoreConcept 
                    {...CORE_CONCEPTS[1]}/>
                    <CoreConcept 
                    {...CORE_CONCEPTS[2]}/>
                    <CoreConcept 
                    {...CORE_CONCEPTS[3]}/> */}
                  </ul>
        </section>
    )
}