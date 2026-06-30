"use client";
import PrivacyPolicy from "@/components/legal/privacy-policy";
import RefundPolicy from "@/components/legal/refund-policy";
import TermsOfService from "@/components/legal/terms-of-service";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Legal() {
  const [activeHash, setActiveHash] = useState("#privacy-policy");

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash || "#privacy-policy";
      setActiveHash(currentHash);
    };

    handleHashChange();


    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("popstate", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("popstate", handleHashChange);
    };
  }, []);


  useEffect(() => {
    if (!activeHash) return;


    const scrollTimeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant", 
      });
    }, 10);

    return () => clearTimeout(scrollTimeout);
  }, [activeHash]);

  
  const currentTab = activeHash || "#privacy-policy";

  return (
    <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[60px] py-20">
      <div className="flex items-center gap-2 pb-8">
        <Link
          href="/legal#privacy-policy"
          scroll={false}
          onClick={() => {
            // setActiveHash('')
            setActiveHash("#privacy-policy")
            }}
            className={`font-satoshi py-[10px] px-[16px] transition-colors ${
                currentTab === "#privacy-policy" ? "bg-black text-white" : "bg-white text-[#525252]"
              }`}
        >
          Privacy Policy
        </Link>
        <Link
          href="/legal#terms-of-service"
          scroll={false}
          onClick={() => {
            // setActiveHash('')
            setActiveHash("#terms-of-service")
        }}
        className={`font-satoshi py-[10px] px-[16px] transition-colors ${
            currentTab === "#terms-of-service" ? "bg-black text-white" : "bg-white text-[#525252]"
          }`}
        >
          Terms of service
        </Link>
        <Link
          href="/legal#refund-policy"
          scroll={false}
          onClick={() => {
            setActiveHash("#refund-policy")
        }}
        className={`font-satoshi py-[10px] px-[16px] transition-colors ${
            currentTab === "#refund-policy" ? "bg-black text-white" : "bg-white text-[#525252]"
          }`}
        >
          Refund Policy
        </Link>
      </div>

      <div className="border-t-[0.3px] border-[#B3B3B3] py-4">
        {currentTab === "#privacy-policy" && (
          <div id="privacy-policy" className="text-[#525252] font-medium">
            <PrivacyPolicy />
          </div>
        )}

        {currentTab === "#terms-of-service" && (
          <div id="terms-of-service" className="text-[#525252] font-medium">
            <TermsOfService />
          </div>
        )}

        {currentTab === "#refund-policy" && (
          <RefundPolicy />
        )}
      </div>
    </div>
  );
}
