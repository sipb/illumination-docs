import type { NextPage } from 'next';
import { google } from 'googleapis';
import Link from 'next/link';

import styles from '../styles/Home.module.scss';
import GoogleParser from '../components/GoogleParser';

export async function getStaticProps() {
  const documentId = '1S2gIcxddk0iilI6K54nibhUT5H8SeIaD9JIrEwQJiSs';
  const client = new google.auth.JWT({
    email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    scopes: ['https://www.googleapis.com/auth/documents'],
    key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
  });

  await client.authorize();

  const gsapi = google.docs({ version: 'v1', auth: client });
  const opt = {
    documentId,
  };

  const data = await gsapi.documents.get(opt);
  return {
    props: {
      data: data.data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5, // In seconds
  };
}

const Home: NextPage = ({ data }: any) => {
  return (
    <>
      <div className={styles.buttonContainer}>
        <Link href="/chapter/hello">
          <div className={styles.button}>
            Check out the Illuminations Learning Resource Here! <br />
            (Work in Progress)
          </div>
        </Link>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="https://www.dropbox.com/request/zvW4TiF1oiqb3mv9z9ND">
          <div className={styles.button}>Write-up Submission</div>
        </Link>
      </div>
      <div className={styles.centerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.circleContainer}>
            <div className={styles.circle} />
          </div>
          <div className={styles.textContent}>
            <h1>
              <strong>6.A01 · ILLUMINATIONS</strong> SEMINAR
            </h1>
            <p className={'dem'}>
              contact:{' '}
              <a href="mailto:illuminations-staff@mit.edu">
                illuminations-staff@mit.edu
              </a>
            </p>
            <p>
              Hello! The Fall 2022 MIT Illuminations Seminar is a first-year,
              3-unit seminar designed to introduce students to the basics of
              electronics and lighting through hands-on experimentation and
              integration with the context of a dynamic light installation at
              the MIT Welcome Center called{' '}
              <a href="https://illuminations.mit.edu">MIT Illuminations</a>.
            </p>
            <p>
              During the semester, this website will contain information
              relevant to the class, including lecture notes & additional
              resources. As the semester wraps up, items here will be archived
              as open-source learning material for those who wish to contribute
              to the MIT Welcome Center!
            </p>
            <p>
              <span className={'dem'}>Lead Advisor:</span> Chris Peterson{' '}
              <a href="mailto:petey@mit.edu">petey@mit.edu</a>
              <br />
              <span className={'dem'}>Lead Instructor:</span> Victor Hung{' '}
              <a href="mailto:vhung@mit.edu">vhung@mit.edu</a>
            </p>
            <GoogleParser rawData={data} />
            <h2 className="blue">Lecture Notes</h2>
            <ul className="slides-list">
              <li>
                Hello and Welcome!
                <Link href="/slides/slides1.pdf">
                  <div className="resource-button">Slides</div>
                </Link>
              </li>
              <li>
                Electronics 101
                <Link href="/slides/slides2.pdf">
                  <div className="resource-button">Slides</div>
                </Link>
              </li>
              <li>
                <div>LED Arrays & WS2812B</div>
                <div className="no-wrap">
                  <Link href="/handouts/handout3.pdf">
                    <div className="resource-button">Handout</div>
                  </Link>
                  <Link href="/slides/slides3.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>Arduino Communication</div>
                <div className="no-wrap">
                  <Link href="https://docs.google.com/document/d/1fKwelZp6m6lmYmVyhJrSoUUHCThntiso6fvIo4sDTn8/edit?usp=sharing">
                    <div className="resource-button">Handout</div>
                  </Link>
                  <Link href="/slides/slides4.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>This Time with Feeling</div>
                <div className="no-wrap">
                  <Link href="https://docs.google.com/document/d/1F-bwqSela4taOxqhqnhU6WC122cONZ2tgXrz2-z0w3g">
                    <div className="resource-button">Final Project</div>
                  </Link>
                  <Link href="/slides/slides5.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>Final Project & SOSO</div>
                <div className="no-wrap actually-wrap">
                  <Link href="https://illuminations.mit.edu/">
                    <div className="resource-button">Download Software</div>
                  </Link>
                  <Link href="/slides/slides6.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                  <Link href="/slides/soso1.pdf">
                    <div className="resource-button">SOSO Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>Emotional Design & SOSO</div>
                <div className="no-wrap">
                  <Link href="/slides/slides7.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                  <Link href="/slides/soso2.pdf">
                    <div className="resource-button">SOSO Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>Principles of Light & Diffusers</div>
                <div className="no-wrap">
                  <Link href="/slides/slides8.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>Inputs & Making it Dynamic</div>
                <div className="no-wrap">
                  <Link href="/slides/slides9.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
              <li>
                <div>GitHub & Law Clinic</div>
                <div className="no-wrap">
                  <Link href="/slides/slides10.pdf">
                    <div className="resource-button">Slides</div>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
