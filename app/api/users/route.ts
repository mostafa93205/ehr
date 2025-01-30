import { NextResponse } from "next/server"

// This is a mock user database. In a real application, you would use a proper database.
const users = [
  { id: 1, name: "Admin User", email: "admin@example.com", role: "admin" },
  { id: 2, name: "Regular User", email: "user@example.com", role: "user" },
]

export async function GET() {
  // In a real application, you would check for admin authentication here
  return NextResponse.json(users)
}

