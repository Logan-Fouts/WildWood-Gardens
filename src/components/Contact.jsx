"use client"

export default function ContactSection() {
  return (
    <section className="pb-8 pt-2 sm:pb-10">
      <p className="mx-auto max-w-2xl px-4 text-center text-xs text-[#7f6b56]/85 sm:text-sm">
        Built by Logan Fouts •{" "}
        <a href="mailto:loganfouts@pm.me" className="underline-offset-4 hover:underline">
          loganfouts@pm.me
        </a>
      </p>
    </section>
  );
}