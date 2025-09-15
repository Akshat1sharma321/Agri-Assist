import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const activities = [
  {
    action: "Crop recommendation generated",
    time: "2 hours ago",
    icon: "🌱",
  },
  {
    action: "Disease scan completed",
    time: "1 day ago",
    icon: "📸",
  },
  {
    action: "Weather alert received",
    time: "2 days ago",
    icon: "🌦️",
  },
]

export function RecentActivityCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
              <div className="text-lg">{activity.icon}</div>
              <div className="flex-1">
                <p className="text-sm font-medium">{activity.action}</p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
