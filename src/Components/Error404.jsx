import { Link } from 'react-router-dom';
import { FaRegFrown } from 'react-icons/fa';

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center bg-[rgb(15,23,42)] text-white shadow-xl rounded-lg p-8 max-w-md w-full">
        
        <div className="flex justify-center mb-4">
          <FaRegFrown className="text-6xl" />
        </div>

        <h1 className="text-3xl font-extrabold mb-4">Oops, this page doesn't exist!</h1>

        <Link
          to="/"
          className="bg-[rgb(35, 45, 72)] text-white py-3 px-8 rounded-md text-xl border-2 border-[rgb(35, 45, 72)] hover:bg-[rgb(25, 35, 58)] transition duration-300 ease-in-out"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Error404;
