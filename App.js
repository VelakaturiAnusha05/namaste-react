import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';

//React.createElement==> object ==> HTMLElement(render)

//const heading= React.createElement(
    //"h1",
    //{id: "heading"},
  //  "Namaste React"
//);
//console.log(heading);
//jsx - is not Html in js , it is html like syntax or xml
const jsxHeading = <h1 id="heading">Namaste React using jsx</h1>;
console.log(jsxHeading);
const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);