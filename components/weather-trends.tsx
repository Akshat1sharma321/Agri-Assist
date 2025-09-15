import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const weatherData = [
  { day: "Mon", temp: 28, humidity: 65, rainfall: 0 },
  { day: "Tue", temp: 30, humidity: 70, rainfall: 5 },
  { day: "Wed", temp: 27, humidity: 75, rainfall: 12 },
  { day: "Thu", temp: 29, humidity: 68, rainfall: 0 },
  { day: "Fri", temp: 31, humidity: 60, rainfall: 0 },
  { day: "Sat", temp: 26, humidity: 80, rainfall: 18 },
  { day: "Sun", temp: 28, humidity: 72, rainfall: 8 },
]

export function WeatherTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>7-Day Weather Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Weather Chart Simulation */}
          <div className="grid grid-cols-7 gap-2 text-center">
            {weatherData.map((day, index) => (
              <div key={index} className="space-y-2">
                <p className="text-xs font-medium">{day.day}</p>
                <div className="bg-muted rounded-lg p-2 space-y-1">
                  <p className="text-sm font-bold">{day.temp}°C</p>
                  <div className="w-full bg-blue-200 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${day.humidity}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground">{day.humidity}%</p>
                  {day.rainfall > 0 && <p className="text-xs text-blue-600">{day.rainfall}mm</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Weather Summary */}
          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h4 className="font-medium text-sm">Weekly Summary</h4>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Avg Temperature</p>
                <p className="font-medium">28.4°C</p>
              </div>
              <div>
                <p className="text-muted-foreground">Total Rainfall</p>
                <p className="font-medium">43mm</p>
              </div>
              <div>
                <p className="text-muted-foreground">Avg Humidity</p>
                <p className="font-medium">70%</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
