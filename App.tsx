import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Sparkles, 
  Users, 
  Star,
  Award,
  Gem,
  Leaf,
  Briefcase,
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'valores', label: 'Valores' },
    { id: 'excelencia', label: 'Excelencia' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'equipo', label: 'Equipo' },
    { id: 'contacto', label: 'Contacto' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Mobile/All-device Sidebar Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[110]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-[120] p-8 flex flex-col"
            >
              <div className="flex justify-end mb-12">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>
              
              <div className="flex flex-col gap-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Navegación</p>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`text-left text-lg font-medium transition-all duration-300 flex items-center justify-between group ${activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-500'}`}
                  >
                    {item.label}
                    <ArrowRight className={`w-4 h-4 transition-transform ${activeSection === item.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contacto Directo</p>
                <a href="tel:+54959697198" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+54 9 11 5969 7198</span>
                </a>
                <a href="mailto:cleaninglives88@gmail.com" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">cleaninglives88@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Sticky Navbar */}
      <nav id="inicio" className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Original Star/Sparkles Logo */}
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Cleaning Lives
            </span>
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-xl transition-all duration-300 ${scrolled ? 'bg-slate-100 text-slate-900 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2532" 
            alt="Pristine Corporate Lobby" 
            className="w-full h-full object-cover opacity-40 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-md">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">Especialistas en Consorcios</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-[1.1] drop-shadow-sm mix-blend-overlay text-white opacity-90">
              Cuidamos el valor de <br />
              <span className="font-bold">su edificio.</span>
            </h1>
            
            <p className="text-xl mb-12 max-w-2xl leading-relaxed font-medium mx-auto text-black drop-shadow-md">
              Más que limpieza, ofrecemos tranquilidad. Elevamos el estándar de su consorcio con personal capacitado, supervisión constante y atención al detalle.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Values / Philosophy - BUBBLE BACKGROUND */}
      <section id="valores" className="relative py-20 z-20">
        {/* Abstract Bubbles Background */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[100px] -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50/60 rounded-full blur-[80px] translate-y-1/3"></div>
        </div>

        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-10px_rgba(37,99,235,0.1)] hover:border-blue-100 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 shadow-inner">
                <Award className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Calidad Premium</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Implementamos estándares de hotelería adaptados meticulosamente al entorno residencial y de consorcios.
              </p>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-10px_rgba(16,185,129,0.1)] hover:border-emerald-100 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300 shadow-inner">
                <Leaf className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Sustentabilidad</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Utilizamos procesos amigables con el medio ambiente para cuidar su salud y la del planeta.
              </p>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white/80 backdrop-blur-md p-8 rounded-[2rem] border border-white/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_-10px_rgba(147,51,234,0.1)] hover:border-purple-100 hover:-translate-y-2 transition-all duration-300 group text-center"
            >
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300 shadow-inner">
                <Gem className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Atención al Detalle</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Donde otros solo ven limpieza, nosotros vemos perfección, armonía y bienestar.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Showcase - Image Only Section */}
      <section id="excelencia" className="py-24 relative overflow-hidden border-t border-white/20">
        {/* Background Decor */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 -z-20"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-1 opacity-5"></div>
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1500" 
              alt="Edificio Residencial" 
              className="relative rounded-[3rem] shadow-2xl shadow-slate-200/50 object-cover h-[500px] md:h-[700px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-white max-w-xs hidden md:block">
              <p className="text-slate-600 italic font-serif text-lg">"La tranquilidad de su hogar comienza desde el momento en que cruza el lobby del edificio."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - COOL GRID & GRADIENT */}
      <section id="servicios" className="py-24 relative overflow-hidden">
        {/* Tinted Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-50/30 -z-20"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] mask-image-linear-gradient(to bottom, transparent, black, transparent)"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Especialización</span>
            <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Atención integral por sectores</h2>
            <p className="text-lg text-slate-500 font-light">
              Cada área de su consorcio requiere un tratamiento específico. Nosotros lo cubrimos todo.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Lobbies y Recepciones",
                desc: "Mantenimiento constante para asegurar que la primera impresión de su edificio sea siempre impecable.",
                img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: Building2,
                title: "Palieres y Áreas Comunes",
                desc: "Limpieza profunda de pasillos, ascensores y escaleras, garantizando higiene y buen aroma diario.",
                img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=800"
              },
              {
                icon: Users,
                title: "Amenities y SUM",
                desc: "Cuidado especializado de gimnasios, piscinas, salones de usos múltiples y terrazas.",
                img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 text-white border border-white/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-white -z-20"></div>
        
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-white to-blue-50/50 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-blue-50/50 shadow-sm mb-12"
          >
            {/* CTA specific bubbles */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/80 rounded-full blur-[80px] -mr-32 -mt-32 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/80 rounded-full blur-[80px] -ml-32 -mb-32 mix-blend-multiply"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-serif italic text-slate-900 mb-6">
                "La calidad nunca es un accidente; es siempre el resultado de un esfuerzo inteligente."
              </h2>
              <p className="text-slate-600 mb-0 font-medium">
                Le invitamos a formar parte de nuestra historia de excelencia.
              </p>
            </div>
          </motion.div>

          {/* Join our team CTA */}
          <motion.div 
            id="equipo"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[2rem] p-10 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center"></div>
            <div className="relative z-10 max-w-xl mx-auto">
              <Briefcase className="w-10 h-10 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">¿Querés ser parte de nuestro equipo?</h3>
              <p className="text-slate-300 mb-6 font-light">
                Buscamos personas proactivas, responsables y con vocación de servicio. Ofrecemos capacitación constante, excelente clima laboral y contratación en blanco.
              </p>
              <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Enviar CV
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Contacto</span>
              <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">Estamos para escucharlo</h2>
              <p className="text-lg text-slate-500 font-light">
                Elija el medio de su preferencia para comunicarse con nosotros.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* WhatsApp */}
              <motion.a 
                href="https://wa.me/5492231234567" // Placeholder link, can be updated later
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-green-50 hover:border-green-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-green-500 transition-colors duration-300">
                  <MessageCircle className="w-8 h-8 text-green-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-4">Chat directo para consultas rápidas</p>
                <span className="text-green-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Iniciar chat <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>

              {/* Email */}
              <motion.a 
                href="mailto:cleaninglives88@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-blue-50 hover:border-blue-100 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-500 text-sm mb-4">cleaninglives88@gmail.com</p>
                <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Enviar correo <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a 
                href="tel:+5492231234567"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col items-center text-center group hover:bg-slate-100 hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-slate-900 transition-colors duration-300">
                  <Phone className="w-8 h-8 text-slate-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-slate-500 text-sm mb-4">+54 9 223 123 4567</p>
                <span className="text-slate-900 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                  Llamar ahora <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center gap-6 mb-16">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                {/* Footer Logo - Reverted to Sparkles Icon */}
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center shadow-sm">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">Cleaning Lives</span>
              </div>
              <p className="text-slate-500 max-w-xs mx-auto font-light">
                Redefiniendo la experiencia en espacios corporativos a través de la pulcritud y el servicio excepcional.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 text-center text-slate-400 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2025 Cleaning Lives Inc.</p>
            <div className="flex gap-4">
               <span>Privacidad</span>
               <span>Términos</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
