import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen h-screen flex bg-black">
      {/* Left Side - Branding/Info Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-violet-950 via-purple-900 to-black relative overflow-hidden border-r border-violet-500/20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-violet-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16">
          <div className="mb-8">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-none hover:from-violet-600 hover:to-fuchsia-600 shadow-lg shadow-violet-500/50 px-4 py-1">
              <span className="text-lg">💻</span> LeetCode Platform
            </Badge>
            <h1 className="text-6xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
                Master Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-fuchsia-300 via-pink-300 to-violet-300 bg-clip-text text-transparent animate-pulse">
                Coding Journey
              </span>
            </h1>
            <p className="text-xl text-violet-200 leading-relaxed max-w-md font-light">
              Join thousands of developers leveling up their skills.
              <span className="text-fuchsia-300 font-medium"> Practice, compete, </span>
              and dominate technical interviews.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-5 mt-10">
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">⚡</span>
              </div>
              <span className="text-lg text-violet-100 font-medium">1000+ coding challenges across all levels</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-600 shadow-lg shadow-fuchsia-500/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">🚀</span>
              </div>
              <span className="text-lg text-violet-100 font-medium">Lightning-fast code execution engine</span>
            </div>
            <div className="flex items-center space-x-4 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 shadow-lg shadow-purple-500/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl">📊</span>
              </div>
              <span className="text-lg text-violet-100 font-medium">Advanced progress tracking & analytics</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-violet-500/20">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">10K+</div>
              <div className="text-sm text-violet-300 mt-1">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">50K+</div>
              <div className="text-sm text-violet-300 mt-1">Solutions</div>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">95%</div>
              <div className="text-sm text-violet-300 mt-1">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-black relative overflow-hidden p-8">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8 text-center">
            <Badge className="mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white border-none shadow-lg shadow-violet-500/50 px-4 py-1">
              <span className="text-lg">💻</span> LeetCode Platform
            </Badge>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Start Your Journey
            </h2>
          </div>

          {/* Auth Card */}
          <Card className="border border-violet-500/30 shadow-2xl shadow-violet-500/20 bg-gradient-to-br from-zinc-900/90 via-black/90 to-violet-950/90 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5"></div>
            <div className="relative p-8">
              {children}
            </div>
          </Card>

          {/* Footer Text */}
          <p className="text-center text-sm text-violet-400/70 mt-6 font-light">
            By continuing, you agree to our{" "}
            <span className="text-violet-300 hover:text-violet-200 cursor-pointer underline decoration-violet-500/50">Terms</span>
            {" "}and{" "}
            <span className="text-violet-300 hover:text-violet-200 cursor-pointer underline decoration-violet-500/50">Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default AuthLayout