// groqClient.js
"use strict";
const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: process.env.API_KEY
});

async function getGroqChatCompletion(messages, model = "llama3-70b-8192", maxTokens = 1024, temperature = 0.75, topP = 0.9) {
    return groq.chat.completions.create({
        messages: messages,
        model: model,
        max_tokens: maxTokens,
        temperature: temperature,
        top_p: topP
    });
}

module.exports = {
    getGroqChatCompletion
};
