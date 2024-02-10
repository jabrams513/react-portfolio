import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import PDF from "../assets/AbramsResume.pdf";

export default function Resume() {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.js",
    import.meta.url
  ).toString();

  const maxWidth = 800;
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState();
  const [showPDF, setShowPDF] = useState(true);
  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  const handleDownload = () => {
    fetch(PDF).then((response) => {
      response.blob().then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        open(fileURL, "_blank"); //alternative to the a link opens embedded adobe viewer
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "AbramsResume.pdf";
        alink.click();
      });
    });
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  return (
    <>
      <div className="pb-2 mx-auto" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h1 className="pb-2">Resume</h1>
        <h6>
          Toggle here to view my{" "}
          <a href="#image" onClick={handleClick} className="underline">
            resume
          </a>{" "}
          as an image.
        </h6>
        Click here to download my{" "}
        <a href="#download" onClick={handleDownload} className="underline">
          resume as a PDF.
        </a>
      </div>
      {showPDF ? (
        <div className="pb-2 mx-auto" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <ul className="mx-auto" style={{ lineHeight: '2', padding: 0, margin: '0 auto' }}>
            <strong>Front-End Proficiencies</strong>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>ReactJS</li>
            <li>Bootstrap</li>
            <li>MUI</li>
            <li>TailwindCSS</li>
          </ul>
          <ul className="mx-auto" style={{ lineHeight: '2', padding: 0, margin: '0 auto' }}>
            <strong>Back-End Proficiencies</strong>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL & Sequelize</li>
            <li>MongoDB & Mongoose</li>
            <li>REST APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
      ) : (
        <div className="PDFStyle mx-auto" style={{ maxWidth: '800px' }}>
          <Document file={PDF} onLoadSuccess={onDocumentLoadSuccess}>
            <Page
              pageNumber={pageNumber}
              width={
                containerWidth
                  ? Math.min(containerWidth, maxWidth) - 30
                  : maxWidth
              }
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
          <p style={{ textAlign: 'center' }}>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
    </>
  );
}
