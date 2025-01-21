"use client"; // Make this component client-side

import React, { useState } from "react";
import { FaRegCommentDots, FaTimes } from "react-icons/fa";

const Chatbot: React.FC = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isChatbotOpen ? <FaTimes size={20} /> : <FaRegCommentDots size={20} />}
      </button>

      {/* Chatbot iframe */}
      {isChatbotOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '350px',
            height: '500px',
            border: '1px solid #ccc',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            zIndex: '1000',
            backgroundColor: '#fff',
            borderRadius: '5px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/s07yWJIghaEQUOZtu5WL0"
            width="100%"
            height="100%"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default Chatbot;