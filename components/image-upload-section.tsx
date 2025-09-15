"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ImageUploadSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    if (!selectedImage) return
    setIsAnalyzing(true)

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)
    }, 3000)
  }

  const handleCameraCapture = () => {
    fileInputRef.current?.click()
  }

  const handleGallerySelect = () => {
    fileInputRef.current?.click()
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Upload Plant Image
          <Badge variant="secondary" className="bg-blue-100 text-blue-700">
            AI Powered
          </Badge>
        </CardTitle>
        <CardDescription>Take a photo or upload an image of your plant for instant disease detection</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Image Preview */}
        <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
          {selectedImage ? (
            <div className="space-y-4">
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Selected plant"
                className="max-w-full h-64 object-cover rounded-lg mx-auto"
              />
              <div className="flex gap-2 justify-center">
                <Button variant="outline" size="sm" onClick={() => setSelectedImage(null)}>
                  Remove
                </Button>
                <Button onClick={handleAnalyze} disabled={isAnalyzing}>
                  {isAnalyzing ? "Analyzing..." : "Analyze Plant"}
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
                <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-lg font-medium">Upload Plant Image</p>
                <p className="text-sm text-muted-foreground">
                  For best results, ensure good lighting and focus on affected areas
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Upload Options */}
        {!selectedImage && (
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" onClick={handleCameraCapture} className="h-12 bg-transparent">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Take Photo
            </Button>
            <Button variant="outline" onClick={handleGallerySelect} className="h-12 bg-transparent">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              From Gallery
            </Button>
          </div>
        )}

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageUpload}
          className="hidden"
        />

        {/* Tips */}
        <div className="bg-muted/50 rounded-lg p-4">
          <h4 className="font-medium text-sm mb-2">Photography Tips:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Ensure good natural lighting</li>
            <li>• Focus on affected leaves or areas</li>
            <li>• Keep the camera steady</li>
            <li>• Include some healthy parts for comparison</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
