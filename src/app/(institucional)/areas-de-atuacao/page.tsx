import { ServicesSection } from '@/components/sections/services';

export default function AreasPage() {
  return (
    <div className="pt-20 animate-fade-in">
        <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl font-serif text-white font-bold">Nossas Especialidades</h1>
        </div>
        <ServicesSection />
    </div>
  );
}
