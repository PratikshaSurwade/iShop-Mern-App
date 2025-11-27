import { useState } from 'react';

export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Pratiksha Surwade",
    email: "pratiksha@gmail.com",
    phone: "9876543210",
  });

  return (
    <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-xl rounded-3xl shadow-lg p-8 space-y-10">
        {/* Profile Section */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-600 tracking-wide uppercase">Profile</h2>
          <div className="flex items-center gap-6">
            <img
              src="https://via.placeholder.com/120"
              className="w-24 h-24 rounded-full border border-gray-300"
            />
            <div className="flex flex-col gap-1">
              <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
              <button className="text-blue-500 text-sm hover:underline">Change Photo</button>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-b border-gray-300"></div>

        {/* Orders Section */}
        <section className="space-y-6">
          <h2 className="text-lg font-semibold text-gray-600 tracking-wide uppercase">Activity</h2>
          <div className="w-full h-52 border border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            Chart Placeholder
          </div>
        </section>
      </div>
    </div>
  );
}
