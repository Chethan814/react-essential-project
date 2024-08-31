import { useState } from "react";
import Header from "./Components/Header/Header";
import { CoreConcept } from "./Components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS, EXAMPLES } from "./Components/CoreConcept/Data.jsx";
import TabButton from "./Components/TabButton/TabButton.jsx";

function App() {
  let [content, setContent] = useState("components");
  function tabClick(SelectedBtt) {
    // console.log(setContent , SelectedBtt);
    setContent(SelectedBtt);
  }

  return (
    <div>
      <Header />

      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts </h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => tabClick("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => tabClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => tabClick("props")}>Props</TabButton>
            <TabButton onSelect={() => tabClick("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[content].title}</h3>
            <p>{EXAMPLES[content].description}</p>
            <pre>
              <code>
                {EXAMPLES[content].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
