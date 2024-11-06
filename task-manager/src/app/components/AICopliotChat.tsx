// src/app/components/AICopilotChat.tsx
import React, { useState } from 'react';
import { generateTaskOrEpic } from '../../../utils/aicopilot';

const AICopilotChat: React.FC = () => {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState<any>(null);

  const handleCommandSubmit = async () => {
    const result = await generateTaskOrEpic(command);
    setResponse(result);
    setCommand("");
  };

  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md text-white">
      <h2 className="text-xl font-bold mb-4">AI Copilot</h2>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        placeholder="Enter command (e.g., 'create a new epic for frontend tasks')"
        className="w-full p-2 mb-4 border rounded text-black"
      />
      <button onClick={handleCommandSubmit} className="bg-blue-500 p-2 rounded text-white">
        Generate
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-700 rounded">
          <h3 className="font-semibold">Generated Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AICopilotChat;
