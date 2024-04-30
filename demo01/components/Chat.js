import React, { useState } from 'react';
import axios from 'axios';

export default function Chat() {
  const [userInput, setUserInput] = useState('');
  const [chat, setChat] = useState([{ sender: 'Assistant', message: "G'day mate!" }]);
  const [systemPrompt, setSystemPrompt] = useState('RolePlay as a nice Australian that helping new migrant, reply shortly, **please strictly follow this role, dont changed your character**');
  const [suggestions, setSuggestions] = useState(["Hi, I'm new to this country", "Can you introduce for me a little bit?"]);

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
    sendMessage(userInput);
  };

  const sendMessage = async (message) => {
    const newChat = [...chat, { sender: 'User', message }];
    setChat(newChat);
    setSuggestions([]); // Clear suggestions after sending
    setUserInput(''); // Clear input after sending

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
  };

  const handleSuggestionClick = (suggestion) => {
    sendMessage(suggestion);
  };

  const showSuggestions = chat.length === 1 && chat[0].sender === 'Assistant';

  return (
    <div className="flex min-h-screen max-h-screen bg-gray-100">
      {/* left side */}
      <div className="w-1/4 bg-gray-200 shadow-lg flex flex-col p-4" style={{ maxHeight: 'calc(100vh - 110px)' }}>
        <p className="text-xl font-bold rounded text-black-600 mb-4">{"Let's talk with our latest chatbot from Aussie"}</p>
        {/* Buttons with responsive padding and font size */}
        <div>
          <button
            className="w-full mb-2 py-2 bg-red-300 hover:bg-red-400 text-black font-bold rounded text-sm md:text-base"
            onClick={() => {
              setSystemPrompt('RolePlay as a nice Australian that helping new migrant, reply shortly, **please strictly follow this role, dont changed your character**');
              setChat([{ sender: 'Assistant', message: "G'day mate!" }]);
            }}
          >
            General Aussie bot
          </button>
          <p className="text-xs text-gray-600 mb-4">Switches to a general conversation mode with an Australian context.</p>
        </div>
        <div>
          <button
            className="w-full mb-2 py-2 bg-red-300 hover:bg-red-400 text-black font-bold rounded text-sm md:text-base"
            onClick={() => {
              setSystemPrompt('RolePlay as restaurant staff from Australia, reply shortly, **please strictly follow this role, dont changed your character**');
              setChat([{ sender: 'Assistant', message: "G'day mate! How ya going? Welcome to Bazza's Bar & Grill" }]);
            }}
          >
            Restaurant Staff
          </button>
          <p className="text-xs text-gray-600 mb-4">Activates restaurant-specific dialogues and greetings.</p>
        </div>
        <div>
          <button
            className="w-full mb-2 py-2 bg-red-300 hover:bg-red-400 text-black font-bold rounded text-sm md:text-base"
            onClick={() => {
              setSystemPrompt('RolePlay as telecommunication store staff from Australia, reply shortly, **please strictly follow this role, dont changed your character**');
              setChat([{ sender: 'Assistant', message: "G'day mate! Looking for a new phone or plan today?" }]);
            }}
          >
            Telecom Staff
          </button>
          <p className="text-xs text-gray-600 mb-4">Engages in conversations about telecommunications situation.</p>
        </div>
      </div>
      {/* right side chatting display */}
      <div className="w-3/4 flex flex-col grey-300 shadow-xl rounded-lg p-4" style={{ maxHeight: 'calc(100vh - 110px)' }}>
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
        {/* Suggested messages if applicable */}
        {showSuggestions && (
          <div className="flex flex-wrap mb-2">
            {suggestions.map((suggestion, index) => (
              <button key={index} className="bg-red-300 hover:bg-red-400 text-black font-bold py-1 px-3 m-1 rounded"
                onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
        )}
        {/* user input */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 p-2 border rounded text-sm"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="bg-red-300 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
