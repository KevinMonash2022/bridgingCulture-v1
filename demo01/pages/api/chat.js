// pages/api/chat.js
import { getGroqChatCompletion } from '../../groqClient';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { messages } = req.body;
        console.log(messages)
        try {
            const completion = await getGroqChatCompletion(messages);
            const message = completion.choices[0]?.message?.content || "No response generated.";
            res.status(200).json({ output: message });
        } catch (error) {
            res.status(500).json({ message: 'Error connecting to Groq Llama3', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
