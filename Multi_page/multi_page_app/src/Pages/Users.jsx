import { Link } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com" }
];

function Users() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6">Users List</h1>
      <div className="space-y-4 flex justify-around gap-3 items-center flex-col">
        {users.map((user) => (
          <div key={user.id} className="p-4 border gap-x-5 rounded flex justify-between items-center">
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
            <Link
              to={`/users/${user.id}`}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
