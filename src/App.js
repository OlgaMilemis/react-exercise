import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Moscow" />
      </header>
      <footer>
        {" "}
        React exercise coded by caro and
        <a
          className="gitHubLink"
          href="https://github.com/OlgaMilemis/react-exercise"
          target="_blank"
          rel="noopener noreferrer"
        >
          {""} opensourced
        </a>
      </footer>
    </div>
  );
}
