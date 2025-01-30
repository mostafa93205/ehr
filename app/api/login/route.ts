import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { id, email, password } = await request.json()

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
        email: email,
      },
    })

    if (!user) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
    }

    // In a real application, you would create a session or JWT here
    return NextResponse.json({ success: true, role: user.role, userId: user.id })
  } catch (error) {
    console.error("Login error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during login" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

