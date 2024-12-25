import React from "react";
import AddTask from "./components/AddTask";
import { Header } from "./components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <AddTask/>
      </main>
    </div>
  );
}

export default App;
