import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//React.createElement==> object ==> HTMLElement(render)
//jsx - is not Html in js , it is html like syntax or xml
const Title = (
  <h1 className="head" tabIndex="5">
    Namaste React using jsx
  </h1>
);
const HeadingComponent = () => (
  <div id="container">
    {Title}
    <h1 className="heading">Namaste React Functional Component</h1>;
  </div>
);

//const HeadingComponent2 = () => {
//<h1 className="heading">Namaste React Functional Component</h1>;
//};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
