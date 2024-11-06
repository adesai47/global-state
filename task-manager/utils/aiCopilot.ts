import { OpenAIApi, Configuration } from 'openai';
import Instructor from 'instructor-js';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

const instructor = new Instructor(openai);

export const generateTaskOrEpic = async (prompt: string) => {
  const structuredResponse = await instructor.generate({
    prompt,
    structure: {
      title: 'string',
      description: 'string',
      tasks: [
        {
          title: 'string',
          description: 'string',
          status: 'string',
        },
      ],
    },
  });
  return structuredResponse;
};
