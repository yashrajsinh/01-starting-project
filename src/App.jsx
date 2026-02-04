import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {EXAMPLES} from "./data.js"

//special react func to deal with data it's called Hook 
import { useState } from "react";

function App() {
const [selectedTopic, setSelectedTopic] = useState(); 
  //let tabContent = 'Please click a button';

  function handleClick(selectedButton) {
    //Selected button should be string in values 
   setSelectedTopic(selectedButton)
   console.log(selectedTopic)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* This is same as above but in samller version */}
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2> Examples </h2>
          <menu>
            <TabButton onSelect={() => handleClick('components')}> Components </TabButton>
            <TabButton onSelect={() => handleClick('jsx')}> JSX </TabButton>
            <TabButton onSelect={() => handleClick('props')}> Props </TabButton>
            <TabButton onSelect={() =>  handleClick('state')}> State </TabButton>
          </menu> 
            { !selectedTopic ? <p> Please select a topic. </p> :  
              <div id="tab-content">
           <h3> {EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>
              {EXAMPLES[selectedTopic].code}
            </code>
          </div> }
           
        </section>
      </main>
    </div>
  );
}
export default App;
