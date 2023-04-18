'use client'

// import WebViewer from '@pdftron/webviewer'
import { useEffect, useRef } from 'react'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const viewer = useRef(null)

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc:
            'https://d3md3t3b9qagji.cloudfront.net/c0855ed98ad85c8650ffe851c67836f6',
        },
        viewer.current,
      ).then((instance: any) => {
        const { docViewer } = instance
        // you can now call WebViewer APIs here...
      })
    })
  }, [])
  return (
    <main>
      <h1>I am pdf </h1>
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div
          className="webviewer"
          ref={viewer}
          style={{ height: '100vh' }}
        ></div>
      </div>
    </main>
  )
}
