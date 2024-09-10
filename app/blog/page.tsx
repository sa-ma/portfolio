import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development and more.',
};

export default function BlogPage() {
  let allBlogs = [
    {
      title: 'Build a Blockchain Explorer with Solana',
      url: 'https://blog.openreplay.com/build-a-blockchain-explorer-with-solana-and-next-js/',
      type: 'article',
      date: '09-03-2023',
    },
    {
      title: 'Working with SVGs in React Native',
      url: 'https://blog.openreplay.com/working-with-svgs-in-react-native/',
      type: 'article',
      date: '26-04-2022',
    },
    {
      title: 'Theming React Native Applications With Styled Components',
      url: 'https://blog.openreplay.com/implementing-authentication-in-remix-applications-with-supabase/',
      type: 'article',
      date: '23-03-2022',
    },
    {
      title: '3 React Component Design Patterns You Should Know About',
      url: 'https://blog.openreplay.com/3-react-component-design-patterns-you-should-know-about/',
      type: 'article',
      date: '22-06-2021',
    },
    {
      title: '3 Design Patterns In TypeScript For Frontend Developers',
      url: 'https://blog.openreplay.com/3-design-patterns-intypescript-for-frontend-developers/',
      type: 'article',
      date: '22-06-2021',
    },
    {
      title: 'Learn How Mapping Works In VueX',
      url: 'https://blog.openreplay.com/learn-how-mapping-works-in-vuex/',
      type: 'article',
      date: '24-05-2021',
    },
    {
      title: 'Keeping Your TypeScript Code DRY With Generics',
      url: 'https://blog.openreplay.com/keeping-your-typescript-code-dry-with-generics/',
      type: 'article',
      date: '11-05-2021',
    },
    {
      title: 'Keeping Your TypeScript Code DRY With Generics',
      url: 'https://blog.openreplay.com/keeping-your-typescript-code-dry-with-generics/',
      type: 'article',
      date: '11-05-2021',
    },
    {
      title: 'Data Fetching Techniques in React',
      url: 'https://blog.openreplay.com/data-fetching-techniques-react/',
      type: 'article',
      date: '13-04-2021',
    },
    {
      title: 'Vuex: State Management For Vue Projects',
      url: 'https://blog.openreplay.com/vuex-state-management-for-vue-projects/',
      type: 'article',
      date: '10-03-2021',
    },
    {
      title: 'Server Side Rendering (SSR) With React',
      url: 'https://blog.openreplay.com/server-side-rendering-ssr-with-react/',
      type: 'article',
      date: '25-02-2021',
    },
  ];

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allBlogs.map((post, index) => (
        <Link
          key={index}
          className={`flex items-center gap-1 space-y-1 mb-4 before:content-[""] before:bg-neutral-900 dark:before:bg-neutral-100 before:w-0 before:h-[1px] before:transition-width before:ease-in before:duration-200 hover:before:w-8`}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="w-full flex flex-col">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.title}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
