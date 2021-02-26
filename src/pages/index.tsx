import Head from 'next/head';
import { GetServerSideProps } from 'next'

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallanges } from "../components/CompletedChallanges";
import { CountDown } from "../components/CountDown";
import { ChallangeBox } from "../components/ChallangeBox";

import styles from '../styles/pages/Home.module.css';
import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallangesProvider } from '../contexts/ChallangesContext';

interface HomeProps {
  level: number;
  currentExperience: number;
  challangesCompleted: number;
}

export default function Home(props) {
  return (
    <ChallangesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challangesCompleted={props.challangesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
        </Head>

        <ExperienceBar />

        <CountDownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallanges />
              <CountDown />
            </div>
            <div>
              <ChallangeBox />
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallangesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challangesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challangesCompleted: Number(challangesCompleted),
    }
  }
}


