import PDFDocument from 'pdfkit'
import fs from 'fs'

interface AiResponse{
  role:string ;
  content:string;
}

export default function createPDF(images:any[] , response:AiResponse) {
  const doc = new PDFDocument();

  doc
    .pipe(fs.createWriteStream('output.pdf'));

  doc
    .fontSize(25)
    .text('Document', 100, 100);

  const arr= [1,2,3,4];

  const IMAGESIZE = 400;
  const BOTTOMMARGIN = 20;
  arr.forEach(img=>{
    doc.image(`data:image/jpeg;base64,${images[0]}`, {
      fit: [350, 400],
      align: 'center',
      valign: 'center'
    });
    
    doc.moveDown(0.5);


    doc.fontSize(10)
    .text(response.content, 100, 400)
    .lineGap(6)
    ;
  
    if (doc.y + IMAGESIZE > doc.page.height - BOTTOMMARGIN) {
      doc.addPage(); 
    }

  })

doc.end();

}



