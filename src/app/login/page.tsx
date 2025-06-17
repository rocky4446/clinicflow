import React from "react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5faff] to-[#eaf0fb]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Left Card */}
        <div className="bg-[#2563eb] rounded-3xl shadow-2xl p-10 md:p-14 w-[350px] md:w-[420px] text-white flex flex-col justify-between min-h-[420px]">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#3b82f6] p-2 rounded-xl">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path fill="#fff" d="M12 2a7 7 0 0 1 7 7v1.09a7.001 7.001 0 0 1-2.5 13.41A7.001 7.001 0 0 1 5 10.09V9a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v1.09a5.001 5.001 0 0 0 1.79 9.59A5.001 5.001 0 0 0 17 10.09V9a5 5 0 0 0-5-5Z"/></svg>
              </div>
              <span className="font-bold text-2xl">VoiceHealth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">Welcome back to the future of healthcare</h2>
            <p className="text-base md:text-lg text-blue-100 mb-8">Join thousands of healthcare professionals using our voice-powered appointment system to streamline their practice.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="bg-[#3b82f6] bg-opacity-30 rounded-xl px-6 py-4 flex flex-col items-center">
              <span className="text-xl font-bold">10K+</span>
              <span className="text-sm">Appointments</span>
            </div>
            <div className="bg-[#3b82f6] bg-opacity-30 rounded-xl px-6 py-4 flex flex-col items-center">
              <span className="text-xl font-bold">500+</span>
              <span className="text-sm">Providers</span>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 w-[350px] md:w-[400px] flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-center">Welcome back</h2>
          <p className="text-gray-500 mb-6 text-center">Sign in to your account to continue</p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#9ca3af" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 0v.01L12 13l8-6.99V6H4Zm16 2.236-7.447 6.5a1 1 0 0 1-1.106 0L4 8.236V18h16V8.236Z"/></svg>
                </span>
                <input id="email" type="email" placeholder="doctor@hospital.com" className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50" />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#9ca3af" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H6V9Z"/></svg>
                </span>
                <input id="password" type="password" placeholder="Enter your password" className="pl-10 pr-10 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50" />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#9ca3af" d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7Zm0 12c-4.418 0-7.364-3.134-8.484-5C4.636 8.134 7.582 5 12 5s7.364 3.134 8.484 5c-1.12 1.866-4.066 5-8.484 5Zm0-8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/></svg>
                </span>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="role">Role</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/></svg>
                </span>
                <select id="role" className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50">
                  <option>Doctor</option>
                  <option>Nurse</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            <button type="submit" className="mt-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold py-3 rounded-xl transition-colors">Sign In</button>
          </form>
          <Link href="/" className="mt-6 text-blue-500 hover:underline flex items-center gap-1 text-sm">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M10.828 12l4.95-4.95a1 1 0 1 0-1.414-1.414l-6.364 6.364a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L10.828 12Z"/></svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
