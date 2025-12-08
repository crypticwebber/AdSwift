import { motion } from "framer-motion";
import { ShieldCheck, Zap, CreditCard as CreditIcon } from "lucide-react";

export default function RealisticCardSection({
  onApply,
}: {
  onApply?: () => void;
}) {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900">
            Get your physical ATM card
          </h2>
          <p className="mt-2 sm:mt-3 text-sm text-slate-600 max-w-2xl mx-auto px-4 sm:px-0">
            A premium, contactless ATM card that works globally — secure EMV
            chip, fast withdrawals and elegant design shipped to your address.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex justify-center lg:justify-end px-4 sm:px-0">
            <motion.div
              initial={{ rotate: -6, x: -6, opacity: 0 }}
              animate={{ rotate: 0, x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[420px]"
            >
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl bg-linear-to-br from-indigo-50 via-white to-cyan-50 blur-xl opacity-70 -z-10" />

              <div className="w-full">
                <div className="relative rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-r from-white/20 via-white/10 to-transparent mix-blend-overlay pointer-events-none" />

                  <div
                    className="relative rounded-3xl px-4 sm:px-6 py-4 sm:py-5"
                    style={{
                      background:
                        "linear-gradient(135deg,#0ea5e9 0%, #6366f1 100%)",
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-white font-semibold text-base sm:text-lg tracking-wide">
                          Adswift Connect
                        </div>
                        <div className="text-white/90 text-xs mt-1">
                          Business Wallet
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <svg
                          width="20"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="opacity-90"
                        >
                          <path
                            d="M2 12c0-2.9 1.3-5.5 3.5-7.3"
                            stroke="rgba(255,255,255,0.9)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6 12a6 6 0 0 1 6-6"
                            stroke="rgba(255,255,255,0.85)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                          <path
                            d="M10 12a10 10 0 0 1 10-10"
                            stroke="rgba(255,255,255,0.8)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 sm:mt-6">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-8 sm:w-14 sm:h-10 rounded-md bg-yellow-100 flex items-center justify-center shadow-inner">
                          <svg
                            width="24"
                            height="16"
                            viewBox="0 0 28 20"
                            fill="none"
                            className="w-6 h-4 sm:w-7 sm:h-5"
                          >
                            <rect
                              x="1"
                              y="1"
                              width="26"
                              height="18"
                              rx="3"
                              stroke="#D1A054"
                              strokeWidth="1.5"
                              fill="#F8EFCF"
                            />
                            <g
                              stroke="#B27A12"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                            >
                              <path d="M6 5v10" />
                              <path d="M11 5v10" />
                              <path d="M16 5v10" />
                            </g>
                          </svg>
                        </div>

                        <div className="text-white/95">
                          <div className="text-xs uppercase tracking-widest">
                            Primary
                          </div>
                          <div className="font-semibold text-xs sm:text-sm mt-1">
                            Platinum
                          </div>
                        </div>
                      </div>

                      <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-white/30 via-white/10 to-transparent border border-white/20 backdrop-blur-sm" />
                    </div>

                    <div className="mt-6 sm:mt-8">
                      <div
                        className="text-white text-lg sm:text-xl font-extrabold tracking-widest"
                        style={{
                          letterSpacing: "2px",
                          textShadow: "0 1px 0 rgba(255,255,255,0.06)",
                        }}
                      >
                        <span className="opacity-90">5325</span>{" "}
                        <span>9802</span> <span>2245</span> <span>7834</span>
                      </div>

                      <div className="flex items-center justify-between mt-3 sm:mt-4 text-white/90">
                        <div>
                          <div className="text-[10px] sm:text-[11px] uppercase">
                            Card Holder
                          </div>
                          <div className="font-medium text-sm">
                            ACME Business Ltd
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-[10px] sm:text-[11px] uppercase">
                            Valid
                          </div>
                          <div className="font-medium text-sm">12/28</div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-4 sm:right-6 bottom-3 sm:bottom-4">
                      <div className="flex items-center gap-1">
                        <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/90 shadow-sm" />
                        <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-orange-400 mix-blend-multiply -ml-2 shadow-sm" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 pointer-events-none" />
                </div>

                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.12 }}
                  className="mt-4 sm:mt-6 -ml-4 sm:-ml-6 w-40 sm:w-[200px] rounded-xl bg-white border border-slate-100 shadow-md p-3"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    Card Summary
                  </div>
                  <div className="text-xs text-slate-600 mt-1">
                    Physical card, contactless, EMV chip
                  </div>
                  <div className="mt-2 sm:mt-3 flex items-center justify-between">
                    <div className="text-xs text-slate-500">Status</div>
                    <div className="text-xs text-green-600 font-medium">
                      Ships in 3-5 days
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="pt-4 sm:pt-6 lg:pt-0 px-4 sm:px-0">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              A physical card — built for speed & security
            </h3>
            <p className="mt-2 sm:mt-3 text-slate-600 max-w-lg">
              Apply for a branded ATM card tied to your Adswift Connect wallet.
              Fast withdrawals, contactless payments, and bank-grade security.
            </p>

            <div className="mt-4 sm:mt-6 grid grid-cols-1 gap-3 sm:gap-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-50 border border-slate-100">
                  <ShieldCheck className="text-slate-700 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">
                    Bank-level security
                  </div>
                  <div className="text-sm text-slate-600">
                    EMV chip + multi-layer encryption to keep funds safe.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-50 border border-slate-100">
                  <Zap className="text-slate-700 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">
                    Fast withdrawals
                  </div>
                  <div className="text-sm text-slate-600">
                    Quick cash access at ATMs worldwide with minimal fees.
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="shrink-0 inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-slate-50 border border-slate-100">
                  <CreditIcon className="text-slate-700 w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm sm:text-base">
                    Beautiful design
                  </div>
                  <div className="text-sm text-slate-600">
                    Premium materials and a sleek aesthetic for modern
                    businesses.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={onApply}
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-700 transition shadow text-sm sm:text-base"
              >
                Apply for Card
              </button>

              <button
                onClick={() => window.open("#learn", "_self")}
                className="inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-slate-200 text-slate-700 bg-white hover:shadow-sm transition text-sm sm:text-base"
              >
                Learn how it works
              </button>
            </div>

            <p className="mt-4 sm:mt-5 text-xs sm:text-sm text-slate-500">
              Shipped worldwide · Free replacement within 12 months · Customize
              with company branding (ask sales).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export { RealisticCardSection };
