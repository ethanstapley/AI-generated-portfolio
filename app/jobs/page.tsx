import Link from "next/link"
import { jobs } from "@/lib/data"

export default function JobsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-800">
      <div className="max-w-6xl mx-auto p-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">My Professional Experience</h1>

        <div className="space-y-5">
          {jobs.map((job) => (
            <Link
              key={job.name}
              href={`/jobs/${job.name}`}
              className="block border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow bg-white"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl text-gray-900 mb-1">{job.role}</h2>
                  <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                  <p className="text-gray-500 text-sm">
                    {job.startDate} - {job.endDate}
                  </p>
                </div>
                <div className="text-gray-400 text-sm hidden md:block">Click to view details →</div>
              </div>
              <div className="mt-4 text-gray-600 line-clamp-2">{job.description.substring(0, 150)}...</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

