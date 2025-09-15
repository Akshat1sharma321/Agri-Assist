"use client"

import { Button } from "@/components/ui/button"

const quickQuestions = [
  "What's the best time to plant tomatoes?",
  "How to control aphids naturally?",
  "When should I harvest wheat?",
  "What fertilizer for rice crops?",
  "How to improve soil pH?",
  "Signs of plant diseases?",
]

interface QuickQuestionsProps {
  onQuestionSelect?: (question: string) => void
}

export function QuickQuestions({ onQuestionSelect }: QuickQuestionsProps) {
  const handleQuestionClick = (question: string) => {
    if (onQuestionSelect) {
      onQuestionSelect(question)
    } else {
      // If no handler provided, we could dispatch an event or use a different approach
      console.log("Selected question:", question)
    }
  }

  return (
    <div className="p-4 border-t border-border bg-muted/30">
      <h3 className="text-sm font-medium mb-3 text-muted-foreground">Quick Questions</h3>
      <div className="flex flex-wrap gap-2">
        {quickQuestions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs h-8 bg-background hover:bg-muted"
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}
