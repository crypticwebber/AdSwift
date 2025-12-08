import React from "react";
import { CreditCard, Shield, Globe, Zap, CheckCircle } from "lucide-react";

const ATMCardSection = () => {
  const features = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Bank-Level Security",
      desc: "Military-grade encryption and fraud protection",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Acceptance",
      desc: "Use anywhere Visa/Mastercard is accepted worldwide",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Instant Transactions",
      desc: "Real-time crypto-to-fiat conversion at point of sale",
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      title: "No Hidden Fees",
      desc: "Transparent pricing with no surprise charges",
    },
  ];

  const cardBenefits = [
    "1% cashback on all purchases",
    "No foreign transaction fees",
    "Free ATM withdrawals up to $500/month",
    "Instant spending notifications",
    "Virtual card for online purchases",
    "Apple Pay & Google Pay compatible",
  ];

  return (
    <section className="w-full py-24 bg-gradient-to-b from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <CreditCard className="w-8 h-8 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">
              Crypto Meets Convenience
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Your Crypto, Ready to Spend
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Convert your cryptocurrency to fiat instantly with our premium metal
            card. Spend anywhere, anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Card Visualization */}
          <div className="relative">
            {/* Floating Card Design */}
            <div className="relative z-10">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 rounded-3xl p-8 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Card Shine Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/10 to-transparent"></div>

                {/* Card Chip */}
                <div className="w-14 h-10 bg-gradient-to-br from-amber-400 to-amber-300 rounded-lg flex items-center justify-center mb-8">
                  <div className="grid grid-cols-2 gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-amber-700/30 rounded"
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Card Number */}
                <div className="mb-6">
                  <div className="text-white/90 text-sm mb-1">Card Number</div>
                  <div className="flex items-center gap-3 text-white text-xl font-mono tracking-widest">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span className="text-white">3892</span>
                  </div>
                </div>

                {/* Card Details */}
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-white/90 text-sm mb-1">
                      Card Holder
                    </div>
                    <div className="text-white font-medium">
                      ADSWIFT CONNECT
                    </div>
                  </div>
                  <div>
                    <div className="text-white/90 text-sm mb-1">Valid Thru</div>
                    <div className="text-white font-medium">08/28</div>
                  </div>
                  <div className="text-right">
                    <div className="text-white/90 text-sm mb-1">Network</div>
                    <div className="text-2xl font-bold text-white">VISA</div>
                  </div>
                </div>

                {/* NFC Contactless Indicator */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 rounded-full border-2 border-white/50 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-white/70"></div>
                    </div>
                    <span className="text-xs text-white/80 font-medium">
                      Contactless
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Secondary Card */}
              <div className="absolute -bottom-6 -right-6 w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl transform rotate-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/5 to-transparent"></div>
                <div className="relative z-10">
                  <div className="text-white/90 text-xs mb-2">Virtual Card</div>
                  <div className="flex items-center gap-2 text-white text-sm font-mono">
                    <span>****</span>
                    <span>****</span>
                    <span>****</span>
                    <span className="text-white">7641</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-white text-xs">For Online Use</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-4 -left-8 w-32 h-32 bg-indigo-100 rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-slate-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Card Benefits
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cardBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-3 h-3 text-green-600"
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
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition transform hover:-translate-y-0.5 active:translate-y-0">
                <CreditCard className="w-5 h-5" />
                Order Your Card
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-xl border border-blue-200 hover:bg-blue-50 transition">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-slate-100">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50K+</div>
                  <div className="text-sm text-slate-600">Cards Issued</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-slate-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">$0</div>
                  <div className="text-sm text-slate-600">Monthly Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ATMCardSection;
