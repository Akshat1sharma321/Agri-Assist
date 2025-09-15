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
  onQuestionSelect?: (question: string, customResponse: string) => void
}


const customResponses: Record<string, string> = {
  "टमाटर लगाने का सबसे अच्छा समय क्या है?": "टमाटर लगाने का सबसे अच्छा समय अक्टूबर से दिसंबर तक होता है।",
  "प्राकृतिक रूप से एफिड्स को कैसे नियंत्रित करें?": "एफिड्स को नियंत्रित करने के लिए नीम का तेल या साबुन का घोल छिड़कें।",
  "गेहूं की कटाई कब करनी चाहिए?": "गेहूं की कटाई तब करें जब बालियां पूरी तरह पक जाएं और दाने सख्त हो जाएं।",
  "चावल की फसलों के लिए कौन सा उर्वरक?": "चावल के लिए नाइट्रोजन, फॉस्फोरस और पोटाश युक्त उर्वरक उपयुक्त हैं।",
  "मिट्टी के पीएच को कैसे सुधारें?": "मिट्टी के पीएच को सुधारने के लिए चूना या जैविक खाद का प्रयोग करें।",
  "पौधों की बीमारियों के लक्षण?": "पौधों की बीमारियों में पत्तियों का पीला पड़ना, धब्बे आना, या मुरझाना शामिल है।",
}

export function QuickQuestions({ onQuestionSelect }: QuickQuestionsProps) {
  const handleQuestionClick = (question: string) => {
    const response = customResponses[question]
    if (onQuestionSelect) {
      onQuestionSelect(question, response)
    } else {
      // If no handler provided, we could dispatch an event or use a different approach
      console.log("Selected question:", question)
      console.log("Custom response:", response)
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
