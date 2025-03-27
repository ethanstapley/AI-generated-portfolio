import { projects } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    name: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.name === params.name)

  if (!project) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <Link
          href="/projects"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Back to Projects
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="w-full bg-gray-100 flex justify-center p-4">
            <img
              src={project.imageUrl || "/placeholder.svg"}
              alt={project.title}
              className="max-w-full max-h-[400px] object-contain "
            />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <h1 className="text-3xl font-bold text-gray-900">{project.title}</h1>
              <div className="text-gray-500 text-sm">
                <span>
                  {project.startDate} - {project.endDate}
                </span>
              </div>
            </div>

            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h2 className="font-semibold text-gray-900 mb-3">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

