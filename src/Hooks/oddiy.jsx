import React, { useState, useEffect } from "react";

const Oddiy = () => {
  const [count, setCount] = useState(0);

  //  useEffect(()=>{
  //      document.title=`siz ${count} marta bozdinggiz!`
  //  })

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((Response) => Response.json())
      .then((json) => console.log(json));
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>

      <button onClick={() => setCount(count + 1)}>+</button>
      <span>{count}</span>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default Oddiy;
