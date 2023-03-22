import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <main>
        <div className="flex flex-col items-center justify-center">
          <p className="text-6xl font-semibold text-blue-500">404</p>
          <p className="mt-2 text-lg">Oops! Page not found!</p>
          <p className="text-xs">The page you requested was not found</p>
          <Link to="/">
            <button class=" outline-none focus:outline-none shadow text-slate-50 duration-200 transition ease-in-out hover:bg-blue-600 bg-blue-500 rounded-xl mt-8 px-8 py-2">Back to Home</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default NotFound;
