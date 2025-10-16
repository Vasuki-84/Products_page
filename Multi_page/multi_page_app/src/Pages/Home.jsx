import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center space-y-4 mt-10">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the App</h1>
      <p className="text-lg text-gray-700">Navigate through the pages to explore users and more.</p>
      <div className="space-x-4">
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded">Go to About</Link>
        <Link to="/users" className="bg-green-500 text-white px-4 py-2 rounded">Go to Users</Link>
      </div>
    </div>
  );
}

export default Home;
