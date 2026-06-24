import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background px-12 py-24 text-on-background">
      <div className="mx-auto max-w-3xl rounded-lg border border-outline-variant/30 bg-surface-container-low p-10">
        <p className="font-label text-sm uppercase tracking-[0.3em] text-primary">404 / Signal Lost</p>
        <h1 className="mt-4 font-headline text-5xl font-black uppercase tracking-tight text-on-background">
          Page Not Found
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-on-surface-variant">
          The requested route is not available yet. Return to the Iron Tigers homepage to continue exploring the site.
        </p>
        <Link
          className="technical-gradient mt-8 inline-flex rounded px-8 py-4 font-headline font-bold uppercase tracking-widest text-on-primary-container transition-opacity hover:opacity-90"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
