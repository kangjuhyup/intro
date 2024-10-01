import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
createRoot(document.getElementById("root")!).render(<App />);
