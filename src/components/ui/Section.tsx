import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, index, label, title, children, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`relative max-w-6xl mx-auto px-6 py-24 md:py-32 ${className}`}
    >
      <Reveal>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 tracking-widest">
            {index}
          </span>
          <span className="h-px w-8 bg-emerald-600/50 dark:bg-emerald-400/50" />
          <span className="text-xs uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400">
            {label}
          </span>
        </div>
        <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-stone-900 dark:text-stone-100 mb-14">
          {title}
        </h2>
      </Reveal>
      {children}
    </section>
  );
}