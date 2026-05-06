/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Search, 
  User, 
  ShoppingBag, 
  Leaf, 
  Heart, 
  Hammer, 
  Truck, 
  ArrowRight, 
  Instagram,
  CheckCircle2,
  ShieldCheck,
  Star,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-accent/90 backdrop-blur-md border-b border-brand-dark/10 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button className="lg:hidden text-brand-dark" onClick={() => setIsMenuOpen(true)}>
          <Menu size={24} />
        </button>

        {/* Logo */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl md:text-3xl font-serif tracking-widest text-brand-dark uppercase">Minimansiones</h1>
          <span className="text-[10px] hidden md:block tracking-[0.3em] uppercase text-brand-dark/60 -mt-1">Luxury Homes for Little Souls</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 text-xs font-medium uppercase tracking-wide">
          {['Accueil', 'Collections', 'Sur-mesure', 'Matériaux & Éthique', 'À propos'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link-underline">
              {item}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-brand-dark">
          <Search size={20} className="hidden md:block cursor-pointer hover:opacity-60 transition-opacity" />
          <User size={20} className="cursor-pointer hover:opacity-60 transition-opacity" />
          <div className="relative cursor-pointer hover:opacity-60 transition-opacity">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-brand-primary text-white text-[8px] w-3 h-3 rounded-full flex items-center justify-center font-bold">0</span>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-[60]"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-full max-w-xs bg-brand-accent z-[70] p-8 shadow-2xl"
            >
              <button className="absolute top-6 right-6" onClick={() => setIsMenuOpen(false)}>
                <X size={24} />
              </button>
              <div className="flex flex-col space-y-6 mt-12 text-lg font-serif">
                {['Accueil', 'Collections', 'Sur-mesure', 'Matériaux & Éthique', 'À propos', 'Blog & Galerie'].map((item) => (
                  <a key={item} href="#" className="border-b border-brand-dark/10 pb-2" onClick={() => setIsMenuOpen(false)}>
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url('https://picsum.photos/seed/hamster-mansion/1920/1080')`,
          // Note: In a real app, I'd use the generated hero_hamster_mansion asset
        }}
      />
      
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full pt-20">
          <div className="max-w-2xl text-white">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-serif leading-tight mb-4"
            >
              Des demeures<br />d'exception
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl font-serif italic mb-8 opacity-90"
            >
              pour des vies extraordinaires
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-sm md:text-base leading-relaxed mb-10 max-w-lg font-light tracking-wide opacity-80"
            >
              Conceptions artisanales haut de gamme pour hamsters, cochons d'Inde, rats et autres petits explorateurs.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <button className="bg-brand-primary/90 hover:bg-brand-primary text-white px-8 py-4 rounded-sm text-xs font-medium uppercase tracking-[0.2em] transition-all transform hover:-translate-y-1">
                Découvrir les collections
              </button>
              <button className="border border-white/50 hover:border-white text-white px-8 py-4 rounded-sm text-xs font-medium uppercase tracking-[0.2em] transition-all backdrop-blur-sm transform hover:-translate-y-1">
                Créer du sur-mesure
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Carousel Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`w-2 h-2 rounded-full border border-white ${i === 2 ? 'bg-white' : 'bg-transparent'}`}></div>
        ))}
      </div>
    </section>
  );
};

const Benefits = () => {
  const items = [
    { icon: Leaf, title: 'Matériaux naturels', desc: 'et non toxiques' },
    { icon: Heart, title: 'Conçu pour le bien-être', desc: 'et la stimulation' },
    { icon: Hammer, title: 'Fabrication artisanale', desc: 'en petites séries' },
    { icon: Truck, title: 'Emballage sécurisé', desc: '& livraison soignée' },
  ];

  return (
    <section className="py-12 bg-white border-b border-brand-dark/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="flex items-center space-x-4 group">
              <div className="p-3 rounded-full bg-brand-accent group-hover:bg-brand-primary group-hover:text-white transition-colors">
                <item.icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-dark">{item.title}</h4>
                <p className="text-[10px] uppercase tracking-widest text-brand-dark/50 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CollectionsSection = () => {
  const collections = [
    { name: 'LA SUITE ROYALE', desc: 'Élégance classique & détails dorés', price: '189€', image: 'https://picsum.photos/seed/royale/600/800' },
    { name: 'LE BISTRO PARISIEN', desc: 'Charme français & esprit gourmand', price: '159€', image: 'https://picsum.photos/seed/bistro/600/800' },
    { name: 'LE CHALET SUISSE', desc: 'Ambiance montagnarde & cosy', price: '169€', image: 'https://picsum.photos/seed/chalet/600/800' },
    { name: 'MINIMALISME JAPONAIS', desc: 'Sérénité & lignes épurées', price: '149€', image: 'https://picsum.photos/seed/japan/600/800' },
  ];

  return (
    <section id="collections" className="py-24 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/40 mb-2 block">Nos Collections</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Des univers uniques</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="relative group cursor-pointer aspect-[3/4] overflow-hidden rounded-lg luxury-glow"
            >
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-left text-white">
                <h3 className="text-xl font-serif mb-1">{item.name}</h3>
                <p className="text-[10px] uppercase tracking-wider opacity-80 mb-3">{item.desc}</p>
                <span className="text-sm font-light">DÈS {item.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="mt-16 bg-brand-primary/10 hover:bg-brand-primary text-brand-primary hover:text-white px-10 py-4 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] transition-all border border-brand-primary/20">
          Voir toutes les collections
        </button>
      </div>
    </section>
  );
};

const CustomizerSection = () => {
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, label: 'Espèce' },
    { id: 2, label: 'Thème' },
    { id: 3, label: 'Modules' },
    { id: 4, label: 'Finitions' },
    { id: 5, label: 'Récapitulatif' },
  ];

  const species = [
    { name: 'Hamster', icon: '🐹' },
    { name: 'Cochon d\'Inde', icon: '🐹' },
    { name: 'Rat', icon: '🐀' },
    { name: 'Autre', icon: '✨' },
  ];

  return (
    <section id="sur-mesure" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/40 mb-2 block">Sur-Mesure</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-brand-dark">Créez la mansion parfaite</h2>
            <div className="w-12 h-1 bg-brand-primary mb-8"></div>
            <p className="text-brand-dark/60 leading-relaxed mb-10 max-w-md">
              Notre configurateur 3D vous permet d'imaginer un espace qui correspond aux besoins de votre compagnon et à vos envies.
            </p>

            <div className="space-y-6 mb-12">
              {[
                { icon: CheckCircle2, text: 'Choisissez l\'espèce' },
                { icon: CheckCircle2, text: 'Sélectionnez le thème' },
                { icon: CheckCircle2, text: 'Personnalisez les modules' },
                { icon: CheckCircle2, text: 'Recevez votre devis personnalisé' },
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <item.icon size={20} className="text-brand-primary" />
                  <span className="text-sm tracking-wide text-brand-dark/80">{item.text}</span>
                </div>
              ))}
            </div>

            <button className="bg-brand-primary hover:bg-brand-dark text-white px-10 py-5 rounded-sm text-[10px] font-bold uppercase tracking-[0.3em] transition-all flex items-center group">
              Commencer ma création
              <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Configurator UI Mockup */}
          <div className="bg-brand-accent/50 rounded-2xl p-6 md:p-10 border border-brand-dark/5 shadow-inner">
            {/* Steps Header */}
            <div className="flex justify-between items-center mb-10 relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-brand-dark/10 -translate-y-1/2 z-0"></div>
              {steps.map((s) => (
                <div key={s.id} className="relative z-10 flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step === s.id ? 'bg-brand-primary text-white scale-110 shadow-lg' : 'bg-white text-brand-dark/40 border border-brand-dark/10'}`}>
                    {s.id}
                  </div>
                  <span className={`text-[10px] uppercase tracking-wider mt-2 font-medium ${step === s.id ? 'text-brand-primary animate-pulse' : 'text-brand-dark/40'}`}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Config Content */}
            <div className="bg-white rounded-xl p-6 shadow-sm min-h-[350px] flex flex-col">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark mb-6">Choisissez votre espèce</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {species.map((s) => (
                  <label key={s.name} className="relative group cursor-pointer">
                    <input type="radio" name="species" className="sr-only" onChange={() => {}} />
                    <div className="border border-brand-dark/10 group-hover:border-brand-primary p-4 rounded-lg flex items-center space-x-3 transition-colors peer-checked:bg-brand-primary/5 peer-checked:border-brand-primary">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="text-xs font-medium text-brand-dark/70">{s.name}</span>
                    </div>
                  </label>
                ))}
              </div>

              {/* Preview */}
              <div className="flex-1 flex flex-col items-center justify-center border-t border-brand-dark/5 pt-6">
                <div className="w-full aspect-video bg-brand-accent/30 rounded-lg flex items-center justify-center relative overflow-hidden group">
                  <img 
                    src="https://picsum.photos/seed/mini-mansion-3d/600/400" 
                    alt="Configurator Preview" 
                    className="object-contain opacity-80 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-2 right-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-[8px] uppercase tracking-widest text-brand-dark/60 border border-brand-dark/10">
                    L 60cm x P 40cm x H 35cm
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button 
                  onClick={() => setStep(step < 5 ? step + 1 : 1)}
                  className="bg-brand-primary/90 hover:bg-brand-primary text-white px-6 py-3 rounded-md text-[10px] font-bold uppercase tracking-widest flex items-center group transition-all"
                >
                  Suivant
                  <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EthicSection = () => {
  return (
    <section className="py-24 bg-brand-dark text-brand-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                   <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/wood/400/400" alt="Wood texture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/workshop/400/300" alt="Workshop" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/detail/400/300" alt="Detail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                   <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <img src="https://picsum.photos/seed/animal/400/400" alt="Happy pet" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                   </div>
                </div>
             </div>
             {/* Vet Badge Overlay */}
             <div className="absolute -bottom-8 -right-8 bg-white text-brand-dark p-6 rounded-2xl shadow-2xl max-w-[280px] border border-black/10 hidden md:block">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-primary">
                    <img src="https://picsum.photos/seed/vet/100/100" alt="Dr Claire Martin" />
                  </div>
                  <div>
                    <h5 className="font-bold text-xs uppercase">Dr. Claire Martin</h5>
                    <p className="text-[10px] text-brand-dark/50 italic font-serif">Vétérinaire NAC</p>
                  </div>
                </div>
                <p className="text-[11px] leading-relaxed italic text-brand-dark/80 relative">
                  <span className="text-3xl font-serif text-brand-primary absolute -top-4 -left-2 opacity-20">"</span>
                  Approving Minimansiones for the exceptional quality and physiological respect of their habitats.
                </p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-[10px] uppercase tracking-[0.4em] mb-4 block opacity-40">Notre engagement éthique</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">Sécurité, qualité, respect</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                  <Leaf className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Matériaux Noble & Sains</h4>
                  <p className="text-xs text-brand-accent/60 leading-relaxed font-light tracking-wide">Bois non traités, colles naturelles, peintures à l'eau sans COV pour une sécurité respiratoire totale.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20 group-hover:bg-brand-primary group-hover:border-brand-primary transition-all">
                  <ShieldCheck className="text-brand-accent" size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-2">Validation Vétérinaire</h4>
                  <p className="text-xs text-brand-accent/60 leading-relaxed font-light tracking-wide">Chaque design est soumis à un panel d'experts pour s'assurer qu'il favorise le comportement naturel.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-12 opacity-80 border-t border-brand-accent/10 pt-12">
              <div className="flex flex-col items-center">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Trustpilot_logo.svg" alt="Trustpilot" className="h-6 mb-2 grayscale invert" />
                 <div className="flex space-x-1">
                   {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" className="text-green-500" />)}
                 </div>
                 <span className="text-[10px] mt-1 font-medium italic">4.9/5 sur 250 avis</span>
              </div>
              <div className="h-10 w-[1px] bg-brand-accent/20"></div>
              <div className="flex items-center space-x-4">
                 <div className="text-center">
                    <p className="text-2xl font-serif">100%</p>
                    <p className="text-[9px] uppercase tracking-widest">Artisanal</p>
                 </div>
                 <div className="text-center">
                    <p className="text-2xl font-serif">0%</p>
                    <p className="text-[9px] uppercase tracking-widest">Plastique</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SocialSection = () => {
  const posts = [
    { id: 1, user: '@hammy_life', img: 'https://picsum.photos/seed/insta1/400/400' },
    { id: 2, user: '@cocoguinea', img: 'https://picsum.photos/seed/insta2/400/400' },
    { id: 3, user: '@ratounet_house', img: 'https://picsum.photos/seed/insta3/400/400' },
    { id: 4, user: '@squirrel_lover', img: 'https://picsum.photos/seed/insta4/400/400' },
  ];

  return (
    <section className="py-24 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-[10px] uppercase tracking-[0.4em] text-brand-dark/40 mb-2 block">Ils ont adopté Minimansiones</span>
        <h2 className="text-4xl md:text-5xl font-serif mb-16">Leurs petits en sont fous !</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <motion.div 
              key={post.id}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer shadow-lg"
            >
              <img 
                src={post.img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="text-white" size={32} />
              </div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white drop-shadow-md">
                <Instagram size={14} className="opacity-80" />
                <span className="text-[10px] uppercase tracking-widest font-semibold">{post.user}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-brand-dark/5 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl font-serif tracking-widest uppercase mb-4">Minimansiones</h2>
            <p className="text-xs text-brand-dark/50 leading-relaxed mb-6 max-w-xs">
              L'art de l'habitat pour les petits compagnons. Créateurs de refuges luxueux, durables et éthiques.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-brand-dark hover:text-brand-primary cursor-pointer transition-colors" />
              <div className="w-5 h-5 rounded-full bg-brand-dark hover:bg-brand-primary cursor-pointer flex items-center justify-center transition-colors">
                <span className="text-white font-bold text-[10px]">f</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-brand-dark hover:bg-brand-primary cursor-pointer flex items-center justify-center transition-colors">
                <span className="text-white font-bold text-[10px]">p</span>
              </div>
            </div>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-dark/40">Navigation</h4>
             <ul className="space-y-4 text-xs font-medium uppercase tracking-wide">
               {['Produits', 'Collections', 'Sur-messure', 'Entretien', 'À propos'].map(item => (
                 <li key={item}><a href="#" className="hover:text-brand-primary transition-colors">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-dark/40">Aide & Contact</h4>
             <ul className="space-y-4 text-xs font-medium uppercase tracking-wide">
               {['Livraison', 'Retours', 'Paiement Sécurisé', 'FAQ', 'Contact'].map(item => (
                 <li key={item}><a href="#" className="hover:text-brand-primary transition-colors">{item}</a></li>
               ))}
             </ul>
          </div>

          <div>
             <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold mb-8 text-brand-dark/40">Engagement Premium</h4>
             <div className="space-y-6">
                <div className="flex items-start space-x-4">
                   <div className="bg-brand-accent p-2 rounded-lg"><Truck size={16} /></div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-wider">Livraison Offerte</p>
                     <p className="text-[9px] text-brand-dark/50 mt-1 uppercase">Dès 150€ d'achat</p>
                   </div>
                </div>
                <div className="flex items-start space-x-4">
                   <div className="bg-brand-accent p-2 rounded-lg text-emerald-600"><ShieldCheck size={16} /></div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-wider">Paiement 100% Sécurisé</p>
                     <p className="text-[9px] text-brand-dark/50 mt-1 uppercase">Stripe, PayPal, CB</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="border-t border-brand-dark/5 pt-12 flex flex-col md:flex-row items-center justify-between text-[9px] uppercase tracking-[0.2em] text-brand-dark/40">
           <p>© 2024 Minimansiones. Tous droits réservés.</p>
           <div className="flex space-x-8 mt-6 md:mt-0">
              <a href="#" className="hover:text-brand-dark">Mentions Légales</a>
              <a href="#" className="hover:text-brand-dark">CGV</a>
              <a href="#" className="hover:text-brand-dark">Confidentialité</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Top Banner */}
      <div className="bg-brand-dark text-brand-accent py-2 px-6 text-center overflow-hidden">
        <motion.p 
          animate={{ x: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-[10px] uppercase tracking-[0.3em] font-medium"
        >
          🎁 Livraison offerte dès 150€ en France métropolitaine • Artisans Ebénistes passionnés
        </motion.p>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Benefits />
        <CollectionsSection />
        <CustomizerSection />
        <EthicSection />
        <SocialSection />
      </main>

      <Footer />
    </div>
  );
}
