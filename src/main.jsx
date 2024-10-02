import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const TODO = ["todo1", "todo2", "todo3", "todo4"];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ul>
      {TODO.map((todoItem, i) => (
        <li key={i}>{todoItem}</li>
      ))}
    </ul>
  </StrictMode>
);
