import { createClient } from "@deepgram/sdk";

// helper function to convert stream to audio buffer
const getAudioBuffer = async (response) => {
    const reader = response.getReader();
    const chunks = [];

    while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    chunks.push(value);
    }

    const dataArray = chunks.reduce(
    (acc, chunk) => Uint8Array.from([...acc, ...chunk]),
    new Uint8Array(0)
    );

    return Buffer.from(dataArray.buffer);
};
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const deepgram = createClient(process.env.DEEPGRAM_API_KEY);
    const { text } = req.body;

    try {
      const response = await deepgram.speak.request(
        { text },
        {
          model: "aura-helios-en",
          encoding: "mp3",
          //container: "wav",
        }
      );

      // STEP 3: Get the audio stream and headers from the response
      const stream = await response.getStream();
      const headers = await response.getHeaders();
      if (stream) {
          // STEP 4: Convert the stream to an audio buffer
          const buffer = await getAudioBuffer(stream);
          res.setHeader('Content-Type', 'audio/wav');
          res.status(200).send(Buffer.from(buffer, 'binary'));
      }
      else {
        console.error("Error generating audio:", stream);
      }
      //const buffer = await response.arrayBuffer(); // Get the audio as buffer
      
    } catch (error) {
      console.error("Error generating speech:", error);
      res.status(500).json({ error: "Failed to generate speech" });
    }

  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
