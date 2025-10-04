import { FileText, ShieldCheck, FileCode, AlertTriangle, Mail } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
          <FileText size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
      </div>

      {/* Introduction */}
      <div className="card mb-8 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <p className="text-lg leading-relaxed">
          Welcome to Interface Innovations LLC. By using our apps or website, you agree to these terms.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <ShieldCheck size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Use of Services</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                You agree to use our services lawfully and not to abuse, disrupt, or reverse engineer them.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <FileCode size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Content & Licenses</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                App content is provided under applicable licenses; some components may be open source with their own licenses.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <AlertTriangle size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Warranty & Liability</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Services are provided &quot;as is&quot; without warranties. To the fullest extent permitted by law, our liability is limited.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow border-2 border-brand-200 dark:border-brand-900 bg-white dark:bg-neutral-950">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Mail size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3 text-neutral-900 dark:text-neutral-100">Contact</h2>
              <p className="text-neutral-800 dark:text-neutral-200 leading-relaxed">
                Questions? <a href="mailto:legal@interfaceinnovations.llc" className="link font-semibold">legal@interfaceinnovations.llc</a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

