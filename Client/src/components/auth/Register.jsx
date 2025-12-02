export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-lg space-y-6">

        {/* Title */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Create Account ✨</h1>
          <p className="text-gray-500 text-sm">Join us and start shopping!</p>
        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Enter Full Name</label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="w-full border-b border-gray-300 focus:border-black p-2 outline-none"
            />
          </div>

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
            <label className="text-gray-600 text-sm">Enter your Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full border-b border-gray-300 focus:border-black p-2 outline-none"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-600 text-sm">Phone Number</label>
            <input
              type="text"
              placeholder="9876543210"
              className="w-full border-b border-gray-300 focus:border-black p-2 outline-none"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-xl hover:opacity-80 transition"
          >
            Create Account
          </button>
        </form>

        <div className="relative flex items-center justify-center py-2">
          <span className="w-1/3 border-b border-gray-300"></span>
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <span className="w-1/3 border-b border-gray-300"></span>
        </div>

        <button className="w-full border border-gray-400 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-100 transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5 h-5" />
          <span>Continue with Google</span>
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm">
          Already have an account? <button className="text-blue-500 hover:underline">Login</button>
        </p>
      </div>
    </div>
  );
}