import CoreConcepts from "./CoreConcepts";
import { CORE_CONCEPTS } from "../data";
export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core concepts</h2>
      <ul>
        {/* <CoreConcepts
                      title={CORE_CONCEPTS[0].title}
                      description={CORE_CONCEPTS[0].description}
                      image={CORE_CONCEPTS[0].image}
                    />
                    <CoreConcepts {...CORE_CONCEPTS[1]} />
                    <CoreConcepts {...CORE_CONCEPTS[2]} />
                    <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}
