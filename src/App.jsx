import "./App.css";
import React, { useReducer, useState } from "react";
import { mock } from "./mock";
import AppTwo from "./context/AppTwo";

function App() {
  // reducer function
  const nurbekReducer = (state, action) => {
    switch (action.type) {
      case "delete":
        return state.filter((value) => value.id !== action.payload.id);
      case "create":
        return [...state, { id: state.length + 1, name: name }];
      case "search":
        return mock.filter((value) =>
          value.name.toLowerCase().includes(action.payload.text.toLowerCase())
        );
    }
  };
  // reducer
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(nurbekReducer, mock);
  console.log(name);
  return (
    <div className="App">
      <input placeholder="add ..." onChange={(e) => setName(e.target.value)} />
      <button onClick={() => dispatch({ type: "create" })}>save</button>
      <input
        type="text"
        placeholder="search"
        onChange={(e) =>
          dispatch({ type: "search", payload: { text: e.target.value } })
        }
      />
      <table border={1}>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {state.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.status}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch({ type: "delete", payload: { id: value.id } })
                    }
                  >
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AppTwo/>
    </div>
  );
}

export default App;
