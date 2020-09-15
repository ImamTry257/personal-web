import $ from 'jquery/dist/jquery.min.js';
import { pdfjs } from 'react-pdf';

window.$ = $
window.jQuery = $
pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/'+pdfjs.version+'/pdf.worker.js';