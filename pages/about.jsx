import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const myResume = '/resume.pdf';

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
          <span role="img" aria-label="book">📖</span> AI Engineer @ <a href='http://liuzlab.org/members/'>Baylor College of Medicine</a>.
        </li>
        <li>
          <span role="img" aria-label="graduate-hat">🎓</span> AI <b>LLMs</b>, <b>NLP</b>, <b>Machine Learning</b>, <b>Bioinformatics</b>, <b>Computer Vision</b>, and <b>Biomedical Informatics</b> @ <a href='https://github.com/zhandong'>Zhandong Liu Lab</a>.
        </li>
        <li>
          <span role="img" aria-label="laptop">💻</span> Developing new high throughput methods to leverage patient phenotypic, genotypic, and multiomic data for rapid, precision clinical diagnostics
        </li>
      </ul>
      <br />
      <div
        style={{
          width: '100%',
          maxWidth: 800,
          margin: '2rem auto',
          height: '80vh',        // limit overall height
          overflowY: 'auto',     // scroll only inside this box
          position: 'relative',
          cursor: 'pointer',
        }}
      >
        {/* Wrapping the single Page in a download-link: */}
        <a
          href={myResume}
          download="JohnathanJia-Resume.pdf"
          style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}
        >
          <Document
            file={myResume}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={(err) => console.error(err)}
          >
            {numPages && (
              <Page
                pageNumber={pageNumber}
                renderMode="canvas"
                scale={2}            // you can tweak this for clarity vs. size
              />
            )}
          </Document>
        </a>
      </div>

      {/* simple pager below the viewer */}
      {numPages && (
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <button
            onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
            disabled={pageNumber === 1}
            style={{ marginRight: '1rem' }}
          >
            ← Prev
          </button>
          <span>
            {pageNumber} / {numPages}
          </span>
          <button
            onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
            disabled={pageNumber === numPages}
            style={{ marginLeft: '1rem' }}
          >
            Next →
          </button>
        </div>
      )}
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;