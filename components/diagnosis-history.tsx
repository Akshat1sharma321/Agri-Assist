import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const historyData = [
  {
    date: "2024-01-15",
    plant: "Tomato",
    disease: "Late Blight",
    severity: "Moderate",
    status: "Treated",
    image: "/tomato-disease.jpg",
  },
  {
    date: "2024-01-12",
    plant: "Wheat",
    disease: "Rust",
    severity: "Mild",
    status: "Monitoring",
    image: "/wheat-disease.jpg",
  },
  {
    date: "2024-01-10",
    plant: "Rice",
    disease: "Healthy",
    severity: "None",
    status: "Healthy",
    image: "/rice-healthy.jpg",
  },
]

export function DiagnosisHistory() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Diagnoses</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {historyData.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/50">
              <img
                src={item.image || "/placeholder.svg"}
                alt={`${item.plant} diagnosis`}
                className="w-12 h-12 rounded-lg object-cover bg-muted"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{item.plant}</p>
                  <Badge
                    variant={
                      item.status === "Healthy" ? "secondary" : item.status === "Treated" ? "default" : "outline"
                    }
                    className="text-xs"
                  >
                    {item.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{item.disease}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
