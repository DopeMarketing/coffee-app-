import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-6xl mb-4">☕</div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Coffee App</h1>
            <p className="text-xl text-gray-700 mb-8">
              Track your daily coffee consumption with ease
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-12">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📊</div>
                <h3 className="font-semibold text-lg mb-2">Quick Tracking</h3>
                <p className="text-gray-600">Log your coffee with simple tap counters and timestamps</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📈</div>
                <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                <p className="text-gray-600">View weekly and monthly consumption trends</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">☕</div>
                <h3 className="font-semibold text-lg mb-2">Cup Sizes</h3>
                <p className="text-gray-600">Track different cup sizes from small to large</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Link
              href="/signup"
              className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold border border-amber-600 hover:bg-amber-50 transition duration-200"
            >
              Sign In
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Track Your Coffee?</h2>
            <div className="max-w-2xl mx-auto text-left space-y-4 text-gray-700">
              <p>
                Many coffee drinkers lose track of their daily consumption, making it difficult to understand their caffeine intake patterns and how it affects their health and sleep.
              </p>
              <p>
                Coffee App provides a simple solution to monitor your coffee habits with quick logging, daily timestamps, and insightful analytics to help you make informed decisions about your caffeine consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}