import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, SendIcon, CheckIcon, CheckCheckIcon } from 'lucide-react';
type Message = {
  id: number;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  isButton?: boolean;
  action?: string;
};
export function SupportChat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [stage, setStage] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    const initialMessage: Message = {
      id: 1,
      sender: 'bot',
      text: "Hi James, we noticed your recent transfer didn't go through. I'm here to help you fix it.",
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setTimeout(() => setMessages([initialMessage]), 500);
  }, []);
  const addBotMessage = (text: string, delay = 2000, isButton = false, action = '') => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      const newMessage: Message = {
        id: messages.length + 1,
        sender: 'bot',
        text,
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        }),
        isButton,
        action
      };
      setMessages(prev => [...prev, newMessage]);
    }, delay);
  };
  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    if (stage === 1) {
      addBotMessage("I've checked the logs. Your transfer failed due to a temporary network disruption on the NIP switch. This happens occasionally during peak hours.", 2000);
      setTimeout(() => {
        addBotMessage('The good news? I can retry this transfer for you right now. Would you like me to do that?', 4000);
        setTimeout(() => {
          addBotMessage('Yes, retry now', 4500, true, 'retry');
          addBotMessage('Not yet', 4600, true, 'cancel');
        }, 4000);
      }, 2000);
      setStage(2);
    }
  };
  const handleButtonClick = (action: string) => {
    if (action === 'retry') {
      const userMessage: Message = {
        id: messages.length + 1,
        sender: 'user',
        text: 'Yes, retry now',
        timestamp: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })
      };
      setMessages(prev => [...prev, userMessage]);
      addBotMessage('Perfect! Let me retry that transfer for you now...', 1500);
      setTimeout(() => {
        addBotMessage('Retrying your transfer…', 3500);
        setTimeout(() => {
          addBotMessage('Transfer Successful ✅', 6000);
          setTimeout(() => {
            addBotMessage('Return to Dashboard', 6500, true, 'return');
          }, 6000);
        }, 3500);
      }, 1500);
      setStage(3);
    } else if (action === 'return') {
      navigate('/');
    } else if (action === 'cancel') {
      navigate('/failed');
    }
  };
  return <div className="fixed inset-0 bg-[#0a1014] z-50 flex flex-col w-full">
      <div className="bg-[#1f2c34] text-white px-4 py-3 flex items-center shadow-md">
        <button onClick={() => navigate('/failed')} className="mr-4 p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-3 flex-1">
          <div className="w-10 h-10 bg-[#25d366] rounded-full flex items-center justify-center">
            <span className="text-sm font-semibold">AI</span>
          </div>
          <div>
            <h2 className="font-medium text-[15px]">NovaBank Support</h2>
            <p className="text-xs text-gray-400">Online</p>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundColor: '#0a1014'
    }}>
        {messages.map(message => <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            {message.isButton ? <button onClick={() => handleButtonClick(message.action || '')} className="bg-white text-[#25d366] font-medium py-2 px-5 rounded-md hover:bg-gray-100 transition-colors text-sm shadow-sm">
                {message.text}
              </button> : <div className={`max-w-[75%] rounded-lg px-3 py-2 shadow-sm ${message.sender === 'user' ? 'bg-[#005c4b] text-white rounded-tr-none' : 'bg-[#1f2c34] text-white rounded-tl-none'}`}>
                <p className="text-[14.2px] leading-[19px]">{message.text}</p>
                <div className={`flex items-center space-x-1 mt-1 text-[11px] ${message.sender === 'user' ? 'text-gray-300 justify-end' : 'text-gray-400'}`}>
                  <span>{message.timestamp}</span>
                  {message.sender === 'user' && <CheckCheckIcon className="w-4 h-4 text-[#53bdeb]" />}
                </div>
              </div>}
          </div>)}
        {isTyping && <div className="flex justify-start">
            <div className="bg-[#1f2c34] rounded-lg rounded-tl-none px-4 py-3 shadow-sm">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
              animationDelay: '0.1s'
            }} />
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{
              animationDelay: '0.2s'
            }} />
              </div>
            </div>
          </div>}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-[#1f2c34] px-2 py-2">
        <div className="flex items-center space-x-2">
          <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} onKeyPress={e => e.key === 'Enter' && handleSend()} placeholder="Type a message" className="flex-1 px-4 py-2.5 bg-[#2a3942] text-white placeholder-gray-400 rounded-full focus:outline-none text-[15px]" />
          <button onClick={handleSend} disabled={!inputText.trim()} className="w-11 h-11 bg-[#25d366] text-white rounded-full flex items-center justify-center hover:bg-[#20bd5a] transition-all disabled:opacity-50 disabled:cursor-not-allowed">
            <SendIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>;
}