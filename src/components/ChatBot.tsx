'use client'

import React, { useState, useRef, useEffect } from 'react';
import { X, Minimize2, Maximize2, Send, Bot, SendHorizontal } from 'lucide-react';

interface Message {
    id: number;
    text: string;
    sender: 'user' | 'ai';
    timestamp: Date;
}

const ChatBot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Hey there! 👋 I'm your AI assistant powered by advanced technology. Ready to help you with anything you need!",
            sender: 'ai',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        if (isOpen && !isMinimized && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen, isMinimized]);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getAIResponse = (userMessage: string): string => {
        const responses = [
            "Absolutely! ✨ I'm here to help with any questions you might have. What's on your mind?",
            "That's fascinating! 🤔 Tell me more about what you're looking for and I'll do my best to assist.",
            "I'd be delighted to help you with that! 🚀 What specific information can I provide?",
            "Excellent question! 💡 I'm designed to help with a wide variety of topics and challenges.",
            "Thanks for reaching out! 😊 I'm always here to support you. What else can I help with?",
            "That's a wonderful inquiry! 🎯 Let me know if you need any clarification or have more questions.",
            "Perfect! 🌟 I love tackling new challenges. How can I make your day better?",
            "Thanks for sharing that with me! 💬 What would you like to explore next together?"
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    };

    const handleSendMessage = () => {
        if (inputValue.trim() === '') return;

        const newUserMessage: Message = {
            id: Date.now(),
            text: inputValue.trim(),
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');
        setIsTyping(true);

        setTimeout(() => {
            const aiResponse: Message = {
                id: Date.now() + 1,
                text: getAIResponse(newUserMessage.text),
                sender: 'ai',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, aiResponse]);
            setIsTyping(false);
        }, Math.random() * 1000 + 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <div className="fixed bottom-20 right-6 z-50">
                <button
                    onClick={() => { setIsOpen(true); setIsMinimized(false); }}
                    className={`relative w-16 h-16 bg-white/10 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center border border-black/50 backdrop-blur-sm ${isOpen && !isMinimized ? 'hidden' : 'block'}`}
                    aria-label="Open chatbot"
                >
                    <Bot className="w-8 h-8 text-green-500" />
                </button>
            </div>

            {/* Chat Window */}
            <div
                className={`fixed bottom-20  right-6 z-50 w-96 max-w-[calc(100vw-3rem)] transition-all duration-200 transform ${isOpen
                    ? 'scale-100 opacity-100 pointer-events-auto'
                    : 'scale-95 opacity-0 pointer-events-none'
                    }`}
                role="dialog"
                aria-labelledby="chatbot-title"
            >
                <div
                    className={`border border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden transition-all duration-200 ${isMinimized ? 'h-[70px]' : 'h-[550px]'}`}
                >
                    {/* Header - Fixed height with perfect vertical centering */}
                    <div className="bg-gradient-to-br from-green-400/5 to-green-600/5 backdrop-blur-xl border-b border-gray-700/50 h-[70px] flex items-center px-4">
                        <div className="flex items-center justify-between w-full">
                            <div className="flex items-center space-x-3">
                                <div className="relative w-12 h-12 bg-white/10 rounded-full flex items-center justify-center shadow-md overflow-hidden">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center">

                                        <img src="/avatar-2.png" alt="no" />
                                    </div>
                                </div>
                                <div>
                                    <h3 id="chatbot-title" className="text-white font-semibold text-sm">
                                        Shree AI (Beta)
                                    </h3>
                                    <p className="text-green-400 text-xs font-medium flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full "></span>
                                        Online
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <button
                                    onClick={() => setIsMinimized(!isMinimized)}
                                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-150"
                                    aria-label={isMinimized ? 'Maximize chat' : 'Minimize chat'}
                                >
                                    {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white hover:bg-gray-700/50 p-2 rounded-lg transition-all duration-150"
                                    aria-label="Close chat"
                                >
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Messages Area */}
                    {!isMinimized && (
                        <div className="flex-1 overflow-y-auto scrollbar-hide p-4 space-y-3 h-[400px] bg-gradient-to-br from-black/20 to-black/20 backdrop-blur-md">
                            {messages.map((message) => (
                                <div
                                    key={message.id}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-3`}
                                >
                                    <div
                                        className={`max-w-[75%] px-4 py-3 relative shadow-md ${message.sender === 'user'
                                            ? 'bg-green-800/30 text-white rounded-tr-none rounded-tl-2xl rounded-bl-2xl rounded-br-2xl'
                                            : 'bg-black/30 text-white rounded-tr-2xl rounded-tl-none rounded-br-2xl rounded-bl-md'
                                            } backdrop-blur-sm`}
                                    >
                                        <p className="text-sm leading-relaxed">{message.text}</p>
                                        <p className={`text-xs text-right mt-2 ${message.sender === 'user'
                                            ? 'text-green-100'
                                            : 'text-gray-300'
                                            }`}>
                                            {formatTime(message.timestamp)}
                                        </p>


                                    </div>
                                </div>
                            ))}

                            {/* Typing indicator */}
                            {isTyping && (
                                <div className="flex justify-start mb-3">
                                    <div className="bbg-green-800/30 backdrop-blur-sm rounded-2xl rounded-tl-sm px-4 py-3 shadow-md">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    )}

                    {/* Input Area - Fixed height with perfect vertical centering */}
                    {!isMinimized && (
                        <div className="bg-gradient-to-br from-green-400/5 to-green-600/5 backdrop-blur-xl  border-t border-gray-700/50 h-[80px] flex items-center px-4">
                            <div className="flex items-center space-x-3 w-full">
                                <div className="flex-1 relative">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        placeholder="Type your message..."
                                        className="w-full bg-gray-700/5 backdrop-blur-sm border border-gray-600/50 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 focus:bg-gray-700/10 transition-all duration-150 placeholder-gray-400 text-white"
                                        aria-label="Chat input"
                                    />
                                </div>
                                <button
                                    onClick={handleSendMessage}
                                    disabled={inputValue.trim() === ''}
                                    className="w-11 h-11 bg-green-500 rounded-sm flex items-center justify-center text-white hover:bg-green-600 hover:scale-105 transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-md border border-green-400/50"
                                    aria-label="Send message"
                                >
                                    <SendHorizontal className="w-6 h-6 " />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>


        </>
    );
};

export default ChatBot;