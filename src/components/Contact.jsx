"use client"

export default function ContactSection() {
  return (
    <section className="pb-10 pt-4 sm:pb-14">
      <div className="mx-auto max-w-2xl">
        <div className="rounded-xl border border-[#d8cab8] bg-[#faf6ef] px-6 py-4 text-center text-sm text-[#5e4d3d] shadow-[0_6px_14px_rgba(56,42,28,0.1)]">
          <p>
            Built by <span className="font-medium text-[#3f2f22]">Logan Fouts</span> •{" "}
            <a href="mailto:loganfouts@pm.me" className="font-medium text-[#3f2f22] underline-offset-4 hover:underline">
              loganfouts@pm.me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}