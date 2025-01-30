import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const { name, email, password } = await request.json()

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    })

    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already exists" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    })

    return NextResponse.json({ success: true, message: "User registered successfully", id: newUser.id })
  } catch (error) {
    console.error("Registration error:", error)
    return NextResponse.json({ success: false, message: "An error occurred during registration" }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}

