// app/jobs/[name]/page.tsx
import { jobs } from "@/lib/data"
import { notFound } from "next/navigation"
import Link from "next/link"

interface JobPageProps {
  params: {
    name: string
  }
}

export default async function JobPage({ params }: JobPageProps) {
  const job = jobs.find((j) => j.name === params.name)

  if (!job) {
    notFound()
  }

  return (
    <section className="min-h-screen bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-6 py-12">
        <Link
          href="/jobs"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          ← Back to Jobs
        </Link>

        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                <div className="w-32 h-32 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center p-4">
                  <img
                    src={job.logoUrl || "/placeholder.svg"}
                    alt={job.company}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.role}</h1>
                <h2 className="text-xl text-blue-600 font-medium mb-4">{job.company}</h2>
                <div className="text-gray-500 text-sm mb-4">
                  <span>
                    {job.startDate} - {job.endDate}
                  </span>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="font-semibold text-gray-900 mb-3">Job Description</h3>
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{job.description}</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="bg-blue-50 rounded-lg p-4 text-blue-800">
                <p className="font-medium">Want to learn more about my experience at {job.company}?</p>
                <p className="text-sm mt-1">
                  Feel free to contact me for more details about my responsibilities and achievements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

