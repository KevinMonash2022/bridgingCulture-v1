// pages/api/chat.js
import { getGroqChatCompletion } from '../../groqClient';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { messages } = req.body;
        try {
            let completion, message;
            try {
                completion = await getGroqChatCompletion(messages);
                message = completion.choices[0]?.message?.content || "No response generated.";
            } catch (firstError) {
                // If getGroqChatCompletion fails, attempt alternative
                console.error('Error with Llama3 70b:', firstError);
                completion = await getGroqChatCompletion(messages, 'llama3-8b-8192');
                message = completion.choices[0]?.message?.content || "No response generated.";
            }
            
            res.status(200).json({ output: message });
        } catch (error) {
            res.status(500).json({ message: 'Error connecting to Groq Llama3', error });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
