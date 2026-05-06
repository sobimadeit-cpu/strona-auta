/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Sun, 
  Activity, 
  Eye, 
  PencilLine, 
  Layers, 
  Menu, 
  X,
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Usługi', href: '#services' },
    { name: 'O nas', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md py-3 border-b border-white/5 shadow-xl' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-white font-extrabold text-xl tracking-tighter uppercase">
            Auto<span className="text-red-600">Szyby</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-400 hover:text-red-500 font-bold transition-all text-xs uppercase tracking-[0.1em]"
              >
                {link.name}
              </a>
            ))}
          </div>
          <a 
            href="tel:+48501461211"
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg font-bold transition-all text-xs uppercase tracking-wider shadow-lg shadow-red-600/20"
          >
            Zadzwoń: 501 461 211
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-slate-900 border-t border-white/10 p-4 md:hidden flex flex-col gap-4 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-300 hover:text-red-500 font-bold py-3 px-4 rounded-xl hover:bg-white/5 transition-all text-xs uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="tel:+48501461211"
              className="bg-red-600 text-white px-6 py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-lg shadow-red-600/20"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń teraz
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const BentoMain = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5">
        
        {/* --- Hero Card --- */}
        <motion.div 
          className="md:col-span-12 md:row-span-2 relative overflow-hidden rounded-[24px] bg-slate-900 border border-white/5 flex flex-col justify-center min-h-[450px] p-8 md:p-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1000" 
              alt="" 
              className="w-full h-full object-cover opacity-30 grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
          </div>
          
          <div className="relative z-10">
            <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[11px] mb-4 block">
              Eksperci od szyb samochodowych
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-white leading-[0.9] mb-6 tracking-tighter">
              SPRZEDAŻ<br />
              <span className="text-red-600">MONTAŻ</span><br />
              WYMIANA
            </h1>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed mb-8 font-medium text-balance">
              Profesjonalny serwis szyb dla Twojego bezpieczeństwa i komfortu jazdy. Gwarancja jakości i krótki czas oczekiwania.
            </p>
          </div>
        </motion.div>

        {/* --- Services Bento Grid --- */}
        <div id="services" className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { id: '01', title: 'Przyciemnianie', desc: 'Profesjonalne folie z atestem ABG. Redukcja nagrzewania.', icon: <Sun className="w-5 h-5" /> },
            { id: '02', title: 'Odpryski', desc: 'Naprawa punktowa odprysków i pęknięć typu "pajączek".', icon: <Activity className="w-5 h-5" /> },
            { id: '03', title: 'Lusterka', desc: 'Wymiana wkładów i naprawa mechanizmów lusterek.', icon: <Eye className="w-5 h-5" /> },
            { id: '04', title: 'Rysy', desc: 'Polerowanie szyb i usuwanie zarysowań od wycieraczek.', icon: <PencilLine className="w-5 h-5" /> },
            { id: '05', title: 'Tapicerka', desc: 'Drobne naprawy tapicerskie przy montażu szyb.', icon: <Layers className="w-5 h-5" /> },
          ].map((service, i) => (
            <motion.div 
              key={service.id}
              className="bg-slate-900 border border-white/5 rounded-[20px] p-6 flex flex-col gap-4 group hover:border-red-500/50 transition-all hover:bg-slate-900/80"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-black text-red-600 tracking-widest uppercase font-mono">{service.id}</span>
                <div className="text-slate-500 group-hover:text-red-500 transition-colors">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-white font-display font-bold text-lg tracking-tight">{service.title}</h3>
              <p className="text-slate-500 text-[13px] leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* --- Contact Form Card --- */}
        <motion.div 
          id="contact"
          className="md:col-span-7 bg-slate-900 border border-white/5 rounded-[24px] p-8 md:p-10"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 font-display font-black uppercase tracking-[0.2em] text-[11px] mb-6 block">Szybki Kontakt</span>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Imię i Nazwisko" 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-red-600 outline-none transition-all placeholder:text-slate-600" 
              />
              <input 
                type="tel" 
                placeholder="Nr Telefonu" 
                className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-red-600 outline-none transition-all placeholder:text-slate-600" 
              />
            </div>
            <textarea 
              placeholder="W czym możemy pomóc? Marka auta, rodzaj usterki..." 
              rows={3}
              className="w-full bg-slate-950 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-red-600 outline-none transition-all placeholder:text-slate-600 resize-none"
            ></textarea>
            <button className="w-full bg-red-600 hover:bg-red-700 text-white py-5 rounded-xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-red-900/20 active:scale-[0.98]">
              Wyślij wiadomość
            </button>
          </form>
        </motion.div>

        {/* --- Contact Info Card --- */}
        <motion.div 
          className="md:col-span-5 bg-slate-900 border border-white/5 rounded-[24px] p-8 md:p-10 flex flex-col justify-center"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-red-500 font-black uppercase tracking-[0.2em] text-[11px] mb-8 block font-mono">Lokalizacja i Godziny</span>
          <div className="space-y-5">
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Adres</span>
              <span className="text-white font-bold text-sm text-right">ul. Grodkowska 68, Nysa</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Pn - Pt</span>
              <span className="text-white font-bold text-sm">09:00 - 17:00</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-white/5">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Sobota</span>
              <span className="text-white font-bold text-sm">09:00 - 14:00</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Telefon</span>
              <a href="tel:+48501461211" className="text-red-500 font-black text-xl hover:text-white transition-colors tracking-tight">+48 501 461 211</a>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-white font-extrabold text-lg tracking-tighter uppercase">
              Auto<span className="text-red-600">Szyby</span>
            </span>
          </div>
          <p className="text-slate-600 text-xs font-bold uppercase tracking-[0.1em]">
            © {new Date().getFullYear()} Auto Szyby. Profesjonalny Serwis.
          </p>
          <div className="flex gap-8 text-[10px] items-center font-black uppercase tracking-widest">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Prywatność</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Regulamin</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen font-sans text-slate-100 bg-[#020617] selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <BentoMain />
      </main>
      <Footer />
    </div>
  );
}

