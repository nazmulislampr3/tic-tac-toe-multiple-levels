import { useGameContext } from "../context/GameContext";
import cn from "../lib/uitls/cn";

const PlayerName = ({ player }: { player: number }) => {
  const { player: playerNum, result } = useGameContext()!;
  const active = player === playerNum;
  return (
    <span
      className={cn(
        "text-gray-300 font-bold text-lg bg-slate-900 px-6 py-2 w-fit",
        {
          "bg-green-600 shadow-md shadow-green-500": active,
          "opacity-80": !active || result,
        }
      )}
    >
      Player {player}
    </span>
  );
};

export default PlayerName;
