import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const cropData = [
  {
    crop: "Rice",
    area: "10 acres",
    progress: 75,
    status: "Growing",
    expectedHarvest: "Nov 2024",
    yield: "45 tons",
    health: "Excellent",
  },
  {
    crop: "Wheat",
    area: "8 acres",
    progress: 45,
    status: "Planted",
    expectedHarvest: "Apr 2025",
    yield: "25 tons",
    health: "Good",
  },
  {
    crop: "Tomato",
    area: "4 acres",
    progress: 90,
    status: "Harvesting",
    expectedHarvest: "Ongoing",
    yield: "60 tons",
    health: "Good",
  },
  {
    crop: "Sugarcane",
    area: "3 acres",
    progress: 60,
    status: "Growing",
    expectedHarvest: "Mar 2025",
    yield: "180 tons",
    health: "Excellent",
  },
]

export function CropAnalytics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crop Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {cropData.map((crop, index) => (
            <div key={index} className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{crop.crop}</h4>
                  <p className="text-sm text-muted-foreground">
                    {crop.area} • {crop.status}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">{crop.yield}</p>
                  <p className="text-xs text-muted-foreground">{crop.expectedHarvest}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Growth Progress</span>
                  <span>{crop.progress}%</span>
                </div>
                <Progress value={crop.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Plant Health:</span>
                <span className={`font-medium ${crop.health === "Excellent" ? "text-green-600" : "text-yellow-600"}`}>
                  {crop.health}
                </span>
              </div>
              {index < cropData.length - 1 && <hr className="border-border" />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
