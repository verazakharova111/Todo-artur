import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const TODO = ["todo1", "todo2", "todo3"];
const LIST = [
  {
    text: "todo1",
    id: 1,
  },
  {
    text: "todo2",
    id: 2,
  },
  {
    text: "todo3",
    id: 3,
  },
];
const DATA = [
  ["Name", "surname", "age"],
  ["Artur", "Zakharov", "36"],
  ["Vera", "Zakharova", "35"],
];
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ul>
      {TODO.map((el, i) => {
        return <li key={i}> {el}</li>;
      })}
    </ul>
    <ul>
      {LIST.map((list, i) => (
        <li key={i}>{list.text}</li>
      ))}
    </ul>
    <table>
      <thead>
        {DATA[0].map((th, i) => (
          <th key={i}>{th}</th>
        ))}
      </thead>
      <tbody>
        {DATA.filter((_, i) => i !== 0).map((row, i) => (
          <tr key={i}>
            {row.map((td, i) => (
              <td key={i}>{td}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </StrictMode>
);
