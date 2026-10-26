import reactImg from "./assets/react-core-concepts.png"; //dynamic import of the image to avoid issues with bundlers

const reactDescription = ["Fundamental", "Curcial", "Core"];

function getRandomInt() {
  return Math.floor(Math.random() * reactDescription.length);
}
function Header() {
  const description = reactDescription[getRandomInt()];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        //dyanamic description of React concepts
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
