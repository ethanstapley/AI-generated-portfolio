import Link from "next/link"
import { projects } from "@/lib/data"

export default function ProjectsPage() {
  return (
    <section className="p-4 min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              key={project.name}
              href={`/projects/${project.name}`}
              className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
            >
              <h2 className="font-semibold text-xl text-gray-900 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-3">{project.description.substring(0, 100)}...</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

