import OpenAI from "openai";

export const imagetoText = async (prompt: string, base64Images: string) => {
  const openai = new OpenAI({ apiKey: process.env.OPENAPI_KEY });
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What’s in this image?" },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Images}`,
            },
          },
        ],
      },
    ],
  });

  return response;
};
