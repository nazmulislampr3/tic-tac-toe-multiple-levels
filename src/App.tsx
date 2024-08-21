import PlayerName from "./components/PlayerName";
import Result from "./components/Result";
import SwitchLevel from "./components/SwitchLevel";
import TicTacToe from "./components/TicTacToe";
import { useGameContext } from "./context/GameContext";

const App = () => {
  const { restart, result } = useGameContext()!;
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-2"
      style={{
        background: "linear-gradient(to right bottom, #2E073F, #674188)",
      }}
    >
      {result ? <Result /> : null}
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <PlayerName player={2} />
        <TicTacToe />
        <PlayerName player={1} />
      </div>
      <div className="flex gap-16 items-center justify-center mt-8">
        <SwitchLevel />
        <button
          className="text-gray-200 bg-green-600 px-5 py-1 font-semibold text-lg"
          onClick={restart}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default App;
