"use client"
import { useState } from "react"
import { ChatInterface } from "@/components/chat-interface"
import { QuickQuestions } from "@/components/quick-questions"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function ChatPage() {
  const [messages, setMessages] = useState<any[]>([])

  const addMessage = (question: string, response: string) => {
    const userMessage = {
      id: Date.now().toString(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    }

    const botMessage = {
      id: (Date.now() + 1).toString(),
      text: response,
      sender: "bot",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage, botMessage])
  }

  return (
    <div className="min-h-screen bg-background pb-20 flex flex-col">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          <div>
            <h1 className="text-xl font-bold">एग्रीबॉट असिस्टेंट - हिंदी</h1>
            <p className="text-primary-foreground/80 text-sm">आपका एआई खेती विशेषज्ञ</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <ChatInterface messages={messages} setMessages={setMessages} />
        <QuickQuestions onQuestionSelect={addMessage} />
      </main>

      <BottomNavigation />
    </div>
  )
}
