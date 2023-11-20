"use client"
import { useSession } from "next-auth/react"

export default function Home() {
  const { data: session, status } = useSession();
  return (
  <main>
  <div>Hello, my name is {session?.user.name}</div>
  </main>
  )
}
