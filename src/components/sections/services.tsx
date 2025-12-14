import { SectionHeading } from '@/components/ui/section-heading';
import { ServiceCard } from '@/components/ui/service-card';
import { SERVICES } from '@/lib/constants';

export function ServicesSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading subtitle="Especialidades" title="Áreas de Atuação" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard 
              key={service.id} 
              title={service.title} 
              description={service.description} 
              icon={service.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
