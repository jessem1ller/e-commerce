import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex items-stretch">
      <div className="hidden md:flex w-1/2 bg-[--color-dark-900] text-[--color-light-100] p-8">
        <div className="m-auto max-w-md w-full">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-md bg-[--color-orange] grid place-items-center">
              <Image src="/logo.svg" alt="" width={24} height={24} />
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-[--text-heading-2] leading-[--text-heading-2--line-height] font-[--text-heading-2--font-weight]">
              Just Do It
            </h2>
            <p className="mt-4 text-[--text-lead] leading-[--text-lead--line-height] text-[--color-light-400]">
              Join millions of athletes and fitness enthusiasts who trust Nikee
              for their performance needs.
            </p>
            <div className="mt-6 flex items-center gap-2" aria-hidden>
              <span className="h-2 w-2 rounded-full bg-[--color-light-400]" />
              <span className="h-2 w-2 rounded-full bg-[--color-light-400]/40" />
              <span className="h-2 w-2 rounded-full bg-[--color-light-400]/40" />
            </div>
            <p className="mt-16 text-[--color-light-400] text-[--text-footnote]">
              © {new Date().getFullYear()} Nikee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[--color-light-100] md:p-10">
        <div className="mx-auto w-full max-w-md md:max-w-lg">
          <div className="md:rounded-3xl md:border md:border-[--color-light-300] md:bg-[--color-light-100] md:shadow-sm p-6 sm:p-8">
            <div className="flex items-center justify-between md:hidden mb-4">
              <Link href="/" aria-label="Home" className="inline-flex">
                <Image src="/logo-black.svg" alt="" width={28} height={28} />
              </Link>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
