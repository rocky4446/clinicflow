"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@/lib/UserContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Doctor");
  const [error, setError] = useState("");
  const router = useRouter();
  const { setUser, user, loading } = useUser();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [user, loading, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (role !== "Doctor") {
      setError("Only doctors are allowed to log in.");
      return;
    }
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }
      setUser(data.user);
    } catch {
      setError("Login failed. Please try again.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg animate-float-slow" />
      <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-16 items-center">
        {/* Left Card */}
        <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-14 w-[350px] md:w-[420px] flex flex-col justify-between min-h-[420px] border border-white/30">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ClinicFlow</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 text-gray-900">Welcome back to modern healthcare</h2>
            <p className="text-base md:text-lg text-gray-700 mb-8">Sign in to manage appointments, patients, and prescriptions with ClinicFlow&apos;s voice-powered platform.</p>
          </div>
          <div className="flex gap-4 mt-8">
            <div className="bg-blue-100/60 rounded-xl px-6 py-4 flex flex-col items-center">
              <span className="text-xl font-bold text-blue-700">10K+</span>
              <span className="text-sm text-blue-700">Appointments</span>
            </div>
            <div className="bg-blue-100/60 rounded-xl px-6 py-4 flex flex-col items-center">
              <span className="text-xl font-bold text-blue-700">500+</span>
              <span className="text-sm text-blue-700">Providers</span>
            </div>
          </div>
        </div>
        {/* Right Card */}
        <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 w-[350px] md:w-[400px] flex flex-col items-center border border-white/40">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2 text-center text-gray-900">Sign in to ClinicFlow</h2>
          <p className="text-gray-500 mb-6 text-center">Enter your credentials to continue</p>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">Email</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {/* Email icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#9ca3af" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm2 0v.01L12 13l8-6.99V6H4Zm16 2.236-7.447 6.5a1 1 0 0 1-1.106 0L4 8.236V18h16V8.236Z"/></svg>
                </span>
                <input id="email" type="email" placeholder="doctor@clinic.com" className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">Password</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {/* Password icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#9ca3af" d="M12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm6-6V9a6 6 0 1 0-12 0v2a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-8-2a4 4 0 1 1 8 0v2H6V9Z"/></svg>
                </span>
                <input id="password" type="password" placeholder="Enter your password" className="pl-10 pr-10 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="role">Role</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {/* User icon */}
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z"/></svg>
                </span>
                <select id="role" className="pl-10 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:border-blue-400 outline-none bg-gray-50" value={role} onChange={e => setRole(e.target.value)}>
                  <option>Doctor</option>
                  <option>Nurse</option>
                  <option>Admin</option>
                </select>
              </div>
            </div>
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <Button type="submit" className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl transition-colors text-lg shadow-lg">Sign In</Button>
          </form>
          <Link href="/" className="mt-6 text-blue-600 hover:underline flex items-center gap-1 text-sm">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M10.828 12l4.95-4.95a1 1 0 1 0-1.414-1.414l-6.364 6.364a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414-1.414L10.828 12Z"/></svg>
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
