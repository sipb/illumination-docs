import { google } from 'googleapis';
import { promises as fs } from "fs";
import { parse } from "csv-parse";

import GuideImage from '../../components/GuideImage';
import PageNavigationButtons from '../../components/PageNavigationButtons';
import Sidebar from '../../components/Sidebar';

import styles from '../../styles/Guide.module.scss';

export async function getStaticProps() {
  const listFile = await fs.readFile("./data/shopping-list.csv", "utf-8");
  const data = listFile.split('\n').map(l => l.split(",").map(i => i.trim())).slice(1);

  return {
    props: {
      data,
    },
  };
}

const Page = ({ data }: any) => {
  return (
    <div className={styles.appWrapper}>
      <Sidebar />
      <div className={styles.guideContent}>
        <h1>Introduction to Arduino!</h1>
        <div className={styles.author}>
          By <a href="http://instagram.com/poofytoo">Victor Hung</a>
        </div>
        <div className={styles.learningGoals}>
          <h3>Goals of This Chapter</h3>
          <ul>
            <li>Obtain a basic understanding of microcontrollers</li>
            <li>Download the Arduino code editing software</li>
          </ul>
        </div>
        <h2>What is a Microcontroller?</h2>
        <p>
          The MIT Illuminations display is made up of hundreds of lights that
          need to be turned on, turned off, and have their colors adjusted.
          We'll want to control these lights programmatically, which means we'll
          need a small computer, running some sort of software, to vary the
          amount of power we deliver to each light.
        </p>
        <p>
          This is where a <strong>microcontroller</strong> comes in! A
          microcontroller is a small computer that has both input and output
          pins that can be controlled by software that you upload. So, for
          example, you can use code to analyze any information coming into the
          microcontroller or change the output power enough to, say, turn on and
          off a light.
        </p>
        <GuideImage
          src="/images/guide/arduino.jpeg"
          size="SMALL"
          caption="The Arduino Uno!"
        />
        <p>
          For this project, we're going to use the Arduino Uno. This is an
          extremely popular microcontroller designed for beginners and
          experienced prototypers alike in the maker community. You can. You can{' '}
          <a href="https://docs.arduino.cc/hardware/uno-rev3" target="_blank">
            learn more about it here!
          </a>
        </p>
        <p>
          Arduino also has a very extensive{' '}
          <a href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino">
            Getting Started guide,
          </a>{' '}
          which explains a lot of the principles of using microcontrollers in
          detail. The guide is lengthy, but we recommend taking a quick look and
          then keeping it at hand if you have questions later on!
        </p>
        <GuideImage
          src="/images/guide/arduino-in-action.jpg"
          size="SMALL"
          caption="An example of an Arduino in action - wired up to a few buttons and LEDs"
        />
        <h2 id="components">Following Along</h2>
        <p>
          There are a couple of components we recommend you obtain if you'd like
          to follow along with this guide and build your own blinky lights.
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.dataTable}>
            <thead>
              <tr>
                <th>Part</th>
                <th>Sourcing Link 1</th>
                <th>Sourcing Link 2</th>
              </tr>
              {data.map((row: any) => {
                return (
                  <tr key={row[0]}>
                    <td>{row[0]}</td>
                    <td>
                      <a href={row[2]} target="_blank">
                        {row[1]}
                      </a>
                    </td>
                    <td>
                      <a href={row[4]} target="_blank">
                        {row[3]}
                      </a>
                    </td>
                  </tr>
                );
              })}
            </thead>
          </table>
          <p>
            *This is the standard A-B USB cable used to connect your computer to
            an Arduino. If your computer has a USB C port, we recommend getting
            something like this{' '}
            <a href="https://www.amazon.com/Cable-Matters-Printer-USB-C-Black/dp/B00VKSF39O">
              USB B to C cable
            </a>{' '}
            so you can plug your Arduino into your computer directly without the
            use of an adapter.
          </p>
          <h2>The Arduino IDE</h2>
          <p>
            To write, edit, and upload software to our microcontroller, we'll be
            using an Arduino <strong>Integrated Development Environment</strong>
            , or <strong>IDE</strong>. An IDE is a program made for editing code
            files.{' '}
          </p>
          <p>
            Although code files are text files and could be edited in a
            text-editing program, an IDE usually includes many features that
            help make programming easier. The Arduino IDE will specifically help
            us write and upload code to Arduino microcontrollers, like the Uno.
          </p>
          <p>
            There are two versions of the Arduino IDE: a web-based version and a
            desktop version for Windows or Mac OS. We strongly recommend that
            you use the desktop version, since the board driver management is
            all contained within the desktop software. If you choose to use the
            web-based version, you will also need to use a separate plugin to
            manage the connection between the microcontroller and your computer.
            The plugin is sometimes a bit flaky.
          </p>
          <p>
            <a href="https://www.arduino.cc/en/software">
              Download the desktop version of the Arduino IDE here!
            </a>
          </p>
          <p>
            If you're looking for a bit more help downloading the IDE and
            getting started, you can take a look at{' '}
            <a
              href="https://docs.arduino.cc/software/ide-v2/tutorials/getting-started/ide-v2-downloading-and-installing"
              target="_blank"
            >
              this guide
            </a>
            .
          </p>
          <PageNavigationButtons />
        </div>
      </div>
    </div>
  );
};

export default Page;
