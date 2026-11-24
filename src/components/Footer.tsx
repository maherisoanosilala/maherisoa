import { profile } from "@/lib/data";
import { FiGithub } from "react-icons/fi";
import { CurrentYear } from "./CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500 dark:text-stone-500">
        <div className="flex items-center gap-2">
          <p>
            © <CurrentYear /> {profile.firstName} {profile.lastName}.
          </p>
          <span className="hidden sm:inline text-stone-300 dark:text-stone-700">|</span>
          <p className="italic">Conçu & codé avec soin.</p>
        </div>

        <div className="flex items-center gap-6">
          {/* Lien vers le code source - Très pro ! */}
          <a
            href="https://github.com/maherisoanosilala/maherisoa" // 👈 Mets ton vrai lien ici
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
          >
            <FiGithub className="group-hover:-translate-y-0.5 transition-transform" />
            <span>Code source</span>
          </a>

          {/* Stack technique */}
          <p className="font-mono text-stone-400 dark:text-stone-600">
            Next.js · Tailwind v4 · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}