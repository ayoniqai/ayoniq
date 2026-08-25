import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-[60vh] flex-col items-center justify-center gap-6 text-center px-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-heading text-6xl font-bold">404</h2>
        <p className="text-xl font-medium text-muted">Page not found</p>
      </div>
      <p className="text-muted-foreground max-w-[500px]">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Return Home
      </Link>
    </div>
  );
}
