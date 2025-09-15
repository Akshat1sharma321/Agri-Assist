import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WeatherCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Weather Today
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold">28°C</p>
            <p className="text-sm text-muted-foreground">Partly Cloudy</p>
          </div>
          <div className="text-right text-sm">
            <p>Humidity: 65%</p>
            <p>Wind: 12 km/h</p>
          </div>
        </div>
        <div className="bg-muted rounded-lg p-3">
          <p className="text-sm font-medium text-primary">Farming Tip</p>
          <p className="text-sm text-muted-foreground">
            Perfect conditions for irrigation. Consider watering crops in the evening.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
