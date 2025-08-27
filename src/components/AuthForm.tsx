"use client";

import React, { useId, useState } from "react";
import Link from "next/link";
import SocialProviders from "./SocialProviders";

interface AuthFormProps {
  mode: "sign-in" | "sign-up";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "sign-up";
  const emailId = useId();
  const nameId = useId();
  const passwordId = useId();
  const [show, setShow] = useState(false);

  return (
    <div>
      <div className="mb-6 flex justify-end text-[--text-caption] leading-[--text-caption--line-height]">
        {isSignup ? (
          <p className="text-[--color-dark-700]">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline hover:text-[--color-dark-900]">
              Sign In
            </Link>
          </p>
        ) : (
          <p className="text-[--color-dark-700]">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="underline hover:text-[--color-dark-900]">
              Sign Up
            </Link>
          </p>
        )}
      </div>

      <h1 className="text-center md:text-left text-[--text-heading-3] leading-[--text-heading-3--line-height] font-[--text-heading-3--font-weight]">
        {isSignup ? "Join Nikee Today!" : "Welcome back"}
      </h1>
      <p className="mt-1 text-center md:text-left text-[--color-dark-700]">
        {isSignup
          ? "Create your account to start your journey"
          : "Please enter your details to sign in"}
      </p>

      <div className="mt-6">
        <SocialProviders action={mode} />
      </div>

      <div className="my-6 flex items-center gap-4 text-[--color-dark-700]">
        <div className="h-px flex-1 bg-[--color-light-300]" />
        <span className="text-[--text-caption] leading-[--text-caption--line-height]">
          Or {mode.replace("-", " ")} with
        </span>
        <div className="h-px flex-1 bg-[--color-light-300]" />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="space-y-4"
        noValidate
      >
        {isSignup && (
          <div className="space-y-2">
            <label htmlFor={nameId} className="text-[--color-dark-900]">
              Full Name
            </label>
            <input
              id={nameId}
              name="name"
              type="text"
              placeholder="Enter your full name"
              autoComplete="name"
              className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[--color-dark-900]"
            />
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor={emailId} className="text-[--color-dark-900]">
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            autoComplete="email"
            className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[--color-dark-900]"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor={passwordId} className="text-[--color-dark-900]">
              Password
            </label>
            {!isSignup && (
              <Link
                href="#"
                className="text-[--text-caption] leading-[--text-caption--line-height] underline text-[--color-dark-700] hover:text-[--color-dark-900]"
              >
                Forgot password?
              </Link>
            )}
          </div>
          <div className="relative">
            <input
              id={passwordId}
              name="password"
              type={show ? "text" : "password"}
              placeholder="minimum 8 characters"
              autoComplete={isSignup ? "new-password" : "current-password"}
              className="w-full rounded-xl border border-[--color-light-300] bg-white px-4 py-3 pr-12 outline-none focus:ring-2 focus:ring-[--color-dark-900]"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute inset-y-0 right-0 px-3 text-[--color-dark-700] hover:text-[--color-dark-900] focus:outline-none"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "🙈" : "👁️"}
            </button>
          </div>
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-[--color-dark-900] text-[--color-light-100] px-5 py-3 hover:bg-black focus:outline-none focus:ring-2 focus:ring-[--color-dark-900]"
        >
          {isSignup ? "Sign Up" : "Sign In"}
        </button>

        {isSignup && (
          <p className="text-center text-[--color-dark-700] text-[--text-footnote] leading-[--text-footnote--line-height]">
            By signing up, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        )}
      </form>
    </div>
  );
}
