export default function DeleteAccountPage() {
  return (
    <section className="max-w-3xl mx-auto py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Account & Data Deletion</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-300">
          Instructions for deleting your account and associated data.
        </p>
      </div>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-xl font-semibold mb-4">In-App Deletion</h2>
          <p className="text-neutral-600 dark:text-neutral-300">
            If your app account supports deletion in-app, use the in-app setting:
          </p>
          <p className="mt-2 font-mono text-sm bg-neutral-100 dark:bg-neutral-900 p-3 rounded-lg">
            Settings → Delete Account
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-semibold mb-4">Request Deletion via Email</h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            If you cannot access the app or need to request deletion via email, contact us at:
          </p>
          <a 
            className="link text-lg inline-block mb-4" 
            href="mailto:privacy@interfaceinnovations.llc?subject=Account%20Deletion%20Request"
          >
            privacy@interfaceinnovations.llc
          </a>
          <div className="bg-neutral-50 dark:bg-neutral-900/50 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800">
            <p className="font-medium mb-2">Please include:</p>
            <ul className="list-disc list-inside space-y-1 text-sm text-neutral-600 dark:text-neutral-400">
              <li>The app name</li>
              <li>The email tied to your account</li>
              <li>Any relevant user IDs</li>
            </ul>
          </div>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            We&apos;ll verify your request and delete associated personal data within <strong>30 days</strong> unless retention is required by law.
          </p>
        </div>
      </div>
    </section>
  );
}

