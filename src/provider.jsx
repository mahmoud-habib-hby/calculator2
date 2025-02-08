import React, { useEffect, useState } from "react";
export const Cal = React.createContext();

export function TttextProvider({ children }) {
  const [value, setvalue] = useState([]);
  const [result, setresult] = useState();
  const [joiin, setjoiin] = useState("");
  const calculater = () => {
    setjoiin(value.join(""));
    setresult(eval(joiin));
  };

  return (
    <Cal.Provider
      value={{ calculater, setresult, value, setvalue, result, joiin, setjoiin }}
    >
      {children}
    </Cal.Provider>
  );
}
