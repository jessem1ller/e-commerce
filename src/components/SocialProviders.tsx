import React from "react";
import Image from "next/image";

interface SocialProvidersProps {
  action?: "sign-in" | "sign-up";
}

export default function SocialProviders({ action = "sign-in" }: SocialProvidersProps) {
  const labelBase = action === "sign-in" ? "Continue with" : "Continue with";
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-[--color-light-300] px-4 py-3 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]"
      >
        <Image src="/google.svg" alt="" width={20} height={20} />
        <span className="text-[--text-body-medium] leading-[--text-body-medium--line-height] font-[--text-body-medium--font-weight]">
          {labelBase} Google
        </span>
      </button>
      <button
        type="button"
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl border border-[--color-light-300] px-4 py-3 text-[--color-dark-900] hover:bg-[--color-light-200] focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]"
      >
        <Image src="/apple.svg" alt="" width={20} height={20} />
        <span className="text-[--text-body-medium] leading-[--text-body-medium--line-height] font-[--text-body-medium--font-weight]">
          {labelBase} Apple
        </span>
      </button>
    </div>
  );
}
