import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <Link
          className="underline"
          href="/"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}