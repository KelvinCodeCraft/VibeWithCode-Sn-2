import React from "react";

function Greetings({ name }) {
  return <h3>Hello, {name} welcome to our app</h3>;
}

function UserList({ users }) {
  return (
    <ol>
      {users.map((user, index) => (
        <li key={index}>
          {user}
        </li>
      ))}
    </ol>
  )
}

function ClickButton({ onClick }) {
  return <button onClick={onClick}>Click Me!</button>;
}

function Color({ color }) {
  const boxStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: color,
    border: "1px solid black",
  };
  return <div style={boxStyle}></div>;
}

function Status({ isOnline }) {
  return (
    <div>
      {isOnline ? <p>User is online</p> : <p>User is offline</p>}
    </div>
  );
}

function App() {
  const myUsers = ["Alice", "Bob", "Charlie"];
  return (
    <div>
      <Greetings name="John" />
      <Greetings name="Jane" />
      <Greetings name="Doe" />
      <h2>Users:</h2>
      <UserList users={myUsers} />
      <ClickButton onClick={() => console.log("Button clicked!")} />
      <>
      <Color color="blue" />
      <Color color="red" />
      </>
      <Status isOnline={true} />
      <Status isOnline={false} />
    </div>
  );
}

export default App;