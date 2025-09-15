import { ImageUploadSection } from "@/components/image-upload-section"
import { DiagnosisResults } from "@/components/diagnosis-results"
import { DiagnosisHistory } from "@/components/diagnosis-history"
import { BottomNavigation } from "@/components/bottom-navigation"

export default function DiagnosisPage() {
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
              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div>
            <h1 className="text-xl font-bold">Plant Disease Detection</h1>
            <p className="text-primary-foreground/80 text-sm">AI-powered plant health analysis</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-6">
        <ImageUploadSection />
        <DiagnosisResults />
        <DiagnosisHistory />
      </main>

      <BottomNavigation />
    </div>
  )
}
