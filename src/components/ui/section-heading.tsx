interface SectionHeadingProps {
  title: string;
  subtitle: string;
  centered?: boolean;
}

export function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h3 className="text-amber-600 font-semibold tracking-wider uppercase text-sm mb-2">{subtitle}</h3>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-serif">{title}</h2>
      <div className={`w-20 h-1 bg-amber-600 mt-4 ${centered ? 'mx-auto' : ''}`}></div>
    </div>
  );
}
