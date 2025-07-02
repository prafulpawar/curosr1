import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m here to help you with INVIdata\'s Invisible Internal Data Security. How can I assist you today?',
      isUser: false,
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sendMessage = useMutation({
    mutationFn: async (message: string) => {
      const response = await apiRequest('POST', '/api/chatbot', { message });
      return response.json();
    },
    onSuccess: (data) => {
      const botMessage: Message = {
        id: Date.now().toString() + '_bot',
        text: data.response,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString() + '_error',
        text: 'Sorry, I\'m having trouble connecting right now. Please try again later or contact support@invidata.com',
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    sendMessage.mutate(inputValue);
    setInputValue('');
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div className="chatbot-widget">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[var(--cyber-green)] text-black w-14 h-14 rounded-full shadow-lg hover:bg-[var(--matrix-green)] transition-all duration-300 flex items-center justify-center group cyber-glow"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-comments'} text-xl group-hover:scale-110 transition-transform duration-300`}></i>
        </Button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 w-96 max-w-[calc(100vw-2rem)] z-50">
          <Card className="bg-gray-900/95 border-[var(--cyber-green)]/30 shadow-2xl backdrop-blur">
            <CardHeader className="border-b border-gray-800">
              <CardTitle className="text-white flex items-center gap-2">
                <div className="w-3 h-3 bg-[var(--cyber-green)] rounded-full animate-pulse"></div>
                INVIdata Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ScrollArea className="h-80 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-4 py-2 ${
                          message.isUser
                            ? 'bg-[var(--cyber-green)] text-black'
                            : 'bg-gray-800 text-white'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                  {sendMessage.isPending && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 text-white rounded-lg px-4 py-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-2 h-2 bg-[var(--cyber-green)] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
              <form onSubmit={handleSubmit} className="p-4 border-t border-gray-800">
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about INVIdata security..."
                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[var(--cyber-green)]"
                    disabled={sendMessage.isPending}
                  />
                  <Button
                    type="submit"
                    disabled={!inputValue.trim() || sendMessage.isPending}
                    className="bg-[var(--cyber-green)] text-black hover:bg-[var(--matrix-green)]"
                  >
                    <i className="fas fa-paper-plane"></i>
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
