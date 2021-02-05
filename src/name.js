import React, { useState } from "react";
const Name = () => {
  const [name, setName] = useState("");
  return (
    <div>
      <h1>Hello {name}</h1>
      <input onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default Name;
