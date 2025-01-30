import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { writeFile } from "fs/promises"
import path from "path"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const formData = await request.formData()
  const file = formData.get("file") as File
  const patientId = formData.get("patientId") as string

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // Save the file to the server
  const filename = file.name
  const uploadDir = path.join(process.cwd(), "public", "uploads")
  const filepath = path.join(uploadDir, filename)
  await writeFile(filepath, buffer)

  try {
    // Save file information to the database
    const savedFile = await prisma.file.create({
      data: {
        filename: filename,
        path: `/uploads/${filename}`,
        mimetype: file.type,
        size: file.size,
        patientId: patientId,
      },
    })

    return NextResponse.json({ message: "File uploaded successfully", file: savedFile })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "File upload failed" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

