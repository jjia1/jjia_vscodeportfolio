import { pdfjs, Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
const myResume = './Resume.pdf';

const AboutPage = () => {
  return (
    <>
      <h3>About Me</h3><br/>
      <ul>
        <li><span role="img" aria-label="book">📖</span> Data Analyst @ <a href='http://liuzlab.org/members/'>Baylor College of Medicine</a>.</li>
        <li><span role="img" aria-label="graduate-hat">🎓</span> Conducting research on <b>AI</b>, <b>Bioinformatics</b>, <b>Multiomics like scRNAseq</b> , and <b>Other bioinformatic topics</b> @ <a href='https://github.com/zhandong'>Zhandong Liu Lab Lab</a>.</li>
        <li><span role="img" aria-label="laptop">💻</span> Currently developing new methods for utilizing omics data and deep learning for improving patient disease diagnosis </li>
      </ul>
      <br/>
      <center>
        <h3>Resume (<a href={myResume} download="JohnathanJia-Resume.pdf">Download</a>)</h3>
        <br />
        <Document file={myResume}>
          <Page pageIndex={0} renderMode="svg"/>
          <Page pageIndex={1} renderMode="svg"/>
        </Document>
      </center>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
