import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="mainerrordiv text-center py-12 px-6">
      <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!!</h1>
      <h2 className="text-lg text-gray-700 mb-4">
        Something went wrong. You can't access this page.
      </h2>
      <p className="text-sm text-gray-500">
        {err?.error?.message || "An unexpected error occurred."}
      </p>
    </div>
  );
};

export default Error;
