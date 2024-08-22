import { useGameContext } from "../context/GameContext";

const Result = () => {
  const { player, restart, draw } = useGameContext()!;
  return (
    <div
      className="w-screen h-screen fixed inset-0 z-50 flex items-center jusitfy-center"
      style={{
        background: "rgba(0, 0, 0, 0.85)",
      }}
    >
      <div className="flex flex-col items-center justify-center w-full h-full">
        {!draw ? (
          <>
            <h2 className="font-bold text-5xl text-green-500 ">Congrats!</h2>
            <span className="text-gray-300 text-2xl mt-4">
              Player {player} won
            </span>
          </>
        ) : (
          <span className="text-red-500 text-6xl font-bold mt-4">Draw!</span>
        )}

        <div>
          <button
            className="text-gray-300 bg-green-600 px-6 py-1.5 font-bold text-lg mt-6"
            onClick={restart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
