"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted or rejected cookies
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 pb-6 md:pb-8 pointer-events-none"
        >
          <div className="max-w-4xl mx-auto bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden pointer-events-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-50"></div>
            <div className="relative z-10 flex-1">
              <h3 className="text-lg font-medium text-white mb-2">We value your privacy</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies.
                <Link href="/privacy" className="text-blue-400 hover:text-blue-300 ml-2 underline underline-offset-2 transition-colors">
                  Read our Privacy Policy
                </Link>
              </p>
            </div>
            <div className="relative z-10 flex flex-row gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={handleReject}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-gray-300 bg-transparent border border-gray-700 hover:bg-gray-800 rounded-lg transition-all"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="flex-1 md:flex-none px-6 py-2.5 text-sm font-medium text-black bg-white hover:bg-gray-200 rounded-lg transition-all shadow-lg shadow-white/10"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
