import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type Grids = (number | undefined)[];
type Func = () => void;
type Func1 = (number: number) => void;

const GameContext = createContext<{
  switchLevel: Func1;
  restart: Func;
  press: Func1;
  grids: Grids;
  player: number;
  result: boolean;
  level: number;
} | null>(null);

const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const [unit, setUnit] = useState<3 | 4 | 5>(3);
  const arr: Grids = Array.from({ length: unit * unit });
  //   arr[3] = 1;
  //   arr[4] = 1;
  //   arr[5] = 1;
  const [grids, setGrids] = useState<Grids>(arr);
  const [player, setPlayer] = useState<1 | 2>(1);
  const [result, setResult] = useState<boolean>(false);
  const level = unit === 3 ? 1 : unit === 4 ? 2 : 3;

  const reset = () => {
    setGrids(Array.from({ length: unit * unit }));
    setPlayer(1);
    setResult(false);
  };
  const switchLevel: Func1 = (lvl) => {
    const unt = lvl === 1 ? 3 : lvl === 2 ? 4 : 5;
    setUnit(unt);
  };

  const restart: Func = () => reset();

  const isSolved = (index: number, axis: "x" | "y" | "z"): boolean => {
    const x = axis === "x";
    const y = axis === "y";
    let loop = true;
    let solved = true;
    let count = 1;
    while (loop && count < unit) {
      const nextVal =
        grids[index + (x ? count : y ? count * unit : count * (unit + 1))];
      if (!(grids[index] === nextVal)) {
        loop = false;
        solved = false;
        break;
      }
      count++;
    }
    return solved;
  };

  const emptyGrid = grids.some((item) => !item);

  const solved = (): boolean => {
    let value = player === 1 ? 1 : 2;
    console.log({ value });
    let solved = false;
    for (let i = 0; i < unit; i++) {
      if (grids[i] === value) {
        const x = i % unit === 0;
        const y = i < unit;
        const z = i % (unit - 1) === 0;
        solved =
          (x && isSolved(i, "x")) ||
          (y && isSolved(i, "y")) ||
          (z && isSolved(i, "z"));
        if (solved) {
          break;
        }
      }
    }

    if (!solved) {
      for (let i = 1; i < unit; i++) {
        const j = i * unit;
        if (grids[j] === value) {
          solved = isSolved(j, "x");
          if (solved) {
            break;
          }
        }
      }
    }

    return solved;
  };

  const press: Func1 = (index) => {
    if (!grids[index] && !result) {
      setGrids((prev) => {
        const copy = [...prev];
        copy[index] = player === 1 ? 1 : 2;
        return copy;
      });
    }
  };

  useEffect(() => {
    const pressed = grids.some((item) => !!item);
    if (pressed) {
      const slvd = solved();
      if (!slvd && emptyGrid) {
        setPlayer((prev) => (prev === 1 ? 2 : 1));
      }
      if (slvd) {
        setResult(true);
      }
    }
  }, [grids, emptyGrid]);

  useEffect(reset, [unit]);

  return (
    <GameContext.Provider
      value={{ restart, switchLevel, press, grids, player, result, level }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
export const useGameContext = () => useContext(GameContext);
