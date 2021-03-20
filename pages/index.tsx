import Head from 'next/head';
import Layout from '../components/layout';
import TypewriterWrapper from '../components/typewriterWrapper';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Samaila Bala: Software Engineer and Technical Writer</title>
      </Head>

      <main>
        <div>
          <h1 className="text-2xl mt-24 font-bold text-black dark:text-gray-300">
            <TypewriterWrapper />
          </h1>
          <p className="leading-6 max-w-md text-base font-normal text-black dark:text-gray-300 ">
            I build applications that work on the web and mobile. I also write
            articles on web and mobile technologies.
          </p>
        </div>
      </main>
    </Layout>
  );
}
