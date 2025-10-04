export default function SupportPage() {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Support</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Need help? We&apos;re here to assist you.
        </p>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Email</p>
            <a className="link text-lg" href="mailto:support@interfaceinnovations.llc">
              support@interfaceinnovations.llc
            </a>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400">Business Hours</p>
            <p className="text-lg">Monday – Friday, 9am – 5pm CT</p>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-800">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            ⏱️ We typically respond within 1 business day
          </p>
        </div>
      </div>
    </section>
  );
}

