import PDFDocument from 'pdfkit'
import fs from 'fs'

interface AiResponse{
  role:string ;
  content:string;
}

export default function createPDF(images:any[] , response:AiResponse) {
//   const doc = new PDFDocument();

//   doc.pipe(fs.createWriteStream('output.pdf'));

//   doc
//     .fontSize(25)
//     .text('Here is some text!', 100, 100);

// //   doc.image('path/to/image.png', {
// //     fit: [250, 300],
// //     align: 'center',
// //     valign: 'center'
// //   });

//   // Add more text with options
//   doc.fontSize(15).text('Here is some smaller text underneath an image.', 100, 400);

//   // Finalize PDF file
//   doc.end();
}



// 


