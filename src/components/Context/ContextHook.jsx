import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

// organise states and props with createcontext
export const AppContext = createContext(null);

function ContextHook() {
  const [username, setUsername] = useState("");
  
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextHook;