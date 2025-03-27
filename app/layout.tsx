// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Possibly insert a Shadcn UI navbar here */}
          <nav className="flex justify-center p-4 sticky">
            <a className="px-3 hover:underline" href="/"> Home</a>
            <a className="px-3 hover:underline" href="/projects"> Projects </a>
            <a className="px-3 hover:underline" href="/jobs"> Jobs </a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="p-4 text-center">
          <p>2025 My Portfolio</p>
        </footer>
      </body>
    </html>
  )
}
