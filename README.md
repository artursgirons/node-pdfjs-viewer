## Wrapper for pdf.js viewer
Provide pdf.js viewer as package for node
Use PDF.js viewer.html as described here https://github.com/mozilla/pdf.js/wiki/Setup-PDF.js-in-a-website

#### Usage:

`npm install --save artursgirons/node-pdfjs-viewer#master`

```javascript
import mountPdfViewerApp from 'node-pdfjs-viewer/node'
...
app.use('/viewpdf', mountPdfViewerApp())
```

Go to `/viewpdf/web/viewer.html?file=file.pdf`
