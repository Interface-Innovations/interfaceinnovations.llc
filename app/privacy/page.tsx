import { Database, Lock, Share2, Clock, Shield, Baby, Globe, FileEdit, Mail, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center text-brand-600 dark:text-brand-400 mb-6">
          <Shield size={48} strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          <strong>Last updated:</strong> October 4, 2025
        </p>
      </div>

      {/* Introduction */}
      <div className="card mb-8 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
        <p className="text-lg leading-relaxed">
          Interface Innovations LLC (&quot;we&quot;, &quot;us&quot;) builds mobile and web apps. This policy describes how we handle information across our products and websites.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6">
        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Database size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span><strong>Account data</strong> (e.g., name, email) if you create an account in an app.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span><strong>Usage data</strong> (diagnostics, device info) to improve stability and performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span><strong>Support data</strong> that you send us via email or forms.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <FileEdit size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Provide, maintain, and improve our apps and services.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Respond to support requests and communicate important updates.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Comply with legal obligations and prevent abuse.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Share2 size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Data Sharing</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We do not sell personal data. We may share data with service providers (e.g., cloud hosting, analytics) under contracts that require appropriate safeguards.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Clock size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Retention</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We retain data for as long as needed to provide the service and meet legal obligations. You can request deletion as described below.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Lock size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
              <ul className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Access, correct, or delete your data.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Opt out of non‑essential analytics where applicable.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-600 dark:text-brand-400 mt-1">•</span>
                  <span>Appeal decisions or contact us with questions at <a href="mailto:privacy@interfaceinnovations.llc" className="link">privacy@interfaceinnovations.llc</a>.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Baby size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Children</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Our apps&apos; age suitability is stated on their store listings. If we learn we collected personal information from a child without proper consent, we will delete it.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <Globe size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">International Transfers</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We may process data outside your country. We use safeguards such as contractual clauses where required.
              </p>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <div className="text-brand-600 dark:text-brand-400 flex-shrink-0 mt-1">
              <FileEdit size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Changes</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                We may update this policy. Material changes will be noted by updating the date above.
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
              <div className="space-y-2 text-neutral-800 dark:text-neutral-200">
                <p><strong className="text-neutral-900 dark:text-neutral-100">Email:</strong> <a href="mailto:privacy@interfaceinnovations.llc" className="link">privacy@interfaceinnovations.llc</a></p>
                <p><strong className="text-neutral-900 dark:text-neutral-100">Support:</strong> <a href="mailto:support@interfaceinnovations.llc" className="link">support@interfaceinnovations.llc</a></p>
              </div>
            </div>
          </div>
        </section>

        <section className="card hover:shadow-lg transition-shadow border-dashed">
          <div className="flex items-start gap-4">
            <div className="text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-1">
              <FileText size={28} strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">App‑Specific Policies</h2>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Some apps may have additional terms or permissions. See the app&apos;s page on this site for details.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

