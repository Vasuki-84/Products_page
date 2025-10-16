import { useParams, useNavigate } from "react-router-dom";

const users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, name: "Sam Wilson", email: "sam@example.com" }
];

function UserDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === parseInt(id));

  return (
    <div className="text-center space-y-4">
      {user ? (
        <>
          <h1 className="text-3xl font-bold">{user.name}</h1>
          <p className="text-gray-700">{user.email}</p>
          <button
            onClick={() => navigate("/users")}
            className="bg-gray-700 text-white px-4 py-2 rounded"
          >
            Go Back
          </button>
        </>
      ) : (
        <h2 className="text-red-500">User not found</h2>
      )}
    </div>
  );
}

export default UserDetails;
