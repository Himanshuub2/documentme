import OpenAI from "openai";
import createPDF from "./pdfService";

interface ImageURL {
  url: string;
}

interface ChatCompletionContentPart {
  type: string | "text";
  text?: string;
  image_url?: ImageURL;
}

export const imagetoText = async (prompt: string, base64Images: any[]) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAPI_KEY });
  const formattedImageObj: ChatCompletionContentPart[] = base64Images.map(
    (img) => {
      return {
        type: "image_url",
        image_url: {
          url: `data:image/jpeg;base64,${img}`,
        }, 
      };
    }
  );
  formattedImageObj.unshift({ type: "text", text: process.env.UPWORK_ROLE + 'Frontend developer' + process.env.DEFAULT_PROMPT });

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: formattedImageObj,
      },
    ],
  });
  if(response) createPDF(base64Images,response.choices[0].message);

  return response;
};
