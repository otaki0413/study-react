import Link from "next/link";
import { useFetchArray } from "src/hooks/useFetchArray";
import { API_URL } from "src/utils/const";

export const UserList = () => {
  const { data, error, isLoading, isEmpty } = useFetchArray(`${API_URL}/users`);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  if (isEmpty) {
    return <p>No users found...</p>;
  }

  return (
    <ul className="grid grid-cols-2 gap-6">
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link
              className="block p-4 shadow-md rounded hover:bg-gray-100"
              href={`/users/${user.id}`}
            >
              <h1 className="text-xl font-bold truncate">{user.name}</h1>
              <div className="text-lg truncate">{user.email}</div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
