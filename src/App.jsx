// import CoreComponent from "./Components/CoreComponenets/CoreComponent";
import Header from "./Components/Header/Header";
import { CoreConcept } from "./Components/CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "./Components/CoreConcept/Data.jsx"

function App() {
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
        
      </main>
    </div>
  );
}

export default App;
