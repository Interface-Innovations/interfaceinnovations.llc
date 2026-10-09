import { Target, Shield, Headphones, Mail, LifeBuoy, ArrowRight } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: "Focused",
    body: "Small team, big impact. We ship pragmatic solutions fast without compromising on quality.",
  },
  {
    icon: Shield,
    title: "Secure",
    body: "Privacy-first design with strong data protection practices. Your data stays yours.",
  },
  {
    icon: Headphones,
    title: "Supportive",
    body: "We stand behind our products with straightforward, responsive support.",
  },
];

export default function Page() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-[75dvh] flex flex-col justify-center scroll-mt-16">
        <div className="max-w-3xl">
          <p className="eyebrow">Mobile &amp; Web Applications</p>
          <h1 className="mt-6 text-5xl md:text-7xl leading-[1.05]">
            Interface Innovations
          </h1>
          <div className="mt-8 h-px w-16 bg-neutral-300 dark:bg-neutral-700" aria-hidden="true" />
          <p className="mt-8 text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl">
            We design and ship modern mobile and web applications that solve real problems for real people.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary group">
              Get in Touch
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
            <a href="/support" className="btn">
              Support
            </a>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="about" className="py-20 border-t border-neutral-200 dark:border-neutral-800 scroll-mt-16">
        <p className="eyebrow">About</p>
        <h2 className="mt-4 text-4xl md:text-5xl mb-14">What We Do</h2>
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title}>
              <Icon size={22} strokeWidth={1.5} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl font-medium">{title}</h3>
              <p className="mt-3 text-neutral-600 dark:text-neutral-400 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-neutral-200 dark:border-neutral-800 scroll-mt-16">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-4 text-4xl md:text-5xl mb-12">Get in Touch</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <LifeBuoy size={20} strokeWidth={1.5} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-medium">Support</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Need help with one of our apps? We&apos;re here to help.
            </p>
            <dl className="space-y-3 text-sm mb-8">
              <div><dt className="inline font-medium text-neutral-900 dark:text-neutral-100">Email: </dt><dd className="inline"><a className="link" href="mailto:support@interfaceinnovations.llc">support@interfaceinnovations.llc</a></dd></div>
              <div><dt className="inline font-medium text-neutral-900 dark:text-neutral-100">Hours: </dt><dd className="inline">Mon–Fri, 9am–5pm CT</dd></div>
              <div><dt className="inline font-medium text-neutral-900 dark:text-neutral-100">Response Time: </dt><dd className="inline">Within 1 business day</dd></div>
            </dl>
            <a href="/support" className="btn group mt-auto self-start">
              Full Support Page
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
            </a>
          </div>

          <div className="card flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <Mail size={20} strokeWidth={1.5} className="text-neutral-400 dark:text-neutral-500" aria-hidden="true" />
              <h3 className="font-serif text-2xl font-medium">Business Inquiries</h3>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">
              Interested in working with us? Let&apos;s talk.
            </p>
            <dl className="space-y-3 text-sm mb-8">
              <div><dt className="inline font-medium text-neutral-900 dark:text-neutral-100">Email: </dt><dd className="inline"><a className="link" href="mailto:hello@interfaceinnovations.llc">hello@interfaceinnovations.llc</a></dd></div>
            </dl>
            <div className="mt-auto pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                <a href="/privacy" className="link">Privacy Policy</a> · <a href="/terms" className="link">Terms</a> · <a href="/delete-account" className="link">Delete Account</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
