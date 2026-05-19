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
  X,
  Eye,
  BadgeCheck,
  HeartHandshake,
  Clock,
  MapPin
} from 'lucide-react';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'valores', label: 'Valores' },
    { id: 'vision', label: 'Nuestra Visión' },
    { id: 'excelencia', label: 'Excelencia' },
    { id: 'por-que-elegirnos', label: 'Por Qué Elegirnos' },
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
                <a href="tel:+5491159697198" className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors mb-3">
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
            <img src="/logo.png" alt="Cleaning Lives" className="h-12 w-auto" />
            <span className={`text-2xl font-bold tracking-tight transition-colors ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              Cleaning Lives
            </span>
          </div>

          <button 
            onClick={() => setIsMenuOpen(true)}
            className={`p-2 rounded-lg transition-all duration-300 ${scrolled ? 'bg-slate-100 text-slate-800 hover:bg-slate-200' : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md'}`}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 pb-32 overflow-hidden bg-slate-900 border-b border-slate-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=2532" 
            alt="Corporate Lobby" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-50"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center mt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl mx-auto flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-md">
              <Building2 className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em]">Especialistas en Consorcios</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-slate-900 mb-8 tracking-tight leading-[1.1] max-w-3xl drop-shadow-sm mix-blend-overlay text-white opacity-90">
              Cuidamos el valor de <br />
              <span className="font-semibold text-white">su edificio.</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-12 max-w-2xl leading-relaxed font-medium mx-auto text-slate-900 drop-shadow-md">
              Eleve el estándar de su consorcio con personal capacitado, supervisión constante y atención al mínimo detalle. Un servicio pensado para la tranquilidad de su espacio.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Values / Philosophy */}
      <section id="valores" className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Calidad Premium</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                Implementamos estándares de hotelería adaptados meticulosamente al entorno residencial y de consorcios.
              </p>
            </motion.div>

            {/* Value Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Leaf className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Sustentabilidad</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                Utilizamos procesos amigables con el medio ambiente para cuidar su salud y la del ecosistema.
              </p>
            </motion.div>

            {/* Value Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white p-10 rounded-2xl border border-slate-200 shadow-sm text-center"
            >
              <div className="w-12 h-12 mx-auto bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6">
                <Gem className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Atención al Detalle</h3>
              <p className="text-slate-500 font-light leading-relaxed text-sm">
                Donde otros solo ven mantenimiento, nosotros vemos armonía, perfección y bienestar continuo.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-24 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
               <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
               >
                 <span className="text-slate-500 font-semibold tracking-widest text-xs uppercase mb-4 block">Nuestra Visión</span>
                 <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6 leading-tight">
                   Redefiniendo el <br />estándar corporativo.
                 </h2>
                 <p className="text-slate-500 font-light leading-relaxed mb-6">
                   Creemos en el crecimiento organizado y en forjar relaciones de largo plazo. Nuestra misión es profesionalizar cada aspecto del servicio, garantizando transparencia operativa y ejecución meticulosa.
                 </p>
                 <p className="text-slate-500 font-light leading-relaxed">
                   Invertimos en capacitación continua e innovación técnica y humanística, asegurando que su consorcio reciba no solo un servicio de limpieza, sino una administración del bienestar del espacio donde reside el mayor capital corporativo.
                 </p>
               </motion.div>
            </div>
            <div className="w-full md:w-1/2">
               <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="relative"
               >
                 <div className="bg-slate-100 p-2 md:p-3 rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-200/50">
                   <div className="aspect-[4/5] md:aspect-square object-cover rounded-[1.5rem] overflow-hidden">
                     <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" alt="Corporate Vision" className="w-full h-full object-cover scale-105" />
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase - Image Only Section */}
      <section id="excelencia" className="py-24 relative overflow-hidden bg-slate-100 border-b border-slate-200">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="bg-white p-2 rounded-[2rem] border border-slate-200 shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1500" 
                alt="Edificio Residencial" 
                className="relative rounded-[1.5rem] object-cover h-[400px] md:h-[600px] w-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
              <p className="text-slate-600 italic font-serif text-lg leading-relaxed text-center">"La tranquilidad de su hogar comienza desde el momento en que cruza el lobby."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="por-que-elegirnos" className="py-24 bg-slate-900 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800/10 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-slate-400 font-semibold tracking-widest text-xs uppercase mb-4 block">Diferencial</span>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">¿Por qué elegir <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">Cleaning Lives?</span></h2>
            <p className="text-slate-400 font-light leading-relaxed">
              Construimos relaciones de confianza a largo plazo respaldadas por nuestra ética de trabajo y compromiso corporativo, asegurando que cada detalle suma al valor de su propiedad.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: "Supervisión profesional",
                desc: "Auditorías continuas para garantizar que se cumplan nuestros exigentes estándares de calidad y mantener la excelencia operativa."
              },
              {
                icon: BadgeCheck,
                title: "Personal capacitado",
                desc: "Equipo altamente entrenado, uniformado y con amplia experiencia en múltiples entornos corporativos y residenciales premium."
              },
              {
                icon: HeartHandshake,
                title: "Atención personalizada",
                desc: "Un enfoque a medida, escuchando y adaptando nuestros servicios exactos a las necesidades operativas de cada cliente y consorcio."
              },
              {
                icon: Clock,
                title: "Compromiso y puntualidad",
                desc: "Respetamos absolutamente sus tiempos, ejecutando las tareas de forma eficiente sin alterar la rutina del edificio ni de sus habitantes."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 rounded-2xl hover:bg-slate-800/60 hover:border-slate-600 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-slate-700/50 rounded-xl flex items-center justify-center mb-6 border border-slate-600/50 group-hover:bg-slate-700 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 text-slate-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-slate-500 font-semibold tracking-widest text-xs uppercase mb-4 block">Especialización</span>
            <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Atención integral por sectores</h2>
            <p className="text-slate-500 font-light leading-relaxed">
              Comprendemos que cada área de su consorcio requiere un tratamiento específico para preservar su estética y funcionalidad. Nosotros cubrimos todos los frentes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl h-[400px] shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-200"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-4 text-white border border-white/30">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 font-light leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-200 rounded-[2rem] p-12 md:p-16 text-center relative max-w-4xl mx-auto mb-16 shadow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-serif italic text-slate-800 mb-6 font-light">
              "La calidad nunca es un accidente; es siempre el resultado de un esfuerzo inteligente y sostenido."
            </h2>
            <p className="text-slate-500 font-light text-lg">
              Le invitamos a formar parte de nuestra historia de excelencia y compromiso corporativo.
            </p>
          </motion.div>

          {/* Join our team CTA */}
          <motion.div 
            id="equipo"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-slate-900 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden border border-slate-800"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2000')] opacity-5 bg-cover bg-center mix-blend-luminosity"></div>
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 mx-auto mb-6">
                <Briefcase className="w-5 h-5 text-slate-300" />
              </div>
              <h3 className="text-2xl font-light text-white mb-4">¿Querés ser parte de nuestro equipo?</h3>
              <p className="text-slate-400 mb-8 font-light leading-relaxed">
                Buscamos personas proactivas, responsables y con vocación de servicio. Ofrecemos capacitación constante, un excelente clima laboral y condiciones de contratación transparentes.
              </p>
              <a 
  href="mailto:cleaninglives88@gmail.com?subject=Postulación%20CV%20-%20Cleaning%20Lives&body=Hola%20Cleaning%20Lives,%0D%0A%0D%0AAdjunto%20mi%20CV%20para%20ser%20considerado%20en%20futuras%20búsquedas.%0D%0A%0D%0AMuchas%20gracias." 
  className="inline-block bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-medium transition-colors text-sm tracking-wide">
  Enviar CV
</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-slate-500 font-semibold tracking-widest text-xs uppercase mb-4 block">Contacto</span>
              <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-6">Estamos a su disposición</h2>
              <p className="text-slate-500 font-light">
                Elija el medio de su preferencia para comunicarse con nosotros.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* WhatsApp */}
              <motion.a 
                href="https://wa.me/5491159697198"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors duration-300">
                  <WhatsAppIcon className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">WhatsApp</h3>
                <p className="text-slate-500 text-sm mb-4 font-light">Chat directo para consultas rápidas</p>
                <span className="text-slate-900 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 mt-auto">
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
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                <p className="text-slate-500 text-sm mb-4 font-light">cleaninglives88@gmail.com</p>
                <span className="text-slate-900 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 mt-auto">
                  Enviar correo <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>

              {/* Phone */}
              <motion.a 
                href="tel:+5491159697198"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-100 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-slate-700" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Teléfono</h3>
                <p className="text-slate-500 text-sm mb-4 font-light">+54 9 11 5969 7198</p>
                <span className="text-slate-900 font-medium text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-2 mt-auto">
                  Llamar ahora <ArrowRight className="w-4 h-4" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
            <div className="max-w-sm">
             <div className="flex items-center gap-3 mb-6">
  <img src="/logo.png" alt="Cleaning Lives" className="h-12 w-auto" />
  <span className="text-2xl font-bold text-white tracking-tight">
    Cleaning Lives
  </span>
</div>
              <p className="text-slate-400 font-light leading-relaxed">
                Redefiniendo la experiencia en espacios corporativos y consorcios a través de la pulcritud y el servicio excepcional. Elevando el estándar de la industria.
              </p>
            </div>
            
            <div className="flex flex-col gap-5">
              <h4 className="text-slate-100 font-semibold tracking-widest uppercase text-xs mb-2">Contacto Directo</h4>
              <a href="https://wa.me/5491159697198" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="font-light">+54 9 11 5969 7198</span>
              </a>
              <a href="mailto:cleaninglives88@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-blue-400 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center group-hover:bg-blue-900/40 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-light">cleaninglives88@gmail.com</span>
              </a>
              <div className="flex items-center gap-4 text-slate-400 group">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="font-light">Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 text-center md:flex md:justify-between md:text-left text-slate-500 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Cleaning Lives. Todos los derechos reservados.</p>
            <div className="flex gap-6 justify-center mt-4 md:mt-0">
               <span className="hover:text-blue-400 cursor-pointer transition-colors">Políticas de Privacidad</span>
               <span className="hover:text-blue-400 cursor-pointer transition-colors">Términos y Condiciones</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/5491159697198"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-[0_4px_15px_rgba(34,197,94,0.4)] hover:bg-green-600 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      >
        <WhatsAppIcon className="w-7 h-7" />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-4 py-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none font-medium hidden md:block">
          Chatear ahora
        </span>
      </a>
    </div>
  );
}

export default App;
