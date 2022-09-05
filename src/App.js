import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  const [secretMessage, setSecretMessage] = useState("");
  useEffect(() => {
    fetch("/.netlify/functions/supersecret", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setSecretMessage(data.message);
      });
  }, [token]);
  async function submitHandler(event) {
    event.preventDefault();
    try {
      const response = await fetch("/.netlify/functions/auth", {
        method: "POST",
        body: JSON.stringify({
          name: event.target.name.value,
          password: event.target.password.value,
        }),
      });
      if (response.status === 201) {
        const data = await response.json();
        setToken(data.token);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <label>
            Name:
            <input type="text" name="name" id="name" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input type="password" name="password" id="password" />
          </label>
          <button type="submit">Log in</button>
        </div>
      </form>
      <p>{token ? "You are logged in" : "You are not logged in"}</p>
      <div>{secretMessage}</div>
    </div>
  );
}

export default App;
