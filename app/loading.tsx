import React from "react";
import LoadingSpinner from "./components/LoadingSpinner";

const loading = () => {
  return (
    <div className="flex items-center justify-center text-7xl">
      <LoadingSpinner />
    </div>
  );
};

export default loading;
