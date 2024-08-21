import { useGameContext } from "../../context/GameContext";
import cn from "../../lib/uitls/cn";
import Grid from "./Grid";

const TicTacToe = () => {
  const { grids, level } = useGameContext()!;
  return (
    <div
      className={cn("max-w-3xl w-full aspect-square bg-slate-900 grid", {
        "grid-cols-3 grid-rows-3": level === 1,
        "grid-cols-4 grid-rows-4": level === 2,
        "grid-cols-5 grid-rows-5": level === 3,
      })}
    >
      {grids.map((value, index) => (
        <Grid value={value} index={index} key={index} />
      ))}
    </div>
  );
};

export default TicTacToe;
