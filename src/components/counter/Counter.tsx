import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState<number | null>(0);
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count! + 1)}>Increment</button>
      <input
        type="number"
        name="amout"
        value={amount}
        onChange={({ target }) => setAmount(parseInt(target.value))}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
}
