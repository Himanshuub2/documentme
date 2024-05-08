import puppeteer from "puppeteer";

export default async function getScreenShots(baseUrl:string, endpoints:string[]) {
  const imageArray = []
  const browser = await puppeteer.launch({
    args: ["--window-size=1920,1080"],
  });
  const page = await browser.newPage();
  if(!endpoints.length) endpoints.push('');

  if (endpoints.length) {
    for (let i = 0; i < endpoints.length; i++) {
      await page.goto(`${baseUrl}/${endpoints[i]}`, {
        waitUntil: "networkidle2",
      });
      await page.setViewport({
        width: 1920,
        height: 1080,
      });
      await page.screenshot({
        type: "png",
        path: endpoints[i]===""?"sample.png":`${endpoints[i]}.png`,
      });

      const img = await page.screenshot({
        type: "png",
        encoding:"base64"
      });
      
      if(img) imageArray.push(img); 

      await browser.close();
    }
  }

  return imageArray;
}
