import { createRoot } from "react-dom/client";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <img src="/src/assets/react-logo.png" width="40px" alt="React Logo"></img>
    <h2>Fun Facts About React</h2>
    <ul>
      <li>Was First Released in 2013</li>
      <li>Was Originally Created By Jordan Walke</li>
      <li>Has well over 100k stars on github</li>
      <li>Is Maintained BY Meta</li>
      <li>Power Thousand of enterprise apps, including mobile apps</li>
    </ul>
  </div>
);

console.log(<h1>Hello From React</h1>)

/*
  We can render only 1 parent element at a time in react.
*/
