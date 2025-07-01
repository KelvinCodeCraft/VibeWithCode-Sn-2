import React from "react";
import './App.css';
import About from "./Components/About/about";
import Form from "./Components/Form/form";

function App() {
  const name = "React";
  const messages = [1, 2, 3];

  return (
    <>
    <h1>Hello, {name}!</h1>
    <h1>You have {messages.length} new messages.</h1>
    </>
    

  );
}

export default App;