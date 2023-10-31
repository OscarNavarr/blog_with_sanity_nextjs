
import client_sanity from '../lib/client';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 

import { getSortedPostsData } from '../lib/posts';

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData();

  const query = `*[_type == "publication"]`;

  const publications = await client_sanity.fetch(query);

  return {
    props: {
      allPostsData,
      publications,
    },
  };
}


export default function Home({ allPostsData, publications }) {

  console.log(publications[0]);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{
          publications[0] ? publications[0].autor : "no hay publicaciones"
        }</p>
        
        {
          publications[0] ? <p>{publications[0].title}</p> : <p>no hay publicaciones</p>
        }
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

