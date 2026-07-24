import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center bg-black">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#F20003]">
          404 Error
        </p>
        <h1 className="mt-4 text-5xl font-bold sm:text-6xl text-white">
          Page does not exist
        </h1>
        <p className="mt-4 text-base text-[#4D4D4D] sm:text-lg">
          The page you are looking for might have been removed, renamed, or
          never existed.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#F20003] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#c40002]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
