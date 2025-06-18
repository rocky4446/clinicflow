import { Button } from '@/components/ui/button';
import { Mic, Brain, Stethoscope, Star } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden p-10 mt-5">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 animate-gradient-shift">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-teal-600/10"></div>
      </div>
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-indigo-200/40 rounded-full blur-lg animate-float-slow"></div>
        {/* Floating Stethoscope */}
        <div className="absolute top-1/3 right-1/4 animate-float-gentle">
          <Stethoscope className="w-8 h-8 text-blue-300/60" />
        </div>
      </div>
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full h-full">
          {/* Left Content - Glassmorphism Card */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex items-center h-full">
            <div className="relative w-full">
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl -m-8"></div>
              <div className="relative p-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 text-blue-700 text-sm font-medium mb-8 animate-slide-up">
                  🎙️ Now with AI-Powered Prescriptions
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8 animate-slide-up-delayed">
                  Streamline Your{' '}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent font-extrabold">
                    Clinic Workflow
                  </span>
                </h1>
                <p className="text-xl text-gray-700 mb-10 max-w-2xl leading-relaxed animate-slide-up-delayed-2 font-medium">
                  Voice-enabled bookings. Real-time appointments. AI-generated prescriptions.
                  Everything you need for modern healthcare management.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 animate-slide-up-delayed-3">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/25"
                  >
                    <span className="group-hover:animate-pulse">Try Free Demo</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-blue-600/30 bg-white/50 backdrop-blur-sm text-blue-700 hover:bg-blue-50/80 hover:border-blue-600/50 px-10 py-6 text-xl rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Book a Live Demo
                  </Button>
                </div>
                {/* Trust Bar */}
                <div className="mt-12 animate-fade-in-delayed">
                  <div className="flex items-center space-x-6 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">4.9/5</span>
                    </div>
                    <div className="w-px h-6 bg-gray-300"></div>
                    <span className="text-lg font-semibold">Trusted by 1,200+ Clinics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Content - Animated Dashboard */}
          <div className="lg:w-1/2 relative flex items-center h-full">
            <div className="relative animate-fade-in-right w-full">
              {/* Main Dashboard Card with 3D effect */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500 border border-white/50">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Today&apos;s Appointments</h3>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-lg text-gray-700 font-medium">Live</span>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-102">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">JS</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">John Smith</p>
                      <p className="text-gray-600 text-base">10:30 AM - Checkup</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 hover:from-teal-100 hover:to-cyan-100 transition-all duration-300 transform hover:scale-102">
                    <div className="w-14 h-14 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">MD</span>
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">Maria Davis</p>
                      <p className="text-gray-600 text-base">11:15 AM - Consultation</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Feature Cards */}
              <div className="absolute -top-6 -right-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 animate-float border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">Voice Active</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-6 animate-float-delayed border border-white/50">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-lg font-bold text-gray-800">AI Prescriptions</span>
                </div>
              </div>
              {/* Stats Card */}
              <div className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl p-4 animate-float-gentle border border-white/50">
                <div className="text-center">
                  <div className="text-3xl font-black text-blue-600">247</div>
                  <div className="text-sm text-gray-600 font-medium">Patients Today</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}