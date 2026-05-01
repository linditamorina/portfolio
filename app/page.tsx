// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ThemeToggle from "@/components/ThemeToggle";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative bg-background text-foreground min-h-screen selection:bg-brand-green selection:text-black">
      <Navbar />
      <Hero />
      <div id="projekte">
        <Projects />
      </div>
      <div id="eksperienca">
        <Experience />
      </div>

      {/* Footer i thjeshtë profesional */}
      <footer className="py-12 text-center border-t border-white/5">
        <p className="text-gray-500 text-sm font-medium">
          © {new Date().getFullYear()} Lindita Morina. Built with Next.js,
          Tailwind v4 & Framer Motion.
        </p>
      </footer>
    </main>
  );
}
