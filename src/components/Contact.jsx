"use client"

export default function ContactSection() {
  return (
    <section className="py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center text-gray-600 text-sm">
          <p>
            Built by <span className="font-medium">Logan Fouts</span> •{" "}
            <a href="mailto:loganfouts@pm.me" className="hover:underline">
              loganfouts@pm.me
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}