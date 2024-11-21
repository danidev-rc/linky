import { useState } from 'react'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-900">
      {isLogin ? (
        <form
          action=""
          className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold text-white mb-6">Login</h1>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-4 py-2 text-white rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md flex items-center hover:bg-neutral-600 focus:outline-none focus:ring-2"
            >
              Login
            </button>
          </div>
          <div className="flex justify-between items-center text-white text-sm text-center mt-4 w-full">
            <p>Dont have an account?</p>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Register
            </button>
          </div>
        </form>
      ) : (
        <form
          action=""
          className="bg-neutral-900 p-8 border border-neutral-700 rounded-lg w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold text-white mb-6">
            Create Account
          </h1>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-300"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-neutral-900 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neutral-500"
            />
          </div>
          <div className="flex justify-center gap-4">
            <button
              type="button"
              className="px-4 py-2 text-white rounded-md hover:bg-neutral-500 focus:outline-none focus:ring-2 transition-colors duration-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-neutral-800 text-white rounded-md flex items-center hover:bg-neutral-600 focus:outline-none focus:ring-2"
            >
              Register
            </button>
          </div>
          <div className="flex justify-between items-center text-white text-sm text-center mt-4 w-full">
            <p>Already have an account?</p>
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
