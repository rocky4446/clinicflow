"use client";

import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
	{
		quote: 'ClinicFlow has revolutionized how we handle appointments. The AI suggestions are incredibly accurate and save us hours every day.',
		author: 'Dr. Sarah Johnson',
		role: 'Cardiologist at Heart Health Center',
		avatar: 'SJ',
		stars: 5,
		verified: true,
	},
	{
		quote: 'Voice booking saves us hours every day. Patients love how easy it is to schedule appointments, and our staff efficiency has improved by 40%.',
		author: 'Mike Chen',
		role: 'Clinic Manager at Downtown Medical',
		avatar: 'MC',
		stars: 5,
		verified: true,
	},
	{
		quote: "The prescription AI has improved our diagnostic accuracy by 40%. It's like having a medical assistant that never sleeps.",
		author: 'Dr. Emily Rodriguez',
		role: 'Family Medicine Physician',
		avatar: 'ER',
		stars: 5,
		verified: true,
	},
];

const stats = [
	{ number: '10,000+', label: 'Appointments Booked', icon: '📅' },
	{ number: '500+', label: 'Healthcare Providers', icon: '👨‍⚕️' },
	{ number: '99.9%', label: 'Uptime Guaranteed', icon: '⚡' },
	{ number: '4.9★', label: 'User Rating', icon: '⭐' },
];

const TestimonialsSection = () => {
	const [activeTestimonial, setActiveTestimonial] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="testimonials"
			className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden w-full"
		>
			{/* Animated Background */}
			<div className="absolute inset-0 pointer-events-none select-none">
				<div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
				<div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-float-delayed"></div>
				<div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-float-slow"></div>
			</div>

			<div className="container mx-auto px-6 relative z-10 max-w-7xl">
				{/* Stats Section */}
				<div className="mb-20">
					<div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
							{stats.map((stat, index) => (
								<div key={index} className="group">
									<div className="text-4xl mb-2">{stat.icon}</div>
									<div className="text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
										{stat.number}
									</div>
									<div className="text-blue-100 text-sm">{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Testimonials Header */}
				<div className="text-center mb-16">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-100 text-sm font-medium mb-6">
						💬 What Our Users Say
					</div>
					<h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
						Trusted by{' '}
						<span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
							Healthcare Professionals
						</span>
					</h2>
					<p className="text-xl text-blue-100 max-w-3xl mx-auto">
						See how ClinicFlow is transforming healthcare workflows worldwide
					</p>
				</div>

				{/* Main Testimonial Carousel */}
				<div className="max-w-4xl mx-auto mb-16">
					<div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
						<Quote className="w-16 h-16 text-blue-300 mb-6" />
						<div className="transition-all duration-500 ease-in-out">
							<blockquote className="text-2xl text-white mb-8 leading-relaxed font-medium">
								&quot;{testimonials[activeTestimonial].quote}&quot;
							</blockquote>
							<div className="flex items-center justify-between flex-wrap gap-4">
								<div className="flex items-center">
									<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
										{testimonials[activeTestimonial].avatar}
									</div>
									<div>
										<div className="flex items-center mb-1">
											<span className="font-semibold text-white text-lg mr-2">
												{testimonials[activeTestimonial].author}
											</span>
											{testimonials[activeTestimonial].verified && (
												<div className="bg-green-500 rounded-full p-1">
													<svg
														className="w-3 h-3 text-white"
														fill="currentColor"
														viewBox="0 0 20 20"
													>
														<path
															fillRule="evenodd"
															d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
															clipRule="evenodd"
														/>
													</svg>
												</div>
											)}
										</div>
										<div className="text-blue-200 text-sm">
											{testimonials[activeTestimonial].role}
										</div>
									</div>
								</div>
								<div className="flex">
									{[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
										<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
									))}
								</div>
							</div>
						</div>
						{/* Navigation Dots */}
						<div className="flex justify-center mt-8 space-x-3">
							{testimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => setActiveTestimonial(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === activeTestimonial
											? 'bg-blue-400 scale-125'
											: 'bg-white/30 hover:bg-white/50'
									}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Secondary Testimonials Grid */}
				<div className="grid md:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className={`bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
								index === activeTestimonial ? 'ring-2 ring-blue-400 scale-105' : ''
							}`}
							onClick={() => setActiveTestimonial(index)}
						>
							<div className="flex mb-4">
								{[...Array(testimonial.stars)].map((_, i) => (
									<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
								))}
							</div>
							<p className="text-white/90 text-sm mb-4 line-clamp-3">
								&quot;{testimonial.quote}&quot;
							</p>
							<div className="flex items-center">
								<div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
									{testimonial.avatar}
								</div>
								<div>
									<div className="font-medium text-white text-sm">
										{testimonial.author}
									</div>
									<div className="text-blue-200 text-xs">
										{testimonial.role}
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TestimonialsSection;
