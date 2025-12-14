import { CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
            {/* Imagem Local */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
               <div 
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: "url('/images/mariana-bueno.jpg')" }}
               ></div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
              <p className="text-white font-serif text-xl">Mariana Bueno</p>
              <p className="text-amber-500 text-sm">Advogada Sênior - OAB/PR 00.000</p>
            </div>
          </div>
          
          <div>
            <SectionHeading 
              subtitle="Sobre a Advogada" 
              title="Trajetória Marcada pela Ética e Resultados" 
              centered={false} 
            />
            <p className="text-slate-600 mb-6 leading-relaxed">
              Com mais de 10 anos de experiência jurídica, Mariana Bueno fundou seu escritório com o propósito de oferecer um atendimento humanizado e tecnicamente impecável. Especialista em Direito Civil e Processual, sua atuação é pautada na busca incessante pela melhor solução para seus clientes.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Acreditamos que cada cliente é único e merece uma estratégia personalizada. Nossa missão é desmistificar o direito e torná-lo acessível, garantindo segurança e tranquilidade em momentos decisivos.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Atendimento Personalizado', 'Experiência Comprovada', 'Transparência Total', 'Foco em Resultados'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
