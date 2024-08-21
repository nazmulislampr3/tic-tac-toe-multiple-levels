import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GameContextProvider from "./context/GameContext.tsx";

createRoot(document.getElementById("root")!).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
