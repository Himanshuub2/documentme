import PDFDocument from 'pdfkit'
import fs from 'fs'

interface AiResponse{
  role:string ;
  content:string;
}

export default function createPDF(images:any[] , response:AiResponse) {
  const contentParts = response.content.split('@----@')
  const doc = new PDFDocument();

  doc
    .pipe(fs.createWriteStream('output.pdf'));

  doc
    .fontSize(25)
    .text('Document', 100, 100,{align:"center"});

  doc.moveDown();
  const IMAGESIZE = 400;
  const BOTTOMMARGIN = 10;
  images.forEach((img,idx)=>{
    doc.image(`data:image/jpeg;base64,${img}`, {
      fit: [450, 450],
      align: 'center',
      valign: 'center'
    });
    doc.moveDown();
    doc.moveDown(2);


    doc.fontSize(10)
    .text(contentParts[idx+1], 100, 400)
    .lineGap(6)
    ;
  
    if (doc.y + IMAGESIZE > doc.page.height - BOTTOMMARGIN) {
      doc.addPage(); 
    }

  })

doc.end();

}



