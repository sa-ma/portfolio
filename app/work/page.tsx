import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'A summary of my work and contributions.',
};

export default function WorkPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl tracking-tighter my-0">Gandalf</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Founding Engineer
        </p>
        <p>
          I joined{' '}
          <a
            href="https://gandalf.network"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gandalf
          </a>{' '}
          to build a token-gating app for web2 creators using web3 technologies,
          allowing me to work with cutting-edge tools in the web3 space. A major
          highlight was setting up an end-to-end testing infrastructure with
          Cypress in Next.js, which was particularly challenging due to the
          differences in authentication between web3 and web2. This success
          brought a measure of quality to our product, and it was rewarding to
          see how creators used the app and to apply their feedback.
        </p>
        <p>
          After a year, we pivoted to developing Gandalf Network, a platform for
          secure data requests from users, which has been an exciting challenge
          involving various emerging technologies. Currently, I help build{' '}
          <a
            href="https://developer.apple.com/app-clips/"
            target="_blank"
            rel="noopener noreferrer"
          >
            App Clips
          </a>{' '}
          and{' '}
          <a
            href="https://developer.android.com/topic/google-play-instant"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instant Apps
          </a>{' '}
          using React Native, maintain product pages with Next.js, and create
          helper libraries in JavaScript and Swift. These experiences have
          deepened my expertise in both web and mobile development. In the
          coming months, I plan to share my learnings in detail on my blog,
          offering insights into my journey and the technologies I’ve worked
          with.
        </p>

        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">
          Helicarrier
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2021 — 2022
        </p>
        <p>
          At{' '}
          <a
            href="https://helicarrier.studio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helicarrier
          </a>
          , I played a key role as a Frontend Engineer focusing on building
          highly responsive and dynamic web applications using Next.js, which
          served thousands of users. I collaborated closely with backend
          engineers to integrate GraphQL endpoints, ensuring smooth and
          efficient data flow across the platform.
        </p>
        <p>
          A major accomplishment during my time was majorly contributing the
          migration of the existing codebase from a custom Webpack setup and
          JavaScript to Next.js and TypeScript. This involved refactoring the
          build processes and modernizing the development stack, allowing us to
          leverage Next.js’s server-side rendering, static generation, and
          automatic code-splitting for improved performance. Migrating to
          TypeScript also provided better type safety, reduced errors, and
          improved collaboration within the development team, leading to more
          efficient development cycles. As a result, the application’s
          performance saw significant improvements, with faster load times and
          more seamless user interactions.
        </p>
        <p>
          My work on{' '}
          <a
            href="https://sendcash.africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sendcash
          </a>{' '}
          a cross-platform mobile app, built with React Native, significantly
          contributed to revenue growth. I also took the lead in revamping user
          metrics tracking across all products, providing actionable insights
          that enhanced user experience. Furthermore, I played a pivotal role in
          designing and implementing a design system that improved the speed of
          shipping new features by 40%
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Venco</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2020 — 2021
        </p>
        <p>
          As a Software Engineer at{' '}
          <a
            href="https://venco.africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            Venco
          </a>{' '}
          fka Manqala from January 2020 to March 2021, I focused on developing
          responsive web interfaces for a payment system using HTML, CSS, and
          JavaScript. I led the creation of a cross-platform mobile application
          with Expo and React Native, contributing to significant user growth
        </p>
        <p>
          I was responsible for deploying and maintaining client applications on
          AWS, ensuring stability and scalability. Additionally, I improved
          project documentation, which facilitated smoother knowledge transfer
          and onboarding processes
        </p>
      </div>
    </section>
  );
}
