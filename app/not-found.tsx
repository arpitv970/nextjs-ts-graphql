import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-[90vh] items-center justify-center bg-gray-100 rounded-3xl">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-3xl font-bold mt-4">Page Not Found 😕</p>
        <p className="mt-2 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
