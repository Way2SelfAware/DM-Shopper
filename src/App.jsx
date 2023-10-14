// React Imports
import { useState } from "react";
import "./App.css";
// My Imports
import Header from "./components/common/header";
import Footer from "./components/common/footer";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
