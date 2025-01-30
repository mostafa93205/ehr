import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET() {
  try {
    const patients = await prisma.patient.findMany({
      include: {
        user: true,
        files: true,
      },
    })
    return NextResponse.json(patients)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch patients" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { name, email, password, dateOfBirth, gender, bloodType, allergies, medications } = data

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password, // In a real app, you should hash this password
        patient: {
          create: {
            dateOfBirth: new Date(dateOfBirth),
            gender,
            bloodType,
            allergies,
            medications,
          },
        },
      },
      include: {
        patient: true,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return NextResponse.json({ error: "Failed to create patient" }, { status: 500 })
  }
}

