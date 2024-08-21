import { useGameContext } from "../../context/GameContext";

const Grid = ({
  value,
  index,
}: {
  value: number | undefined;
  index: number;
}) => {
  const img =
    value === 1 ? "/images/o.png" : value === 2 ? "/images/x.png" : null;

  const { press } = useGameContext()!;

  return (
    <div
      className="border-2 border-gray-500 w-full h-full cursor-pointer flex items-center justify-center overflow-hidden grow-0 shr"
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
