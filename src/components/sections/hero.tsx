import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center bg-slate-900 overflow-hidden">
      {/* Overlay e Imagem de Fundo */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/hero.jpg')" }} 
      ></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-amber-600/20 text-amber-500 text-sm font-semibold mb-6 border border-amber-600/30">
            Excelência e Tradição
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight mb-6">
            Justiça e Dedicação em <span className="text-amber-500">Cada Caso</span>
          </h1>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">
            Compromisso inabalável com a defesa dos seus direitos. Advocacia moderna com valores tradicionais de ética e transparência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contato">
              <Button>Agendar Consulta</Button>
            </Link>
            <Link href="/areas-de-atuacao">
              <Button variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-slate-900">
                Nossas Áreas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
