export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg space-y-6">

        {/* Logo / Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back 👋</h1>
          <p className="text-gray-500 text-sm">Login to continue shopping</p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border-b border-gray-300 focus:border-black p-2 outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border-b border-gray-300 focus:border-black p-2 outline-none"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button type="button" className="text-blue-500 text-sm hover:underline">
              Forgot password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-80 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="relative flex items-center justify-center py-2">
          <span className="w-1/3 border-b border-gray-300"></span>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <span className="w-1/3 border-b border-gray-300"></span>
        </div>

        {/* Google Login */}
        <button className="w-full border border-gray-400 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 text-sm">
          Don't have an account? <button className="text-blue-500 hover:underline">Sign Up</button>
        </p>
      </div>
    </div>
  );
}