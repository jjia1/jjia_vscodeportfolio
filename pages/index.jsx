import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>MLOps</h1>
          <h2>Data
            Science</h2>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Johnathan Jia</h1>
            <h6 className={styles.bio}>AI Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>Skill Set</h4>
                  <div className={styles.tags}>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      Data Science
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      Data Analytics
                    </span>
                    <span key='MLOps' className='MLOps'>
                      MLOps
                    </span>
                    <span key='Bash' className='Bash'>
                    BASH
                    </span> 
                    <span key='Python' className='Python'>
                      Python
                    </span>
                    <span key='R' className='R'>
                      R
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      PyTorch
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      Tensorflow
                    </span>
                    <span key='Machine-Learning' className='Machine-Learning'>
                    ML/DL
                    </span>
                    <span key='LLM' className='LLM'>
                      LLMs
                    </span>
                    <span key='RAG' className='RAG'>
                      RAG
                    </span>
                    <span key='FM' className='FM'>
                      FMs
                    </span>
                    <span key='multiOmics' className='multiOmics'>
                    Omics
                    </span>
                    <span key='Container' className='Container'>
                    Docker
                    </span>
                     <span key='Container' className='Container'>
                    Singularity 
                    </span>
                    <span key='Research' className='Research'>
                      Research
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>About Me</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>Contact</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/me.jpg"
                width={300}
                height={290}
                alt="Johnathan's Picture"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
