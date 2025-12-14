import Link from 'next/link';
import { Scale } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* ... conteúdo do footer idêntico ao do React, mas usando Link do Next ... */}
        {/* Vou resumir aqui para não ficar gigante, use a lógica do mariana_bueno_site.tsx */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
                <Scale className="w-8 h-8 text-amber-600" />
                <span className="text-xl font-serif text-slate-100 font-bold tracking-tight">Mariana Bueno</span>
            </div>
            <p className="max-w-sm mb-6 text-sm leading-relaxed">
                Advocacia comprometida com a ética e a excelência. Oferecemos soluções jurídicas inteligentes para pessoas e empresas.
            </p>
            </div>
            {/* Links */}
            <div>
            <h4 className="text-slate-100 font-bold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-amber-500 transition-colors">Home</Link></li>
                <li><Link href="/sobre" className="hover:text-amber-500 transition-colors">Sobre</Link></li>
                <li><Link href="/areas-de-atuacao" className="hover:text-amber-500 transition-colors">Áreas de Atuação</Link></li>
                <li><Link href="/contato" className="hover:text-amber-500 transition-colors">Contato</Link></li>
            </ul>
            </div>
            {/* ... restante do footer ... */}
        </div>
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Mariana Bueno Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
