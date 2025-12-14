import { AboutSection } from '@/components/sections/about';

export default function SobrePage() {
  return (
    <div className="pt-20 animate-fade-in">
        <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl font-serif text-white font-bold">Quem Somos</h1>
        </div>
        <AboutSection />
    </div>
  );
}
