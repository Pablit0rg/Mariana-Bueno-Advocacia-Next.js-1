'use client'; 
// Use client porque tem formulário

import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export default function ContatoPage() {
  return (
    <div className="pt-20 animate-fade-in">
        <div className="bg-slate-900 py-16 text-center">
        <h1 className="text-3xl font-serif text-white font-bold">Fale Conosco</h1>
        </div>
        
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
            <SectionHeading subtitle="Fale Conosco" title="Entre em Contato" />
            
            <div className="grid md:grid-cols-3 gap-12">
                {/* Informações de Contato */}
                <div className="md:col-span-1 space-y-6">
                    {/* ... Copiar os cards de contato do arquivo original ... */}
                    <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-lg">
                        <Phone className="w-6 h-6 text-amber-600 mt-1" />
                        <div>
                        <h4 className="font-bold text-slate-900 mb-1">Telefone</h4>
                        <p className="text-slate-600">{SITE_CONFIG.phone}</p>
                        </div>
                    </div>
                    {/* ... Repetir para email e endereço ... */}
                </div>
                
                {/* Formulário */}
                <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-lg border border-slate-100">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        {/* ... Campos do formulário ... */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                                <input type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200" />
                            </div>
                        </div>
                        <Button className="w-full justify-center">
                            Enviar Mensagem <ArrowRight className="w-4 h-4" />
                        </Button>
                    </form>
                </div>
            </div>
            </div>
        </section>
    </div>
  );
}
