import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  bgImage?: string;
  onSubmit?: (payload: WaitlistFormData) => Promise<void>;
  isOpen?: boolean;
  onClose?: () => void;
  triggerButton?: React.ReactNode;
};

type WaitlistFormData = {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  businessType: string;
  acceptCrypto: string;
  monthlyVolume: string;
  referralSource: string;
  referralFriend?: string;
};

const BUSINESS_TYPES = [
  "E-commerce",
  "Fintech",
  "SaaS",
  "Retail",
  "Hospitality",
  "Logistics",
  "Healthcare",
  "Education",
  "Entertainment",
  "Other",
];

const CRYPTO_PAYMENT_OPTIONS = [
  { id: "yes-immediately", label: "Yes, immediately" },
  { id: "yes-when-available", label: "Yes, when available" },
  { id: "need-more-info", label: "I need more information" },
  { id: "not-sure", label: "Not so sure" },
];

const MONTHLY_VOLUME_OPTIONS = [
  { id: "under-500k", label: "Under ₦500,000" },
  { id: "500k-2m", label: "₦500,000 - ₦2M" },
  { id: "2m-10m", label: "₦2M - ₦10M" },
  { id: "above-10m", label: "Above ₦10M" },
];

const REFERRAL_SOURCES = [
  "Twitter/X",
  "LinkedIn",
  "Instagram",
  "Facebook",
  "YouTube",
  "Tech Blog/News",
  "Friend/Colleague",
  "Event/Conference",
  "Search Engine",
  "Other",
];

export default function WaitlistSectionLight({
  bgImage = "",
  onSubmit,
  isOpen: externalIsOpen,
  onClose: externalOnClose,
  triggerButton,
}: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<WaitlistFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    businessType: "",
    acceptCrypto: "",
    monthlyVolume: "",
    referralSource: "",
    referralFriend: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const modalContainerRef = useRef<HTMLDivElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const isControlled = externalIsOpen !== undefined;
  const open = isControlled ? externalIsOpen : isModalOpen;
  const close = isControlled ? externalOnClose : () => setIsModalOpen(false);
  const openModal = isControlled ? undefined : () => setIsModalOpen(true);

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function validatePhone(value: string) {
    return /^[+]?[\d\s-]{10,}$/.test(value.trim());
  }

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleRadioChange(name: keyof WaitlistFormData, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const handleRadioClick = (
    e: React.MouseEvent,
    name: keyof WaitlistFormData,
    value: string
  ) => {
    e.preventDefault();
    handleRadioChange(name, value);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";

      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phoneNumber)) {
      setErrorMsg("Please enter a valid phone number.");
      return;
    }

    if (!formData.businessName.trim()) {
      setErrorMsg("Please enter your business name.");
      return;
    }

    if (!formData.businessType) {
      setErrorMsg("Please select your business type.");
      return;
    }

    if (!formData.acceptCrypto) {
      setErrorMsg("Please select an option for crypto payments.");
      return;
    }

    if (!formData.monthlyVolume) {
      setErrorMsg("Please select your estimated monthly transaction volume.");
      return;
    }

    if (!formData.referralSource) {
      setErrorMsg("Please select how you heard about us.");
      return;
    }

    if (
      formData.referralSource === "Friend/Colleague" &&
      !formData.referralFriend?.trim()
    ) {
      setErrorMsg("Please enter your friend's name.");
      return;
    }

    setStatus("loading");
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        await new Promise((res) => setTimeout(res, 1000));
        console.log("Form submitted:", formData);
      }
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
        setFormData({
          fullName: "",
          email: "",
          phoneNumber: "",
          businessName: "",
          businessType: "",
          acceptCrypto: "",
          monthlyVolume: "",
          referralSource: "",
          referralFriend: "",
        });
        if (close) close();
      }, 2000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err?.message ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <section
        aria-labelledby="waitlist-heading-light"
        className="relative overflow-hidden py-24 bg-linear-to-br from-white via-gray-50 to-gray-100 text-gray-900"
        role="region"
      >
        {bgImage ? (
          <div
            aria-hidden
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url('${bgImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.05),transparent_50%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-indigo-300 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-300 to-transparent" />

            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(99,102,241,0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(99,102,241,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>
        )}

        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                id="waitlist-heading-light"
                className="font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl mb-6"
                style={{
                  letterSpacing: "-0.02em",
                }}
              >
                Shape the Future of{" "}
                <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-blue-500">
                  Digital Identity
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Adswift Connect revolutionizes wallet management with AI-powered,
              blockchain-agnostic solutions. Join pioneers building the next era
              of fintech infrastructure.
            </motion.p>

            {/* Stats
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {[
                { value: "100K+", label: "Wallets Managed" },
                { value: "99.9%", label: "Uptime" },
                { value: "50+", label: "Integrations" },
                { value: "24/7", label: "AI Support" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div> */}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-12"
            >
              {triggerButton || (
                <button
                  onClick={openModal}
                  className="group relative px-8 py-4 bg-linear-to-r from-indigo-600 to-blue-500 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">Join The Future →</span>
                  <div className="absolute inset-0 rounded-xl bg-linear-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                </button>
              )}

              <p className="mt-4 text-sm text-gray-500">
                No commitment required • Early access perks • Priority support
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 cursor-pointer"
            />

            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden"
              ref={modalContainerRef}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                style={{ maxHeight: "90vh" }}
                ref={modalContentRef}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-10 shrink-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">
                        Join Adswift Connect Waitlist
                      </h2>
                      <p className="text-gray-600 mt-1">
                        Be among the first to revolutionize your business with
                        digital identity solutions
                      </p>
                    </div>
                    <button
                      onClick={close}
                      className="text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-all p-2 rounded-lg shrink-0"
                      aria-label="Close"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <form onSubmit={handleSubmit} className="p-6">
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-500 transition-all"
                            placeholder="Enter full name"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-500 transition-all"
                            placeholder="example@gmail.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-500 transition-all"
                            placeholder="+234 800 000 0000"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 placeholder-gray-500 transition-all"
                            placeholder="Your Company Ltd"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Type *
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-900 appearance-none"
                          required
                        >
                          <option value="">Select business type</option>
                          {BUSINESS_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="pb-4 border-b border-gray-100">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Do you want to accept crypto payments in your
                          business? *
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {CRYPTO_PAYMENT_OPTIONS.map((option) => (
                            <label
                              key={option.id}
                              className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all min-h-[60px] ${
                                formData.acceptCrypto === option.id
                                  ? "border-indigo-500 bg-indigo-50"
                                  : "border-gray-300 hover:border-indigo-300"
                              }`}
                              onClick={(e) =>
                                handleRadioClick(e, "acceptCrypto", option.id)
                              }
                            >
                              <div
                                className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center shrink-0 ${
                                  formData.acceptCrypto === option.id
                                    ? "border-indigo-500"
                                    : "border-gray-400"
                                }`}
                              >
                                {formData.acceptCrypto === option.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                                )}
                              </div>
                              <span className="text-gray-700">
                                {option.label}
                              </span>
                              <input
                                type="radio"
                                name="acceptCrypto"
                                value={option.id}
                                checked={formData.acceptCrypto === option.id}
                                onChange={() =>
                                  handleRadioChange("acceptCrypto", option.id)
                                }
                                className="sr-only"
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="pb-4 border-b border-gray-100">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Estimated Monthly Transaction Volume *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {MONTHLY_VOLUME_OPTIONS.map((option) => (
                            <label
                              key={option.id}
                              className={`flex items-center justify-center p-4 border rounded-lg cursor-pointer transition-all min-h-[60px] text-center ${
                                formData.monthlyVolume === option.id
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-300 hover:border-blue-300"
                              }`}
                              onClick={(e) =>
                                handleRadioClick(e, "monthlyVolume", option.id)
                              }
                            >
                              <span className="text-gray-700 text-sm font-medium">
                                {option.label}
                              </span>
                              <input
                                type="radio"
                                name="monthlyVolume"
                                value={option.id}
                                checked={formData.monthlyVolume === option.id}
                                onChange={() =>
                                  handleRadioChange("monthlyVolume", option.id)
                                }
                                className="sr-only"
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="pb-4 border-b border-gray-100">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          How did you hear about Adswift? *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                          {REFERRAL_SOURCES.map((source) => (
                            <label
                              key={source}
                              className={`flex items-center justify-center p-3 border rounded-lg cursor-pointer transition-all min-h-[50px] text-center ${
                                formData.referralSource === source
                                  ? "border-purple-500 bg-purple-50"
                                  : "border-gray-300 hover:border-purple-300"
                              }`}
                              onClick={(e) =>
                                handleRadioClick(e, "referralSource", source)
                              }
                            >
                              <span className="text-gray-700 text-sm">
                                {source}
                              </span>
                              <input
                                type="radio"
                                name="referralSource"
                                value={source}
                                checked={formData.referralSource === source}
                                onChange={() =>
                                  handleRadioChange("referralSource", source)
                                }
                                className="sr-only"
                              />
                            </label>
                          ))}
                        </div>
                      </div>

                      {formData.referralSource === "Friend/Colleague" && (
                        <div className="pt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Friend's Name *
                          </label>
                          <input
                            type="text"
                            name="referralFriend"
                            value={formData.referralFriend}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-900 placeholder-gray-500 transition-all"
                            placeholder="Enter your friend's name"
                            required
                          />
                        </div>
                      )}
                    </div>

                    <div className="mt-8">
                      {errorMsg && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
                          {errorMsg}
                        </div>
                      )}

                      {status === "success" && (
                        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700">
                          🎉 Welcome to the future! You've been added to our
                          exclusive waitlist.
                          <br />
                          <span className="text-sm text-green-600">
                            You can close this modal and continue exploring our
                            site.
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex justify-end">
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className={`relative px-8 py-3 rounded-lg font-semibold text-white transition-all min-w-[140px] ${
                          status === "loading"
                            ? "bg-indigo-400 cursor-not-allowed"
                            : "bg-linear-to-r from-indigo-600 to-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
                        }`}
                      >
                        {status === "loading" ? (
                          <span className="flex items-center justify-center gap-2">
                            <svg
                              className="w-4 h-4 animate-spin"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                                fill="none"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                              />
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          "Secure Your Spot"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export { WaitlistSectionLight };
