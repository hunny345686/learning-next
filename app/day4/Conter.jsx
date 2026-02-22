"use client";
import { useState } from "react";

// This will not work here
// export const metadata = {
//     title: "Learing Metadata",
//     description: "Learing Metadata to change the matadata at page level",
// }
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h2>About MataData in Clien Component</h2>
      <p>{counter}</p>
    </div>
  );
};

export default Counter;
