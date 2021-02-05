import React, { useState } from "react";
const Name = () => {
  const [name, setName] = useState("Raj");
  return (
    <div>
      {name === "Adarsh" ? (
        <h1>Hello {name} Raj </h1>
      ) : (
        <h1>Hello Mr {name}</h1>
      )}

      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Name;
