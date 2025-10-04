export function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-200/70 dark:border-neutral-800">
      <div className="container py-8 text-sm text-neutral-500">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Interface Innovations LLC. All rights reserved.</p>
          <p>
            <a className="link" href="/terms">Terms</a>
            <span className="mx-2">•</span>
            <a className="link" href="/privacy">Privacy</a>
          </p>
        </div>
        <p className="mt-4">Contact: <a className="link" href="mailto:support@interfaceinnovations.llc">support@interfaceinnovations.llc</a></p>
      </div>
    </footer>
  );
}

