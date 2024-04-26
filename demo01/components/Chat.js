import React, { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([
    { sender: 'Assistant', message: "G'day mate!" }
  ]);
  const [systemPrompt, setSystemPrompt] = useState('RolePlay as a nice Australian that helping new migrant, reply shortly');

  const buildPrompt = () => {
    let prompt = `systemPrompt: '${systemPrompt}', user: 'hi', Assistant: "${chat[0].message}",`;
    chat.slice(1).forEach(c => {
      prompt += ` ${c.sender === 'User' ? "user" : "Assistant"}: '${c.message}',`;
    });
    prompt += ` user: '${userInput}'`;
    return prompt;
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const newChat = [...chat, { sender: 'User', message: userInput }];
    setChat(newChat);

    try {
      const response = await axios.post('https://fumes-api.onrender.com/llama3', JSON.stringify({
        prompt: buildPrompt(),
        temperature: 0.75,
        topP: 0.9,
        maxTokens: 100
      }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const truncatedResponse = response.data.slice(0, -51);
      setChat([...newChat, { sender: 'Chatbot', message: truncatedResponse }]);
    } catch (error) {
      console.error('Error fetching chat response:', error);
    }
    setUserInput(''); // Clear input after sending
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* left side  */}
      <div className="w-1/4 bg-gray-200 shadow-lg flex flex-col justify-center items-center">
        {/* Buttons with black text and pink background */}
        <button
          className="w-full mb-4 py-2 bg-red-300 hover:bg-pink-700 text-black font-bold rounded"
          onClick={() => {
            setSystemPrompt('RolePlay as a nice Australian that helping new migrant, reply shortly');
            setChat([{ sender: 'Assistant', message: "G'day mate!" }]);
          }}
        >
          General Aussie bot
        </button>
        <button
          className="w-full mb-4 py-2 bg-red-300 hover:bg-pink-700 text-black font-bold rounded"
          onClick={() => {
            setSystemPrompt('RolePlay as restaurant staff from Australia, reply shortly');
            setChat([{ sender: 'Assistant', message: "G'day mate! How ya going? Welcome to Bazza's Bar & Grill" }]);
          }}
        >
          Restaurant Staff
        </button>
        <button
          className="w-full py-2 bg-red-300 hover:bg-pink-700 text-black font-bold rounded"
          onClick={() => {
            setSystemPrompt('RolePlay as telecommunication store staff from Australia, reply shortly');
            setChat([{ sender: 'Assistant', message: "G'day mate! Looking for a new phone or plan today?" }]);
          }}
        >
          Telecom Staff
        </button>
      </div>
      {/* right side chating display */}
      <div className="w-3/4 flex flex-col grey-300 shadow-xl rounded-lg p-6">
        {/* chatting info display */}
        <div className="overflow-y-auto mb-4 flex-1">
          {chat.map((c, index) => (
            <div key={index} className={`flex items-start ${c.sender === 'User' ? 'justify-end' : 'justify-start'} mb-2`}>
              <div className={`rounded-2xl px-4 py-2 text-white ${c.sender === 'User' ? 'bg-blue-500' : 'bg-red-300'}`}>
                {c.message}
              </div>
            </div>
          ))}
        </div>
        {/* user input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="bg-red-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
