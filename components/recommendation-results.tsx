import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const recommendations = [
  {
    crop: "Rice (Basmati)",
    yield: "4.5 tons/acre",
    profit: "₹45,000",
    sustainability: 85,
    season: "Kharif",
    duration: "120-130 days",
    waterReq: "High",
    difficulty: "Medium",
    marketDemand: "High",
    image: "/rice-plant.jpg",
    pros: ["High market value", "Good water availability match", "Suitable soil type"],
    cons: ["Requires careful water management", "Pest management needed"],
  },
  {
    crop: "Wheat",
    yield: "3.2 tons/acre",
    profit: "₹32,000",
    sustainability: 78,
    season: "Rabi",
    duration: "110-120 days",
    waterReq: "Medium",
    difficulty: "Easy",
    marketDemand: "Very High",
    image: "/wheat-plant.jpg",
    pros: ["Stable market", "Lower water requirement", "Easy to grow"],
    cons: ["Lower profit margin", "Storage challenges"],
  },
  {
    crop: "Sugarcane",
    yield: "60 tons/acre",
    profit: "₹65,000",
    sustainability: 72,
    season: "Annual",
    duration: "12-18 months",
    waterReq: "Very High",
    difficulty: "Hard",
    marketDemand: "High",
    image: "/sugarcane-plant.jpg",
    pros: ["Highest profit potential", "Long-term crop", "Multiple harvests"],
    cons: ["Very high water requirement", "Long investment period"],
  },
]

export function RecommendationResults() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Recommended Crops</h2>
        <Badge variant="secondary" className="bg-primary/10 text-primary">
          AI Powered
        </Badge>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-start gap-4">
                <img
                  src={rec.image || "/placeholder.svg"}
                  alt={rec.crop}
                  className="w-16 h-16 rounded-lg object-cover bg-muted"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{rec.crop}</CardTitle>
                    <Badge variant={index === 0 ? "default" : "secondary"}>
                      {index === 0 ? "Best Match" : `Option ${index + 1}`}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <span>Yield: {rec.yield}</span>
                    <span>Profit: {rec.profit}</span>
                    <span>Duration: {rec.duration}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Season</p>
                  <p className="font-medium">{rec.season}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Water Req.</p>
                  <p className="font-medium">{rec.waterReq}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Difficulty</p>
                  <p className="font-medium">{rec.difficulty}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Market Demand</p>
                  <p className="font-medium">{rec.marketDemand}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sustainability Score</span>
                  <span className="font-medium">{rec.sustainability}%</span>
                </div>
                <Progress value={rec.sustainability} className="h-2" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-green-600 mb-1">Advantages</p>
                  <ul className="space-y-1">
                    {rec.pros.map((pro, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-orange-600 mb-1">Considerations</p>
                  <ul className="space-y-1">
                    {rec.cons.map((con, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
