import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Player 1" symbol="X" />
          <Player name="Player 2" symbol="0" />
          {/* <li>
            <span className="player-info">
              <span className="player-name">Player 2</span>
              <span className="player-symbol">O</span>
            </span>
          </li> */}
        </ol>
        <GameBoard />
      </div>
      Log
    </main>
  );
}

export default App;
