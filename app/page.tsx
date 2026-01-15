export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-medium text-2xl tracking-tighter">
          Samaila Bala
        </h1>
        <a
          href="/resume.pdf"
          className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 link-animated"
        >
          Resume
        </a>
      </div>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8">
        I ship products for humans: web, mobile, and everything in between.
      </p>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      {/* Career */}
      <h2 className="font-medium text-lg mb-4 tracking-tighter">Career</h2>
      <ul className="space-y-2 mb-8">
        <li>
          <a
            href="https://rulebase.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-animated"
          >
            Rulebase
          </a>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— The AI agent built for back-office operations at Financial Services
          </span>
        </li>
        <li>
          <a
            href="https://gandalf.network/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-animated"
          >
            Gandalf
          </a>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— We build secure, custom integrations that pull user data from sources without public APIs directly into your application.
          </span>
        </li>
        <li>
          <span className="font-medium">Helicarrier</span>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— Crypto infrastructure for Africa
          </span>
        </li>
        <li>
          <a
            href="https://venco.africa/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-animated"
          >
            Venco
          </a>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— Manage your Residential Community Easily and Efficiently
          </span>
        </li>
      </ul>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      {/* Other Projects */}
      <h2 className="font-medium text-lg mb-4 tracking-tighter">Other projects</h2>
      <ul className="space-y-2 mb-8">
        <li>
          <a
            href="https://www.yara.cash/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-animated"
          >
            Yara
          </a>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— Send money to Nigeria and across Africa
          </span>
        </li>
        <li>
          <a
            href="https://fablepod.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium link-animated"
          >
            Fable
          </a>
          <span className="text-neutral-600 dark:text-neutral-400">
            {' '}— Documents to podcasts
          </span>
        </li>
      </ul>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      {/* Writing */}
      <h2 className="font-medium text-lg mb-4 tracking-tighter">Writing</h2>
      <ul className="space-y-2 mb-8">
        <li>
          <a
            href="https://blog.openreplay.com/implementing-authentication-in-remix-applications-with-supabase/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated"
          >
            Implementing Authentication In Remix Applications With Supabase
          </a>
        </li>
        <li>
          <a
            href="https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated"
          >
            3 React Component Design Patterns You Should Know About
          </a>
        </li>
        <li>
          <a
            href="https://blog.openreplay.com/keeping-your-typescript-code-dry-with-generics"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated"
          >
            Keeping Your TypeScript Code DRY With Generics
          </a>
        </li>
      </ul>

      <hr className="my-6 border-neutral-200 dark:border-neutral-800" />

      {/* Contact */}
      <h2 className="font-medium text-lg mb-4 tracking-tighter">Contact</h2>
      <ul className="flex flex-wrap gap-4">
        <li>
          <a
            href="mailto:samailabalap@gmail.com"
            className="link-animated"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com/in/samabalap"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/samabalap"
            target="_blank"
            rel="noopener noreferrer"
            className="link-animated"
          >
            GitHub
          </a>
        </li>
      </ul>
    </section>
  );
}
