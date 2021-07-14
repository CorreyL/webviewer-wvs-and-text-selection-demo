import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import './App.css';

const App = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf',
        pdftronServer: 'http://70.68.132.17:8090/',
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, annotManager, Tools } = instance;
      Tools.Tool.ENABLE_TEXT_SELECTION = false;
      annotManager.setReadOnly(true);
      docViewer.setWatermark({
        // Draw diagonal watermark in middle of the document
        diagonal: {
          fontSize: 25, // or even smaller size
          fontFamily: 'sans-serif',
          color: 'red',
          opacity: 50, // from 0 to 100
          text: 'Watermark'
        },

        // Draw header watermark
        header: {
          fontSize: 10,
          fontFamily: 'sans-serif',
          color: 'red',
          opacity: 70,
          left: 'left watermark',
          center: 'center watermark',
          right: ''
        }
      });
    });
  }, []);

  return (
    <div className="App">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
