import { useGameContext } from "../context/GameContext";

const SwitchLevel = () => {
  const { switchLevel, level } = useGameContext()!;
  return (
    <div>
      <select
        value={level}
        className="px-3 py-1 font-bold bg-blue-500 text-lg text-gray-300 cursor-pointer"
        onChange={(e) => switchLevel(Number(e.target.value))}
      >
        <option value={1}>Level 1</option>
        <option value={2}>Level 2</option>
        <option value={3}>Level 3</option>
      </select>
    </div>
  );
};

export default SwitchLevel;
