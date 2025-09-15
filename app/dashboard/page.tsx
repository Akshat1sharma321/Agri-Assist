import { WeatherCard } from "@/components/weather-card"
import { SoilConditionsCard } from "@/components/soil-conditions-card"
import { QuickActionsGrid } from "@/components/quick-actions-grid"
import { RecentActivityCard } from "@/components/recent-activity-card"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold">Good morning, Kishan</h1>
            <p className="text-primary-foreground/80 text-sm">Ready to optimize your farm today?</p>
          </div>
          <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        {/* Weather and Soil Conditions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WeatherCard />
          <SoilConditionsCard />
        </div>

        {/* Quick Actions */}
        <QuickActionsGrid />

        {/* Recent Activity */}
        <RecentActivityCard />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
