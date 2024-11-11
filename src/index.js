import React from "react";
import ReactDOM from "react-dom/client";
// Step 0: Import array of pizzaData
import { pizzaData } from "./data";
import { FaHome, FaUtensils, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import "./index.css";

function Header() {
  return (
    <header>

      <h1>Gaik Hwa's Pizza Co</h1>
    </header>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home">
        <FaHome /> Home
      </a>
      <a href="#menu">
        <FaUtensils /> Menu
      </a>
      <a href="#about">
        <FaInfoCircle /> About Us
      </a>
      <a href="#contact">
        <FaEnvelope /> Contact
      </a>
    </nav>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const isOpen = hour > 8 && hour < 22 ? true : false;

  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>"We're currently closed"</p>}
    </footer>
  );
}

function Order() {
  return (
    <div className="order">
      <p>"We're currently Open"</p>
      <button className="btn">Place an order</button>
    </div>
  );
}

// /**
// Step 1: Calculate number of pizzas
// Step 2: Use Conditional Rendering to display the number of pizzas
// Step 3: Map over the pizzaData array and render each pizza
//       : For each pizza, render the Pizza component
//  */
// // PARENT TO PIZZA COMPONENT
function Menu() {
  const numOfPizzas = pizzaData.length;
  return (
    <div className="menu">
      {/* <h4>Our Menu</h4> */}
      {numOfPizzas > 0 && (
        <>
          <em> Authentic Italian cuisine, all from our stone oven</em>
          <ul className="pizzas">
            {
              // Step 3: Map over the pizzaData array
              // For each data object, render the Pizza component
              pizzaData.map((pizza) => (
                <Pizza key={pizzaData.name} {...pizza} />
              ))
            }
          </ul>
        </>
      )}
    </div>
  );
}

// /**
//  * Component representing a Pizza item.
//  */
// CHILD TO MENU COMPONENT
function Pizza({ name, ingredients, price, photoName }) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <h3>{name}</h3>
      <em>{ingredients}</em>
      <p>${price}</p>
    </li>
  );
}

function App() {
  return (
    <div className="menu">
      <Header />
      <Footer />
      <Navbar />
      <Menu />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import {pizzaData} from "./data";
// import {FaHome, FaUtensils, FaInfoCircle, FaEnvelope} from "react-icons/fa";
// import "./index.css";


// function Header() {
//   return (
//     <header>
//       <img src="pizzas/logo-2.png" width="150px" alt="Asyraf's Pizza Co" />
//       <h1>Asyraf's Pizza Co</h1>
//     </header>
//   );
// }

// function Navbar() {
//     return (
//         <nav className="navbar">
//             <a href="#home"><FaHome /></a>
//             <a href="#menu"><FaUtensils /></a>
//             <a href="#about"><FaInfoCircle /></a>
//             <a href="#contact"><FaEnvelope /></a>
//         </nav>
//     );
// }

// function Footer() {
//   const isOpen = new Date().getHours() >= 10 && new Date().getHours() <= 20;
  
//   return (
  //   <footer>
  //     <div className="footer">
  //       {isOpen ? <Order /> : <p>"We're currently open" : "We're currently closed"</p>}
  //       <button className="btn">Place an order</button>
  //     </div>
  //   </footer>
  // );
// }

// function Order() {
//   return (
//       <div className="order">
//         <p>"We're currently open"</p>
//         <button className="btn">Place an order</button>
//       </div>
//   );
// }

// function Menu() {
//   const numOfPizzas = pizzaData.length;
//     return (
//       <div className={"menu"}>
//         {numOfPizzas > 0 && (
//           <>
//             <em> Authentic Italian cuisine, all from our stone oven</em>
//             <ul className="pizzas"> {
//               pizzaData.map(pizza => (
//                 <Pizza key={pizzaData.name} name={pizzaData.name} description={pizzaData.ingredients} price={pizzaData.price} picture={pizzaData.photoName} />
//               ))
//             }
//             </ul>
//           </>
//         )}
//       </div>
//     );
//   }
      


// function Pizza(name, ingredients, price, photoName) {
//     return (
//       <li className="pizza">
//         <img src={photoName} alt={name} />  
//         <h3>{name}</h3>
//         <em>{ingredients}</em>
//         <p>${price}</p>
//       </li>
//     );
//   }

// function App() {
//   return (
//     <div className="menu">
//       <Header />
//       <Order />
//       <Navbar />
//       <Menu />
//       <Footer />
//     </div>
//     );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);





// import React from "react";
// import ReactDOM from "react-dom/client";
// import {pizzaData} from "./data";
// import {FaHome, FaUtensils, FaInfoCircle, FaEnvelope} from "react-icons/fa";
// import "./index.css";


// function Header() {
//     const isOpen = new Date().getHours() >= 10 && new Date().getHours() <= 20;
  
//     return (
//       <div>
//         <h1 
//           style={{
//             color: "orange",
//             fontSize: "48px",
//             textTransform: "uppercase",
//           }}
//         >
//           Andy's Pizza Co.
//         </h1>
//         <div className="shopstatus">
//           <p>{isOpen ? "We're currently open" : "We're currently closed"}</p>
//         </div>
//       </div>
//     );
//   }
  

// function Navbar() {
//     return (
//         <nav>
//             <ul>
//                 <li><FaHome /></li>
//                 <li><FaUtensils /></li>
//                 <li><FaInfoCircle /></li>
//                 <li><FaEnvelope /></li>
//             </ul>
//         </nav>
//     );
// }

// function Footer() {

// }

// function Order() {
//     return (
//         <div className="btn">
//             <button>Place an order</button>
//         </div>
//     )
// }

// function Menu() {
//     return (
//         <div className={"menu"}>
//             {pizzaData.map(pizza => (
//                 <Pizza key={pizza.name} name={pizza.name} description={pizza.ingredients} price={pizza.price} picture={pizza.photoName} />
//             ))}
//         </div>
//         );
// }

// function Pizza(name, description, price, photoName) {
//     return (
//       <li className="pizza">
//         <img src={photoName} alt={name} />  
//         <h3>{name}</h3>
//         <em>{description}</em>
//         <p>${price}</p>
//       </li>
//     );
//   }

// function App() {
//   return (
//     <div >
//       <Header />
//       <Order />
//       <Navbar />
//       <Menu />
//       <Footer />
//     </div>
//     );
// };


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);







// L03
// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";

// function Header() {
//   return <h1 
//   style = {{
//     color: "orange",
//     fontSize: "48px",
//     textTransform: "uppercase",
//   }}
//   >
//     Andy's Pizza Co.</h1>;
// }

// function Pizza() {
//   return (
//     <div>
//       <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" />
//       <h3>Spinach Pizza</h3>
//       <p>Tomato, mozarella, spinach, and ricotta cheese</p>
//       <p>10</p>
//     </div>
//   );
// }

// function Menu() {
//   return (
//     <div className="menu">
//       <h2>Our Menu</h2>
//       <Pizza />
//       <Pizza />
//     </div>
//   );
// }

// function Footer() {
//   const isOpen = new Date().getHours() >= 10 && new Date().getHours() <= 20;

//   return (
//     <div className="footer">
//       <footer>
//         {isOpen ? "We're currently open" : "We're currently closed"}
//       </footer>
//     </div>
//   );
// }


// function App() {
//   return (
//     <div>
//       <Header />
//       <Menu />
//       <Footer />
//     </div>
//   );
// }



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);