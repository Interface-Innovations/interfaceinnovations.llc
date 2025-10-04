import { Target, Shield, Headphones, Mail, LifeBuoy, ArrowRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Interface Innovations
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            We design and ship modern mobile and web applications that solve real problems for real people.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className="btn bg-brand-600 text-white border-brand-600 hover:bg-brand-700 hover:border-brand-700 px-8 py-3 text-lg group"
            >
              <Mail size={20} className="mr-2" />
              Get in Touch
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="/support" 
              className="btn px-8 py-3 text-lg hover:border-brand-600 dark:hover:border-brand-400 group"
            >
              <LifeBuoy size={20} className="mr-2" />
              Support
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What We Do</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 hover:border-brand-200 dark:hover:border-brand-900">
            <div className="mb-4 text-brand-600 dark:text-brand-400">
              <Target size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Focused</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Small team, big impact. We ship pragmatic solutions fast without compromising on quality.
            </p>
          </div>
          <div className="card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 hover:border-brand-200 dark:hover:border-brand-900">
            <div className="mb-4 text-brand-600 dark:text-brand-400">
              <Shield size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Privacy-first design with strong data protection practices. Your data stays yours.
            </p>
          </div>
          <div className="card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900 hover:border-brand-200 dark:hover:border-brand-900">
            <div className="mb-4 text-brand-600 dark:text-brand-400">
              <Headphones size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Supportive</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We stand behind our products with straightforward, responsive support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-600 dark:text-brand-400">
                <LifeBuoy size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">Support</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Need help with one of our apps? We&apos;re here to help.
            </p>
            <div className="space-y-3 text-sm mb-6">
              <p><strong className="text-neutral-900 dark:text-neutral-100">Email:</strong> <a className="link" href="mailto:support@interfaceinnovations.llc">support@interfaceinnovations.llc</a></p>
              <p><strong className="text-neutral-900 dark:text-neutral-100">Hours:</strong> Mon–Fri, 9am–5pm CT</p>
              <p><strong className="text-neutral-900 dark:text-neutral-100">Response Time:</strong> Within 1 business day</p>
            </div>
            <a href="/support" className="btn inline-flex group hover:bg-neutral-50 dark:hover:bg-neutral-900">
              Full Support Page
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          <div className="card hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-neutral-50 dark:from-neutral-950 dark:to-neutral-900">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-brand-600 dark:text-brand-400">
                <Mail size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold">Business Inquiries</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Interested in working with us? Let&apos;s talk.
            </p>
            <div className="space-y-3 text-sm mb-6">
              <p><strong className="text-neutral-900 dark:text-neutral-100">Email:</strong> <a className="link" href="mailto:hello@interfaceinnovations.llc">hello@interfaceinnovations.llc</a></p>
            </div>
            <div className="pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <a href="/privacy" className="link">Privacy Policy</a> • <a href="/terms" className="link">Terms</a> • <a href="/delete-account" className="link">Delete Account</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

