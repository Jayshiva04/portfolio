import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to Your Portfolio</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">About Me</h2>
          <p className="text-gray-600 mb-4">
            This is a modern portfolio built with React, TypeScript, Vite, and Tailwind CSS.
          </p>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Get in Touch
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
