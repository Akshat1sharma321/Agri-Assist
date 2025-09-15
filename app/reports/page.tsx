import { ReportOverview } from "@/components/report-overview"
import { CropAnalytics } from "@/components/crop-analytics"
import { WeatherTrends } from "@/components/weather-trends"
import { RecommendationHistory } from "@/components/recommendation-history"
import { ExportOptions } from "@/components/export-options"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-primary text-primary-foreground p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <div>
            <h1 className="text-xl font-bold">Farm Analytics</h1>
            <p className="text-primary-foreground/80 text-sm">Comprehensive farm data reports</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        <ReportOverview />
        <CropAnalytics />
        <WeatherTrends />
        <RecommendationHistory />
        <ExportOptions />
      </main>

      <BottomNavigation />
    </div>
  )
}
