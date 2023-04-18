import React, { useRef, useState, useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
// import pdfjs from 'pdfjs-dist/webpack'
interface PdfViewerProps {
  file: string
  scale?: number
}

const PdfViewer: React.FC<PdfViewerProps> = ({ file }) => {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  const nextPage = () => {
    if (pageNumber < (numPages || 0)) {
      setPageNumber(pageNumber + 1)
    }
  }

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1)
    }
  }

  const zoomIn = () => {
    setScale(scale + 0.1)
  }

  const zoomOut = () => {
    setScale(scale - 0.1)
  }

  return (
    <div>
      <div>
        <button onClick={prevPage}>Prev</button>
        <button onClick={nextPage}>Next</button>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
      </div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
    </div>
  )
}

export default PdfViewer
