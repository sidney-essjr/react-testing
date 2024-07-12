import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: { name: string }[]) =>
        setUsers(data.map((user) => user.name)),
      )
      .catch(() => setError("Error fetching users"));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map((user, key) => (
          <li key={key}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
