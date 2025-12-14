import { Scale, Gavel, Shield, BookOpen } from 'lucide-react';

export const SITE_CONFIG = {
  name: "Mariana Bueno",
  title: "Advocacia & Consultoria Jurídica",
  phone: "(41) 99999-9999",
  email: "contato@marianabueno.adv.br",
  address: "Av. Sete de Setembro, 1234 - Curitiba, PR"
};

export const SERVICES = [
  {
    id: 1,
    title: "Direito Civil",
    description: "Resolução de conflitos de natureza familiar, sucessória e contratual com foco na preservação de direitos.",
    icon: Scale
  },
  {
    id: 2,
    title: "Direito Trabalhista",
    description: "Defesa dos interesses de empregados e empregadores, garantindo o cumprimento da legislação vigente.",
    icon: Gavel
  },
  {
    id: 3,
    title: "Direito Empresarial",
    description: "Consultoria preventiva e contenciosa para empresas, visando a segurança jurídica nos negócios.",
    icon: Shield
  },
  {
    id: 4,
    title: "Consultoria Jurídica",
    description: "Análise de riscos e pareceres técnicos para tomadas de decisão assertivas.",
    icon: BookOpen
  }
];
