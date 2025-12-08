import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {
  bgImage?: string;
  onSubmit?: (payload: { email: string }) => Promise<void>;
};

export default function WaitlistSectionLight({
  bgImage = "",
  onSubmit,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function validateEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!validateEmail(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      if (onSubmit) {
        await onSubmit({ email });
      } else {
        await new Promise((res) => setTimeout(res, 700));
      }
      setStatus("success");
      setEmail("");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMsg(err?.message ?? "Something went wrong. Try again later.");
    }
  }

  return (
    <section
      aria-labelledby="waitlist-heading-light"
      className="relative overflow-hidden py-20 bg-linear-to-b from-white to-slate-50 text-slate-900"
      role="region"
    >
      {bgImage ? (
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.9)), url('${bgImage}')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.95,
          }}
        />
      ) : null}

      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(0,0,0,0.02) 0 2px, transparent 2px 24px)",
          opacity: 0.06,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="waitlist-heading-light"
            className="font-extrabold leading-tight text-xl sm:text-2xl lg:text-3xl"
            style={{
              letterSpacing: "-0.02em",
            }}
          >
            Join the waitlist
          </h2>

          <p className="mt-4 text-sm text-slate-600">
            Welcome to Adswift Connect, the future of digital identity and
            wallet management. We empower businesses to create, customize, and
            distribute branded crypto wallet addresses for their customers — all
            through one secure, seamless platform. Whether you’re building a
            fintech app, launching a loyalty program, or managing large-scale
            customer wallets, Adswift Connect gives you the tools to do it
            effortlessly and securely.
          </p>
        </div>

        {/* Form */}
        <div className="mt-10 flex justify-center">
          <motion.form
            initial={{ y: 6, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="w-full max-w-2xl"
            aria-live="polite"
          >
            <label htmlFor="waitlist-email-light" className="sr-only">
              Email address
            </label>

            <div className="relative rounded-xl border border-slate-200 bg-white shadow-sm">
              <input
                id="waitlist-email-light"
                type="email"
                inputMode="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourcompany.com"
                className="w-full px-6 py-4 rounded-xl focus:outline-none placeholder:text-slate-400 text-slate-900 bg-transparent"
                aria-invalid={!!errorMsg}
                aria-describedby={errorMsg ? "waitlist-error-light" : undefined}
                required
              />

              <div className="absolute right-2 top-1/2 -translate-y-1/2 pr-2">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-lg font-semibold transition ${
                    status === "loading"
                      ? "bg-indigo-500/80 text-white cursor-not-allowed"
                      : "bg-indigo-600 hover:bg-indigo-700 text-white"
                  }`}
                >
                  {status === "loading" ? "Submitting…" : "Join"}
                </button>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm">
              <div>
                {status === "success" && (
                  <div
                    id="waitlist-success-light"
                    className="inline-block rounded-md px-3 py-1 text-sm font-medium bg-green-50 text-green-700"
                  >
                    Thanks — you’re on the list!
                  </div>
                )}

                {errorMsg && (
                  <div id="waitlist-error-light" className="text-rose-500">
                    {errorMsg}
                  </div>
                )}
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
export { WaitlistSectionLight };
