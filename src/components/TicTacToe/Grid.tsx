import { useGameContext } from "../../context/GameContext";
import cn from "../../lib/uitls/cn";

const Grid = ({
  value,
  index,
}: {
  value: number | undefined;
  index: number;
}) => {
  const img =
    value === 1 ? "/images/o.png" : value === 2 ? "/images/x.png" : null;

  const { press, draw, solvedGrids } = useGameContext()!;

  const solvedGrid = solvedGrids?.some((item) => item === index);

  return (
    <div
      className={cn(
        "border-2 border-gray-500 w-full h-full cursor-pointer flex items-center justify-center overflow-hidden grow-0 shr",
        {
          "bg-red-700": draw,
          "bg-teal-600": solvedGrid,
        }
      )}
      onClick={() => {
        if (!value) {
          press(index);
        }
      }}
    >
      {img ? <img src={img} alt="img" className="size-1/3 invert" /> : null}
    </div>
  );
};

export default Grid;
