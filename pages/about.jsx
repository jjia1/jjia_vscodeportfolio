import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const myResume = '/resume2024.pdf';

const AboutPage = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <h3>About Me</h3>
      <br />
      <ul>
        <li>
          <span role="img" aria-label="book">📖</span> Senior Data Analyst @ <a href='http://liuzlab.org/members/'>Baylor College of Medicine</a>.
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">🎓</span> Data analytics for <b>Deep-learning</b>, <b>Bioinformatics</b>, <b>Multiomics</b> , and <b>Biomedical Informatics</b> @ <a href='https://github.com/zhandong'>Zhandong Liu Lab Lab</a>.
        </li>
        <li>
          <span role="img" aria-label="laptop">💻</span> Currently developing new high throughput methods to leverage patient phenotypic, genotypic, and multiomic data for rapid, precision clinical diagnostics
        </li>
      </ul>
      <br />
      <center>
        <h3>Resume (<a href={myResume} download="JohnathanJia-Resume.pdf">Download</a>)</h3>
        <br />
        <Document
          file={myResume}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={(error) => console.error('Failed to load PDF:', error)}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderMode="svg" />
          ))}
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
