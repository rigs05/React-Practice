import React from "react";
import ReactDOM from "react-dom/client";

// ASSETS
import "./index.css";

const BookList = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const Author = "Sarah J. Maas";
  const Title = "House of Flame and Shadow (Crescent City, 3)";
  const img =
    "https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/91jbHTNpy6L._SL1500_.jpg";
  return (
    <article className='books'>
      {/* <Image />     //way of commenting in react */}
      <img src={img} alt='House of Flame and Shadow' />
      <h2>{Title}</h2>
      <h4>{Author.toUpperCase()}</h4>
      {/* <Title />       // Rendering components within one, 1st approach */}
      {/* <Author />      // Below components are being rendered directly*/}
    </article>
  );
};

// const Image = () => (
//   <img
//     src='https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/91jbHTNpy6L._SL1500_.jpg'
//     alt='House of Flame and Shadow'
//   />
// );
// const Title = () => <h2>House of Flame and Shadow (Crescent City, 3)</h2>;
// const Author = () => {
// const inlineStyles = {
//   color: "#61798",
//   fontSize: "0.5rem",
//   // marginTop: "0.5rem",
//   fontStyle: "italic",
// };

// return (
// <h4 style={inlineStyles}>Sarah J. Maas</h4>
// We can either make a JS object and pass the reference, or directly add style within
// );
// };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
