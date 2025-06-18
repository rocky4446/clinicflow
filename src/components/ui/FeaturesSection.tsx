import { Mic, Calendar, Brain } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#f6fbff] flex flex-col items-center">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm shadow">
          <span className="text-lg">⚡</span> Powerful Features
        </span>
      </div>
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3 text-gray-900">
        Everything You Need for <span className="bg-gradient-to-r from-blue-600 to-teal-500 text-transparent bg-clip-text">Modern Healthcare</span>
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-12 text-lg">
        Streamline your practice with cutting-edge technology designed specifically for healthcare professionals
      </p>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {/* Voice Appointments */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start relative min-h-[240px] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-blue-50 hover:shadow-2xl hover:bg-blue-600">
          <div className="bg-blue-50 group-hover:bg-blue-100 rounded-xl p-3 mb-5 transition-colors duration-300">
            <Mic className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">Voice Appointments</h3>
          <p className="text-gray-600 group-hover:text-blue-100 text-base transition-colors duration-300">
            Book appointments naturally using voice commands. Our AI understands medical terminology and patient information with 99% accuracy.
          </p>
          <span className="absolute top-5 right-5 w-3 h-3 rounded-full bg-blue-100 group-hover:bg-white transition-colors duration-300" />
        </div>
        {/* Real-time Sync */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start relative min-h-[240px] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-teal-50 hover:shadow-2xl hover:bg-teal-400">
          <div className="bg-teal-50 group-hover:bg-teal-100 rounded-xl p-3 mb-5 transition-colors duration-300">
            <Calendar className="w-7 h-7 text-teal-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">Real-time Sync</h3>
          <p className="text-gray-600 group-hover:text-teal-50 text-base transition-colors duration-300">
            Instant synchronization across all devices. Doctors and receptionists stay updated in real-time with zero delays.
          </p>
          <span className="absolute top-5 right-5 w-3 h-3 rounded-full bg-teal-100 group-hover:bg-white transition-colors duration-300" />
        </div>
        {/* AI Prescriptions */}
        <div className="group bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start relative min-h-[240px] transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:bg-purple-50 hover:shadow-2xl hover:bg-purple-500">
          <div className="bg-purple-50 group-hover:bg-purple-100 rounded-xl p-3 mb-5 transition-colors duration-300">
            <Brain className="w-7 h-7 text-purple-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-white transition-colors duration-300">AI Prescriptions</h3>
          <p className="text-gray-600 group-hover:text-purple-100 text-base transition-colors duration-300">
            AI-powered prescription suggestions based on symptoms and medical history for faster, accurate treatment decisions.
          </p>
          <span className="absolute top-5 right-5 w-3 h-3 rounded-full bg-purple-100 group-hover:bg-white transition-colors duration-300" />
        </div>
      </div>
    </section>
  );
}
