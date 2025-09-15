import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recommendations = [
  {
    date: "2024-01-15",
    type: "Crop Selection",
    recommendation: "Plant Basmati Rice for Kharif season",
    status: "Implemented",
    impact: "Expected 15% yield increase",
  },
  {
    date: "2024-01-12",
    type: "Disease Control",
    recommendation: "Apply copper fungicide for late blight",
    status: "Completed",
    impact: "Disease spread contained",
  },
  {
    date: "2024-01-10",
    type: "Irrigation",
    recommendation: "Reduce watering frequency by 20%",
    status: "In Progress",
    impact: "Water savings: 500L/day",
  },
  {
    date: "2024-01-08",
    type: "Fertilization",
    recommendation: "Apply NPK fertilizer to wheat crop",
    status: "Completed",
    impact: "Improved plant growth",
  },
]

export function RecommendationHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Recommendations History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recommendations.map((rec, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {rec.type}
                </Badge>
                <Badge
                  variant={
                    rec.status === "Completed" ? "default" : rec.status === "Implemented" ? "secondary" : "outline"
                  }
                  className="text-xs"
                >
                  {rec.status}
                </Badge>
              </div>
              <div>
                <p className="font-medium text-sm">{rec.recommendation}</p>
                <p className="text-xs text-muted-foreground mt-1">{rec.date}</p>
              </div>
              <div className="bg-muted/50 rounded p-2">
                <p className="text-xs font-medium text-green-700">Impact: {rec.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
