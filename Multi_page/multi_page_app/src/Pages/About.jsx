import { Link } from "react-router-dom";

function About() {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold text-purple-600">About This App</h1>
      <p className="text-gray-700">This is a multi-page React app using React Router and Tailwind CSS.</p>
      <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded">Back to Home</Link>
    </div>
  );
}

export default About;
