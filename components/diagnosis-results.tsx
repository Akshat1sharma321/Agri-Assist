import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const diagnosisData = {
  disease: "Late Blight",
  confidence: 92,
  severity: "Moderate",
  plant: "Tomato",
  description:
    "Late blight is a destructive disease that affects tomato plants, causing dark lesions on leaves and stems.",
  symptoms: [
    "Dark, water-soaked lesions on leaves",
    "White fuzzy growth on leaf undersides",
    "Brown spots on stems",
    "Fruit rot in advanced stages",
  ],
  treatment: [
    "Remove affected plant parts immediately",
    "Apply copper-based fungicide",
    "Improve air circulation around plants",
    "Avoid overhead watering",
  ],
  prevention: [
    "Plant resistant varieties",
    "Ensure proper spacing between plants",
    "Water at soil level, not on leaves",
    "Apply preventive fungicide sprays",
  ],
}

export function DiagnosisResults() {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Diagnosis Results</h2>

      <Card className="border-l-4 border-l-orange-500">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-orange-700">{diagnosisData.disease}</CardTitle>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              {diagnosisData.confidence}% Confidence
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">Detected in {diagnosisData.plant}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Severity and Confidence */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-2">Disease Severity</p>
              <Badge variant={diagnosisData.severity === "Moderate" ? "secondary" : "destructive"}>
                {diagnosisData.severity}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Detection Confidence</p>
              <div className="space-y-1">
                <Progress value={diagnosisData.confidence} className="h-2" />
                <p className="text-xs text-muted-foreground">{diagnosisData.confidence}% accurate</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="font-medium mb-2">Description</h4>
            <p className="text-sm text-muted-foreground">{diagnosisData.description}</p>
          </div>

          {/* Symptoms */}
          <div>
            <h4 className="font-medium mb-2">Symptoms to Look For</h4>
            <ul className="space-y-1">
              {diagnosisData.symptoms.map((symptom, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  {symptom}
                </li>
              ))}
            </ul>
          </div>

          {/* Treatment */}
          <div>
            <h4 className="font-medium mb-2 text-green-700">Immediate Treatment</h4>
            <ul className="space-y-1">
              {diagnosisData.treatment.map((treatment, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  {treatment}
                </li>
              ))}
            </ul>
          </div>

          {/* Prevention */}
          <div>
            <h4 className="font-medium mb-2 text-blue-700">Prevention Tips</h4>
            <ul className="space-y-1">
              {diagnosisData.prevention.map((tip, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4">
            <Button size="sm" className="flex-1">
              Save Report
            </Button>
            <Button variant="outline" size="sm" className="flex-1 bg-transparent">
              Get Expert Help
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
