import React, { useState } from "react";
import NavbarCustom from "./components/Navbar/Navbar";
import SectionCustom from "./components/Section/Section";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterCustom from "./components/Footer/Footer";

const App = () => {
  const [counter, setCounter] = useState("");

  const users = [
    { name: "Drag", lastname: "overlord", age: 18, id: 1 },
    { name: "Kristina", lastname: "Kris", age: 16, id: 2 },
    { name: "Albina", lastname: "Albinan", age: 17, id: 3 },
  ];
  return (
    <div>
      <NavbarCustom />
      <SectionCustom
        users={users}
      />
      <FooterCustom />
    </div>
  );
};

export default App;
