"use client"

import { Button } from "@/components/ui/button"

const quickQuestions = [
  "टमाटर लगाने का सबसे अच्छा समय क्या है?",
  "प्राकृतिक रूप से एफिड्स को कैसे नियंत्रित करें?",
  "गेहूं की कटाई कब करनी चाहिए?",
  "चावल की फसलों के लिए कौन सा उर्वरक?",
  "मिट्टी के पीएच को कैसे सुधारें?",
  "पौधों की बीमारियों के लक्षण?",
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
      <h3 className="text-md font-bold mb-3 text-muted-foreground">कुछ प्रश्न जो तुरंत पूछे जा सकते हैं</h3>
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
