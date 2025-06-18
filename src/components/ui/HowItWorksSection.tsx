"use client";

import { Mic, BarChart3, Pill } from "lucide-react";
import React, { useEffect } from "react";

const steps = [
  {
    icon: (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-white">
        <Mic className="w-10 h-10 text-white" />
        <span className="text-white font-bold text-lg mt-2">01</span>
      </div>
    ),
    title: "Speak or Enter Appointment",
    desc: "Simply speak to book appointments or enter them manually. Our AI processes natural language and schedules efficiently.",
    align: "left",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-white">
        <BarChart3 className="w-10 h-10 text-white" />
        <span className="text-white font-bold text-lg mt-2">02</span>
      </div>
    ),
    title: "View Dashboard & History",
    desc: "Access comprehensive patient information, appointment history, and real-time updates in one centralized dashboard.",
    align: "right",
  },
  {
    icon: (
      <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl w-24 h-24 flex flex-col items-center justify-center shadow-lg border-4 border-white">
        <Pill className="w-10 h-10 text-white" />
        <span className="text-white font-bold text-lg mt-2">03</span>
      </div>
    ),
    title: "Generate and Save Prescriptions",
    desc: "Leverage AI-powered prescription suggestions based on symptoms and medical history for accurate treatment plans.",
    align: "left",
  },
];

export function HowItWorksSection() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({ duration: 700, once: true, offset: 80 });
      });
    }
  }, []);

  return (
    <section className="w-full py-20 bg-gradient-to-b from-white to-[#f6fbff] flex flex-col items-center relative overflow-x-hidden">
      {/* Badge */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-full text-sm shadow">
          <span className="text-lg">🚀</span> Simple Process
        </span>
      </div>
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-3 text-gray-900">
        How{" "}
        <span className="bg-gradient-to-r from-blue-600 to-purple-500 text-transparent bg-clip-text">
          ClinicFlow
        </span>{" "}
        Works
      </h2>
      <p className="text-gray-600 text-center max-w-2xl mb-12 text-lg">
        Three simple steps to transform your healthcare workflow and boost
        efficiency
      </p>
      {/* Timeline */}
      <div className="relative w-full max-w-5xl flex flex-col items-center">
        {/* Vertical line */}
        <div
          className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 z-0"
          style={{ transform: "translateX(-50%)" }}
        />
        {/* Steps */}
        {steps.map((step, i) => (
          <div
            key={i}
            className={`relative flex flex-col md:flex-row items-center w-full mb-16 group`}
            style={{
              flexDirection: i % 2 === 0 ? "row" : "row-reverse",
            }}
            data-aos="fade-up"
            data-aos-delay={i * 150}
          >
            {/* Icon */}
            <div
              className={`z-10 flex-shrink-0 ${
                i % 2 === 0 ? "md:mr-8" : "md:ml-8"
              }`}
            >
              {step.icon}
            </div>
            {/* Card */}
            <div
              className={`bg-white rounded-2xl shadow-xl p-8 flex-1 max-w-2xl ${
                i % 2 === 0 ? "md:ml-8" : "md:mr-8"
              } mt-8 md:mt-0`}
            >
              <h3 className="font-extrabold text-2xl mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-base">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

 {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to streamline your clinic?
            </h3>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
              Start Free Trial
            </button>
          </div>
        </div>

    </section>
  );
}
