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
interface ChatInterfaceProps {
  messages: Message[]
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}


export function ChatInterface({ messages, setMessages }: ChatInterfaceProps) {
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

    if (input.includes("मौसम") || input.includes("बारिश") || input.includes("तापमान")) {
      return "मौसम के वर्तमान रुझानों के अनुसार, सिंचाई से पहले मिट्टी की नमी की जाँच करना उचित रहेगा। आगामी पूर्वानुमान में हल्की बारिश की संभावना है और तापमान मध्यम रहेगा। यह पत्तेदार सब्ज़ियों की बुवाई के लिए अनुकूल समय है।"
    }

    if (input.includes("कीट") || input.includes("कीड़ा") || input.includes("बग")) {
      return "प्रभावी कीट प्रबंधन के लिए एकीकृत कीट प्रबंधन (IPM) अपनाएँ। जैविक नियंत्रण के लिए नीम तेल का छिड़काव करें, फसल चक्र अपनाएँ और लाभकारी कीट जैसे लेडीबग्स का उपयोग करें। क्या आप किसी विशेष कीट के लिए सलाह चाहते हैं?"
    }

    if (input.includes("उर्वरक") || input.includes("पोषक") || input.includes("मिट्टी")) {
      return "अच्छी पैदावार के लिए मिट्टी का स्वास्थ्य बहुत महत्वपूर्ण है। सबसे पहले मिट्टी की जाँच करवाएँ ताकि pH और पोषक तत्वों का स्तर पता चल सके। सामान्यतः, जैविक खाद मिट्टी की संरचना सुधारती है, जबकि NPK उर्वरक विशिष्ट पोषक तत्वों की पूर्ति करते हैं। आप कौन सी फसल उगाने की योजना बना रहे हैं?"
    }

    if (input.includes("रोग") || input.includes("फफूंदी") || input.includes("झुलसा")) {
      return "फसल रोगों से बचाव के लिए पौधों में उचित दूरी रखें, हवा का संचार अच्छा हो और ऊपर से पानी देने से बचें। फफूंदी की समस्या के लिए कॉपर आधारित फफूंदनाशी उपयोगी है। प्रारंभिक पहचान बहुत जरूरी है - प्रभावित हिस्सों को तुरंत हटा दें ताकि रोग न फैले।"
    }

    if (input.includes("पानी") || input.includes("सिंचाई") || input.includes("सूखा")) {
      return "फसलों के लिए जल प्रबंधन अत्यंत आवश्यक है। ड्रिप सिंचाई सबसे प्रभावी है, जिससे 30-50% तक पानी की बचत होती है। सुबह या शाम के समय सिंचाई करें ताकि वाष्पीकरण कम हो। मल्चिंग से मिट्टी में नमी बनी रहती है और सिंचाई की आवश्यकता भी कम होती है।"
    }
    
    return "यह एक बेहतरीन सवाल है! अपने कृषि ज्ञान के आधार पर, मैं क्षेत्र-विशिष्ट सलाह के लिए स्थानीय कृषि विस्तार सेवाओं से परामर्श करने की सलाह दूँगा। इस बीच, मिट्टी के स्वास्थ्य, उचित सिंचाई और नियमित फसल निगरानी पर ध्यान दें। क्या खेती का कोई ऐसा विशिष्ट पहलू है जिस पर आप और अधिक शोध करना चाहेंगे?"
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
                  className={`text-xs mt-1 ${
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
          placeholder="फसल, मौसम, कीट आदि के बारे में पूछें..."
          className="flex-1 border border-gray-300 "
          disabled={isTyping}
        />
        <Button type="submit" disabled={!inputText.trim() || isTyping}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span className="sr-only">भेजें</span>
        </Button>
      </form>
    </div>
  )
}
