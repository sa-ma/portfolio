import BlogLink from './components/blog-link';
import ArrowIcon from './components/icons/arrow-icon';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hi, I'm Samaila 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I’m a skilled Frontend Developer, React Native Developer, and Technical
        writer with extensive experience in creating responsive and user-centric
        web applications. I currently work at{' '}
        <a
          href="https://gandalf.network"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gandalf
        </a>{' '}
        where I am responsible for the frontend and mobile development of
        innovative products, focusing on empowering users and enhancing their
        experiences.
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-4">
        Over the past few years, I have had the opportunity to write technical
        articles for{' '}
        <a
          href="https://blog.openreplay.com/authors/samaila-bala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Replay
        </a>{' '}
        and{' '}
        <a
          href="https://blog.logrocket.com/author/samailabala/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LogRocket
        </a>
        , two well-respected platforms in the tech community. My work has
        involved creating in-depth, informative content that covers a wide range
        of topics related to frontend development, best practices, and emerging
        technologies.
      </p>

      <p className="prose prose-neutral dark:prose-invert mt-4">
        These articles have not only helped readers understand complex concepts
        more easily but have also allowed me to share my expertise and
        contribute to the broader developer community. Writing for these
        platforms has honed my ability to communicate technical information
        clearly and effectively, making complex subjects accessible to a diverse
        audience of readers.
      </p>

      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="Implementing Authentication In Remix Applications With Supabase"
          slug="remix-supabase"
        />
        <BlogLink
          name="3 React Component Design Patterns You Should Know About"
          slug="react-component-design-patterns"
        />
        <BlogLink
          name="Keeping Your TypeScript Code DRY With Generics"
          slug="typescript-generics"
        />
      </div>

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com/in/samabalap"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedIn</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/samabalap"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">gitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:samailabalap@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">email</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
