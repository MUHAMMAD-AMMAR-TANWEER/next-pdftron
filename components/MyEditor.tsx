import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import PdfViewer from './PdfViewer'

import React, { useState, useMemo } from 'react'
const MyEditor: React.FC = () => {
  const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState<Descendant[]>([])

  const [pdfFile, setPdfFile] = useState('')

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]
    if (file) {
      setPdfFile(URL.createObjectURL(file))
    }
  }

  return (
    <div>
      <input type="file" onChange={handlePdfUpload} />
      {pdfFile && <PdfViewer file={pdfFile} />}
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable />
      </Slate>
    </div>
  )
}

export default MyEditor
