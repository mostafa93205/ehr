"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UploadCloud } from "lucide-react"

interface FileUploadProps {
  patientId: string
  onUploadComplete: () => void
}

export function FileUpload({ patientId, onUploadComplete }: FileUploadProps) {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = async () => {
    if (!file) return

    setUploading(true)
    const formData = new FormData()
    formData.append("file", file)
    formData.append("patientId", patientId)

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        alert("File uploaded successfully")
        setFile(null)
        onUploadComplete()
      } else {
        throw new Error("File upload failed")
      }
    } catch (error) {
      console.error("Upload error:", error)
      alert("File upload failed")
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-4">
        <Label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex items-center space-x-2 p-2 border border-dashed rounded-md hover:bg-gray-50">
            <UploadCloud className="h-6 w-6 text-gray-400" />
            <span className="text-sm text-gray-600">Choose a file</span>
          </div>
          <Input id="file-upload" type="file" className="hidden" onChange={handleFileChange} disabled={uploading} />
        </Label>
        {file && <span className="text-sm text-gray-600">{file.name}</span>}
      </div>
      <Button onClick={handleUpload} disabled={!file || uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </Button>
    </div>
  )
}

