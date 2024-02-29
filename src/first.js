import React from "react";
import ReactDOM from "react-dom/client";

// Another way of writing components, we can nest it by writing another React.createElement in <value> section.
// function Greeting() {
//   return React.createElement("p", {}, "Hello World");
// }

function Title() {
  return <h2 className=''>Seekho React</h2>;
}

// Greeting component having nested components
function Greeting() {
  return (
    // we can also use just <> code </>
    <React.Fragment>
      <Title />
      <Person />
      <End />
    </React.Fragment>
  );
}

const Person = () => <h3>This is a person.</h3>;
const End = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
      exercitationem.
    </p>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />); // ALWAYS HAVE TO SELF-CLOSE THE COMPONENTS
