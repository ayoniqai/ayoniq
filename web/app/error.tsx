"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold">
        Something went wrong
      </h1>

      <p className="mt-4 text-zinc-400">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3"
      >
        Try Again
      </button>
    </div>
  );
}