import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData()

  return (
    <div className="min-h-screen text-gray-100 px-4 py-10">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl p-8 space-y-8">

        {/* Profile Section */}
        <div className="text-center">
          <img
            src={data.avatar_url}
            alt="GitHub Profile"
            className="mx-auto w-36 h-36 rounded-full border-4 border-emerald-500 shadow-md"
          />
          <h1 className="text-3xl font-bold mt-4 text-emerald-400">{data.name}</h1>
          <p className="text-gray-300 italic">{data.bio}</p>

          <div className="mt-4 flex justify-center gap-8 text-lg">
            <p>👥 <span className="font-medium text-emerald-400">Followers:</span> {data.followers}</p>
            <p>➡️ <span className="font-medium text-emerald-400">Following:</span> {data.following}</p>
            <p>📦 <span className="font-medium text-emerald-400">Repositories:</span> {data.public_repos}</p>
          </div>
        </div>

        {/* GitHub Stats */}
        <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6 text-emerald-400">
            👨‍💻 GitHub Activity & Contributions
          </h2>

          <div className="space-y-6">
            <img
              src="https://ghchart.rshah.org/samarthpandey786"
              alt="GitHub Contributions Chart"
              className="mx-auto"
            />

           <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <img
                src="https://github-readme-stats.vercel.app/api?username=samarthpandey786&show_icons=true&theme=tokyonight"
                alt="GitHub Stats"
                className="rounded-md w-full max-w-xs sm:max-w-sm object-contain"
            />
            </div>

          </div>
        </div>

        {/* Visit Button */}
        <div className="text-center">
          <a
            href={data.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition duration-300"
          >
            🔗 Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}

export default GitHub

// Loader Function
export const githubinLoader = async () => {
  const response = await fetch("https://api.github.com/users/samarthpandey786")
  return response.json()
}
