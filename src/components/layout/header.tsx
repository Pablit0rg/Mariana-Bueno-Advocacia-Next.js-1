'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/areas-de-atuacao', label: 'Áreas de Atuação' },
    { href: '/contato', label: 'Contato' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <Scale className={`w-8 h-8 ${isScrolled ? 'text-amber-600' : 'text-amber-500'}`} />
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold leading-none ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Mariana Bueno
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${isScrolled ? 'text-slate-500' : 'text-slate-300'}`}>
              Advocacia
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium text-sm hover:text-amber-500 transition-colors ${
                isActive(link.href)
                  ? 'text-amber-600' 
                  : isScrolled ? 'text-slate-600' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato">
             <Button size="sm">Consultar</Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-amber-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu className={!isScrolled && !isMenuOpen ? 'text-white' : ''} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-left py-2 px-2 rounded hover:bg-slate-50 font-medium ${
                isActive(link.href) ? 'text-amber-600 bg-amber-50' : 'text-slate-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contato" onClick={() => setIsMenuOpen(false)}>
            <Button className="w-full justify-center">Agendar Consulta</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
