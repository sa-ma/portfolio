export default function NotFound() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Oh no! This page doesn't exist.
      </h1>
      <p>
        If you expected to see something here,{' '}
        <a href="mailto:samailabalap@gmail.com" className="underline hover:text-neutral-600 dark:hover:text-neutral-300">
          let me know
        </a>.
      </p>
    </section>
  );
}
