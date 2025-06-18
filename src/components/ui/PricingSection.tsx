"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Free',
    price: { monthly: 0, yearly: 0 },
    description: 'Perfect for small clinics getting started',
    features: [
      'Up to 50 appointments/month',
      'Basic voice recognition',
      'Standard dashboard',
      'Email support',
      'Basic analytics',
      'Mobile app access'
    ],
    popular: false,
    cta: 'Start Free',
    icon: Zap,
    color: 'from-gray-600 to-gray-700',
    bgColor: 'bg-gray-50'
  },
  {
    name: 'Pro',
    price: { monthly: 49, yearly: 39 },
    description: 'For growing practices with advanced needs',
    features: [
      'Unlimited appointments',
      'Advanced AI prescriptions',
      'Real-time sync across devices',
      'Priority support (24/7)',
      'Advanced analytics & insights',
      'Custom integrations',
      'Multi-location support',
      'API access',
      'White-label options'
    ],
    popular: true,
    cta: 'Start Free Trial',
    icon: Crown,
    color: 'from-blue-600 to-indigo-600',
    bgColor: 'bg-blue-50'
  }
];

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden" data-aos="fade-up">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/50 backdrop-blur-sm border border-green-200/30 text-green-700 text-sm font-medium mb-6">
            💰 Simple Pricing
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform shadow-lg ${
                  isYearly ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
          {isYearly && (
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium animate-fade-in">
              🎉 Save 20% with yearly billing
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative group p-8 rounded-3xl border-2 transition-all duration-500 hover:-translate-y-2 ${
                plan.popular
                  ? 'border-blue-500 bg-white shadow-2xl scale-105 lg:scale-110'
                  : 'border-gray-200 bg-white shadow-lg hover:shadow-xl hover:border-blue-300'
              }`} data-aos="fade-up" data-aos-delay={index * 150}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    🏆 Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.color} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="text-center">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-6xl font-black text-gray-900">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      /month
                    </span>
                  </div>
                  {isYearly && plan.price.yearly < plan.price.monthly && (
                    <div className="text-sm text-green-600 font-medium">
                      Billed yearly (${plan.price.yearly * 12}/year)
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full py-4 text-lg font-semibold rounded-2xl transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                } transform hover:scale-105`}
              >
                {plan.cta}
              </Button>

              {/* Guarantee */}
              {plan.popular && (
                <div className="text-center mt-4">
                  <p className="text-sm text-gray-500">
                    ✅ 30-day money-back guarantee
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Features Comparison */}
        <div className="mt-20 text-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/30 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a demo with our team to find the perfect plan for your practice
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-medium"
              >
                Compare All Features
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl font-medium">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
