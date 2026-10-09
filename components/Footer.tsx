export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200 dark:border-neutral-800">
      <div className="container py-10 text-sm text-neutral-500 dark:text-neutral-400">
        <p className="font-serif text-xl font-medium text-neutral-900 dark:text-neutral-100">Interface Innovations</p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interface Innovations LLC. All rights reserved.</p>
          <p>
            <a className="link" href="/terms">Terms</a>
            <span className="mx-2" aria-hidden="true">·</span>
            <a className="link" href="/privacy">Privacy</a>
          </p>
        </div>
        <p className="mt-2">Contact: <a className="link" href="mailto:support@interfaceinnovations.llc">support@interfaceinnovations.llc</a></p>
      </div>
    </footer>
  );
}
