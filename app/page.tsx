"use client"
import AnimatedBackground from "./components/animated-background"

export default function HomePage() {
  return (
    <section>
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Hero Section */}
      <div className="h-screen flex items-center justify-center">
        <div className="text-white text-center p-8 bg-black/30 backdrop-blur-md rounded-lg max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Hello, I am Ethan Stapley</h1>
          <p className="text-xl">I am a current computer science student at Utah State University!</p>
        </div>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-16 bg-white">
        <img
          src="/images/profile-picture.png"
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-black"
        />
        <div className="max-w-2xl text-center px-4">
          <h2 className="text-2xl font-bold mb-4 text-gray-700">About Me</h2>
          <p className="text-gray-700">
            I am a duck, secretly disguised as a human
          </p>
        </div>
      </div>
    </section>
  )
}

