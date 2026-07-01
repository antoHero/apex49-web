import Link from "next/link";

export default function NotFound() {
  return (
    <main className="font-satoshi flex min-h-screen flex-col items-center justify-center bg-black px-6 text-white">
      <p className="font-mono text-sm tracking-[0.3em] text-white/40">
        ERROR
      </p>

      <h1 className="mt-4 text-[clamp(5rem,18vw,11rem)] font-bold leading-none tracking-tight">
        404
      </h1>

      <p className="mt-6 max-w-md text-center text-base text-white/60">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>

      <Link
        href="/"
        className="flex items-center justify-center mt-10 border border-white h-[44px] px-4 text-sm font-medium rounded-[6px] tracking-wide transition-colors hover:bg-white hover:text-black"
      >
        Back to home
      </Link>
    </main>
  );
}