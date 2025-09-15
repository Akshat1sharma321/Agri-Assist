"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  type?: "text" | "suggestion"
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm AgriBot, your AI farming assistant. I can help you with crop advice, pest management, weather guidance, and more. How can I assist you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

export function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputText, setInputText] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputText("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponse = generateBotResponse(text.trim())
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const generateBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("weather") || input.includes("rain") || input.includes("temperature")) {
      return "Based on current weather patterns, I recommend checking soil moisture levels before irrigation. The upcoming forecast shows moderate temperatures with possible light rain in 2-3 days. This would be ideal for planting leafy vegetables."
    }

    if (input.includes("pest") || input.includes("insect") || input.includes("bug")) {
      return "For effective pest management, I suggest implementing integrated pest management (IPM). Start with neem oil spray for organic control, ensure proper crop rotation, and consider beneficial insects like ladybugs. Would you like specific advice for a particular pest?"
    }

    if (input.includes("fertilizer") || input.includes("nutrient") || input.includes("soil")) {
      return "Soil health is crucial for good yields. I recommend getting a soil test first to determine pH and nutrient levels. Generally, organic compost improves soil structure, while NPK fertilizers address specific nutrient needs. What type of crops are you planning to grow?"
    }

    if (input.includes("disease") || input.includes("fungus") || input.includes("blight")) {
      return "Plant diseases can be prevented with proper spacing, good air circulation, and avoiding overhead watering. For fungal issues, copper-based fungicides work well. Early detection is key - remove affected plant parts immediately to prevent spread."
    }

    if (input.includes("water") || input.includes("irrigation") || input.includes("drought")) {
      return "Water management is essential for healthy crops. Drip irrigation is most efficient, reducing water waste by 30-50%. Water early morning or evening to minimize evaporation. Mulching helps retain soil moisture and reduces watering frequency."
    }

    return "That's a great question! Based on my agricultural knowledge, I'd recommend consulting with local agricultural extension services for region-specific advice. Meanwhile, focus on soil health, proper irrigation, and regular crop monitoring. Is there a specific aspect of farming you'd like to explore further?"
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSendMessage(inputText)
  }

  return (
    <div className="flex-1 flex flex-col p-4">
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[80%] ${message.sender === "user" ? "order-2" : "order-1"}`}>
              <Card
                className={`p-3 ${
                  message.sender === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-card border-border"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-xs mt-2 ${
                    message.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </Card>
            </div>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.sender === "user" ? "order-1 mr-2 bg-primary/20" : "order-2 ml-2 bg-secondary"
              }`}
            >
              {message.sender === "user" ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              )}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <Card className="p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </Card>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ask about crops, weather, pests..."
          className="flex-1"
          disabled={isTyping}
        />
        <Button type="submit" disabled={!inputText.trim() || isTyping}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </Button>
      </form>
    </div>
  )
}
