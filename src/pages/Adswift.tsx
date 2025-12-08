import React, { useState } from "react";
import { Button } from "../components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./../components/ui/navigation-menu";
import {
  Menu,
  X,
  CreditCard,
  Plug,
  Shield,
  Users,
  Gift,
  BarChart2,
  UserPlus,
  Palette,
  Share2,
  Mail,
} from "lucide-react";
import { cn } from "./../lib/utils";
import LogoSlider from "@/components/LogoSlider";
import RealisticCardSection from "@/components/RealisticCardSection";
import WaitlistSectionLight from "@/components/WaitListSectionLight";
import Faqs from "./../components/ui/Faqs";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block rounded-md p-3 transition-colors hover:bg-gray-100 text-gray-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium">{title}</div>
          <p className="text-sm text-gray-500 mt-1">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Benefit = ({ icon, title, desc, bg }: any) => (
  <div className="flex items-center gap-3">
    <div
      className={`flex h-10 w-10 items-center justify-center rounded-lg ${bg}`}
    >
      {icon}
    </div>
    <div className="flex flex-col">
      <div className="text-sm font-semibold text-slate-900">{title}</div>
      {desc && <div className="text-sm text-slate-600">{desc}</div>}
    </div>
  </div>
);

const steps = [
  {
    id: 1,
    title: "Register Your Business",
    desc: "Create your business account with simple verification and quick setup.",
    icon: <UserPlus className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Customize Wallet Addresses",
    desc: "Design and brand wallet addresses tailored to your customers.",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "Distribute to Customers",
    desc: "Securely assign and manage wallets for your customers through the platform.",
    icon: <Share2 className="w-5 h-5" />,
  },
];

const team = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600",
  },
  {
    name: "Dr. Naomi Laurent",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600",
  },
  {
    name: "Noah Bennett",
    role: "Marketing & Community Lead",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600",
  },
  {
    name: "Emily Zhao",
    role: "Co-Founder / CTO",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=600",
  },
];

const Adswift: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      <header className="w-full border-b bg-white sticky top-0 z-50">
        <div className="flex items-center px-4 sm:px-6 md:px-8 lg:px-16 py-4">
          <div className="shrink-0">
            <a href="/" className="text-lg font-semibold text-black">
              ADswift-connect
            </a>
          </div>

          <div className="hidden lg:flex flex-1 justify-center ">
            <NavigationMenu>
              <NavigationMenuList className="flex flex-wrap gap-4 lg:gap-8 items-center justify-center">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#hero"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#features"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    Features
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#how-it-works"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    How it works
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#team"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    Team
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#faq"
                    className="text-sm font-medium text-gray-800 hover:text-black hover:border-b-2 border-blue-500 pb-1 transition-colors"
                  >
                    FAQ
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="ml-auto flex items-center gap-3">
            <div className="hidden lg:block">
              <Button
                className="px-4 sm:px-6 py-2 text-sm rounded-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                onClick={() => (window.location.href = "/contact")}
              >
                Contact
              </Button>
            </div>

            <button
              onClick={() => setOpen((s) => !s)}
              className="lg:hidden p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? (
                <X size={20} className="text-gray-800" />
              ) : (
                <Menu size={20} className="text-gray-800" />
              )}
            </button>
          </div>
        </div>

        <div
          className={cn(
            "lg:hidden bg-white overflow-hidden transition-[max-height] duration-300 ease-in-out border-t",
            open ? "max-h-[1000px] py-4" : "max-h-0"
          )}
        >
          <div className="px-4 sm:px-6 space-y-3 text-center">
            <a href="#hero" className="block text-sm font-medium text-gray-800">
              Home
            </a>
            <a
              href="#features"
              className="block text-sm font-medium text-gray-800"
            >
              Features
            </a>

            <a
              href="#about"
              className="block text-sm font-medium text-gray-800"
            >
              About
            </a>

            <a
              href="#how-it-works"
              className="block text-sm font-medium text-gray-800"
            >
              How it works
            </a>

            <a href="#team" className="block text-sm font-medium text-gray-800">
              Team
            </a>

            <a href="#faq" className="block text-sm font-medium text-gray-800">
              FAQ
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/contact";
                }}
                className="w-full inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full bg-white overflow-hidden" id="hero">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://img.freepik.com/free-photo/colleagues-team-working-company-paperwork-doig-teamwork-analyze-documents-online-research-information-planning-corporate-presentation-with-data-charts-job-collaboration_482257-49375.jpg"
            alt="Business meeting"
            className="w-full h-full object-cover filter blur-sm brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-2 sm:px-0">
              <h1 className="text-slate-900 text-3xl sm:text-3xl lg:text-5xl font-extrabold leading-tight">
                Revolutionizing customer wallet solutions
              </h1>
              <p className="mt-4 text-slate-700 text-base sm:text-lg max-w-xl">
                ADswift Connect is coming soon to transform how businesses
                manage and distribute cryptocurrency wallets to their customers
                — secure, scalable, and enterprise-ready.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-blue-700 transition transform active:translate-y-px"
                >
                  Get started
                </a>
                <a
                  href="#read-more"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition"
                >
                  Read more
                </a>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-xl">
                <Benefit
                  icon={
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z" />
                    </svg>
                  }
                  title="Secure by design"
                  bg="bg-blue-50 text-blue-700"
                />
                <Benefit
                  icon={
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6h18M6 6v12M18 6v12" />
                    </svg>
                  }
                  title="Scalable"
                  bg="bg-purple-50 text-purple-700"
                />
                <Benefit
                  icon={
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 7h18M7 21V7M7 7v14h10V7" />
                    </svg>
                  }
                  title="Enterprise-ready"
                  bg="bg-emerald-50 text-emerald-700"
                />
              </div>
            </div>

            <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
              <div className="w-full max-w-sm sm:max-w-md relative">
                <div className="absolute -top-4 -left-4 w-48 h-32 sm:w-64 sm:h-40 bg-slate-50 rounded-2xl shadow-md transform rotate-2" />
                <div className="absolute -bottom-4 -right-4 w-40 h-28 sm:w-56 sm:h-36 bg-slate-50 rounded-2xl shadow-sm transform -rotate-1" />

                <div className="relative border border-slate-100 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col gap-4 bg-white">
                  <img
                    src="https://img.freepik.com/free-photo/3d-render-network-communications-science-background-with-low-poly-plexus-design_1048-13265.jpg"
                    alt=""
                    className="rounded-2xl w-full h-auto object-cover"
                  />
                </div>

                <svg
                  className="absolute -top-6 -right-4 w-16 h-16 sm:w-24 sm:h-24 text-blue-100 opacity-30"
                  fill="none"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="50"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="35"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* what adswift delivers */}
      <section
        className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20"
        id="features"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              What ADswift Connect Delivers
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base  text-slate-600 max-w-3xl mx-auto px-4">
              Comprehensive wallet solutions designed for modern businesses
              looking to embrace cryptocurrency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
            {[
              {
                title: "Custom Wallet Addresses",
                desc: "Generate branded wallet addresses tailored for your business needs.",
                icon: <CreditCard className="w-6 h-6 text-white" />,
              },
              {
                title: "Seamless Integration",
                desc: "Easy API integration with your existing systems and platforms.",
                icon: <Plug className="w-6 h-6 text-white" />,
              },
              {
                title: "Bank-Level Security",
                desc: "Enterprise-grade security protocols to protect all wallet transactions and data.",
                icon: <Shield className="w-6 h-6 text-white" />,
              },
              {
                title: "Customer Management",
                desc: "Complete dashboard to efficiently manage all customer wallets and transactions.",
                icon: <Users className="w-6 h-6 text-white" />,
              },
              {
                title: "Early Access Rewards",
                desc: "Exclusive incentives and token rewards for verified early users and contributors.",
                icon: <Gift className="w-6 h-6 text-white" />,
              },
              {
                title: "Real-Time Insights",
                desc: "Track wallet usage, performance, and blockchain activity with live on-chain analytics.",
                icon: <BarChart2 className="w-6 h-6 text-white" />,
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative group border border-slate-200 rounded-3xl p-6 sm:p-8 bg-white hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 sm:hover:-translate-y-2"
              >
                <div className="absolute -top-4 left-6 bg-linear-to-r from-indigo-500 to-blue-500 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mt-8 mb-3 group-hover:text-indigo-600 transition">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* more about us */}
      <section
        className="relative w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden"
        id="about"
      >
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-40 h-40 sm:w-60 sm:h-60 bg-blue-100 rounded-full opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-blue-50 rounded-full opacity-30 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 px-4 sm:px-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight">
              More About Us
            </h2>
            <p className="text-lg sm:text-base text-slate-700">
              Secure, Fast, And Reliable Crypto Wallet Solutions
            </p>
            <p className="text-slate-600 text-sm sm:text-base">
              Adswift Connect revolutionizes how you manage your cryptocurrency.
              With cutting-edge technology and user-centric design, we're
              building the future of digital finance.
            </p>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative px-4 sm:px-0">
            {[
              {
                title: "Global Community",
                desc: "Join thousands of users worldwide trusting Adswift for their crypto needs.",
                icon: (
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 6.626 5.37 12 12 12s12-5.374 12-12C24 5.373 18.63 0 12 0zm0 22.5c-5.8 0-10.5-4.7-10.5-10.5S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z" />
                  </svg>
                ),
              },
              {
                title: "Private & Anonymous",
                desc: "Your data stays yours. Zero-knowledge architecture ensures complete privacy.",
                icon: (
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                ),
              },
              {
                title: "Lightning Fast",
                desc: "Process transactions in seconds with our optimized blockchain infrastructure.",
                icon: (
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 2v13h3v7l7-14h-4l1-6H7z" />
                  </svg>
                ),
              },
              {
                title: "Bank-Level Security",
                desc: "Military-grade encryption protects your assets 24/7 with multi-layer security protocols.",
                icon: (
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 1L3 5v6c0 5.25 3.75 9.75 9 11 5.25-1.25 9-5.75 9-11V5l-9-4z" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative bg-white rounded-3xl p-4 sm:p-6`}
                style={{ zIndex: 10 - idx }}
              >
                <div className="bg-blue-50 p-3 sm:p-4 rounded-xl inline-flex items-center justify-center mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-slate-900 text-sm sm:text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* how it works */}
      <section
        className="relative w-full bg-white py-12 sm:py-16 lg:py-24 overflow-hidden"
        id="how-it-works"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
              How It Works
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto px-4">
              Get started with Adswift Connect in three simple steps
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-sm">
            <div className="hidden lg:flex items-start gap-6">
              <div className="w-3/5 pr-6">
                <div className="relative">
                  <div className="absolute left-10 top-8 bottom-8 w-px bg-slate-100"></div>

                  {steps.map((s) => (
                    <div
                      key={s.id}
                      className="relative flex items-start gap-6 mb-8"
                    >
                      <div className="z-20">
                        <div className="w-20 h-20 rounded-xl flex items-center justify-center text-indigo-700 bg-indigo-50 border border-indigo-100 text-2xl font-semibold">
                          {s.id}
                        </div>
                      </div>

                      <div className="flex-1">
                        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-linear-to-br from-indigo-500 to-blue-400 text-white shadow">
                                {s.icon}
                              </div>
                              <h3 className="text-lg font-semibold text-slate-900">
                                {s.title}
                              </h3>
                            </div>
                            <div className="text-sm text-slate-500 font-medium">
                              Step {s.id}
                            </div>
                          </div>
                          <p className="mt-3 text-slate-600 text-sm">
                            {s.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-2/5 pl-6 flex flex-col gap-6">
                <div className="rounded-2xl p-6 bg-linear-to-br from-slate-50 to-white border border-slate-100 shadow">
                  <h4 className="text-xl font-extrabold text-slate-900">
                    Start in minutes
                  </h4>
                  <p className="mt-2 text-slate-600">
                    Fast onboarding, complete customization, and secure
                    distribution — built for enterprise scale.
                  </p>

                  <ul className="mt-4 space-y-3">
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 font-semibold">
                        ✓
                      </span>
                      Verified setup
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-semibold">
                        ★
                      </span>
                      Custom branding
                    </li>
                    <li className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-slate-600 font-semibold">
                        ⚡
                      </span>
                      Automated distribution
                    </li>
                  </ul>

                  <div className="mt-6">
                    <button className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl transition">
                      Get Started
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl p-4 bg-white border border-slate-100 text-sm text-slate-600">
                  <strong className="text-slate-900">Need help?</strong>
                  <p className="mt-2">
                    Contact our onboarding team for a guided setup and best
                    practices.
                  </p>
                  <a
                    className="mt-3 inline-block text-indigo-600 font-medium"
                    href="#contact"
                  >
                    Contact us →
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:hidden space-y-6">
              <div className="flex flex-col gap-4">
                {steps.map((s) => (
                  <div
                    key={s.id}
                    className="relative bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-linear-to-br from-indigo-500 to-blue-400 text-white text-lg font-semibold">
                          {s.id}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-md font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <p className="text-slate-600 text-sm mt-1">{s.desc}</p>
                        <div className="mt-3">
                          <button className="text-indigo-600 font-medium text-sm">
                            Learn more →
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl p-6 bg-linear-to-br from-slate-50 to-white border border-slate-100 shadow text-center">
                <h4 className="text-lg font-extrabold text-slate-900">
                  Ready to onboard?
                </h4>
                <p className="text-slate-600 mt-2">
                  Start your account and create branded wallets in minutes.
                </p>
                <div className="mt-4">
                  <button className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-5 rounded-xl transition">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <section
        className="relative w-full py-12 sm:py-16 lg:py-20 bg-blue-50"
        id="team"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
              Our Team
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto px-4">
              Led by pioneers in blockchain, finance, and AI innovation. Our
              diverse team blends fintech, UX and engineering to build a secure,
              intuitive platform.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-0">
            {team.map((m, i) => (
              <article
                key={i}
                className="relative flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-4 pr-6 shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
              >
                <div className="w-1 h-full rounded-l-2xl bg-linear-to-b from-indigo-500 to-blue-400" />

                <div className="shrink-0 ml-2">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-slate-100 shadow-sm"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 truncate">
                        {m.name}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 truncate">
                        {m.role}
                      </p>
                    </div>

                    {m.role.toLowerCase().includes("co-founder") ? (
                      <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-indigo-50 text-indigo-600 border border-indigo-100">
                        Founder
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-2 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#"
                      aria-label={`email ${m.name}`}
                      className="text-slate-400 hover:text-indigo-600"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`twitter ${m.name}`}
                      className="text-slate-400 hover:text-indigo-600"
                    ></a>
                    <a
                      href="#"
                      aria-label={`linkedin ${m.name}`}
                      className="text-slate-400 hover:text-indigo-600"
                    ></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <LogoSlider />

      <RealisticCardSection />

      <WaitlistSectionLight />

      <section id="faq">
        <Faqs />
      </section>

      <footer className="w-full py-8 sm:py-10 bg-linear-to-t from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-8">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="ml-3 text-xl font-semibold">
                Adswift Connect
              </span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Revolutionizing how businesses manage cryptocurrency wallets for
              their customers. Secure, scalable, and enterprise-ready solutions.
            </p>
            <div className="mt-4 flex space-x-2">
              <button className="bg-slate-800 px-3 py-2 rounded">T</button>
              <button className="bg-slate-800 px-3 py-2 rounded">L</button>
              <button className="bg-slate-800 px-3 py-2 rounded">G</button>
            </div>
          </div>

          <div className="mb-6 md:mb-0">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Features</li>
              <li>How It Works</li>
              <li>Partners</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">hello@adswiftconnect.com</p>
            <p className="text-gray-300">+1 (555) 123-4567</p>
            <p className="text-gray-300">San Francisco, CA</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-slate-700 pt-4 px-4 sm:px-8 text-gray-400 text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-center gap-2">
          <span>© 2024 Adswift Connect. All rights reserved.</span>
          <span className="flex gap-3 sm:gap-4">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms of Service
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Adswift;
