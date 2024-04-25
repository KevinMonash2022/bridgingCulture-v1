// lib/lmstudioApi.js
import axios from 'axios';

const LM_STUDIO_ENDPOINT = 'http://localhost:1234/v1';

export const getModels = async () => {
  try {
    const response = await axios.get(`${LM_STUDIO_ENDPOINT}/models`);
    console.log("Models loaded:", response.data);
    return response;
  } catch (error) {
    console.error("Error fetching models:", error);
    throw error;  // Rethrow to handle it in the calling function
  }
};

export const createChatCompletion = async (messages, temperature = 0.7, maxTokens = 150) => {
  try {
    const payload = {
      messages,
      temperature,
      max_tokens: maxTokens,
      stream: true
    };
    console.log('Sending payload:', payload);
    const response = await axios.post(`${LM_STUDIO_ENDPOINT}/chat/completions`, payload, {
      headers: { 'Content-Type': 'application/json' }
    });
    console.log("Response from chat completion:", response.data);
    return response;
  } catch (error) {
    console.error("Error creating chat completion:", error);
    throw error;  // Rethrow to handle it in the calling function
  }
};
