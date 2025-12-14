import { Hero } from '@/components/sections/hero';
import { ServicesSection } from '@/components/sections/services';
import { AboutSection } from '@/components/sections/about';
// Importe a CTA Section se tiver criado, ou coloque direto aqui
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      
      {/* CTA Section Inline ou componente separado */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: "url('/images/banner-servicos.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6">Precisa de Orientação Jurídica?</h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-lg">
            Não deixe suas dúvidas para depois. Agende uma consulta inicial e entenda seus direitos.
            </p>
            <Link href="/contato">
                <Button size="lg" className="w-auto inline-flex">Falar com Especialista</Button>
            </Link>
        </div>
      </section>
    </>
  );
}
