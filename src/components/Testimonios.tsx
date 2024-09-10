import { motion } from 'framer-motion';
import {FaStar } from 'react-icons/fa';
// Definir la interfaz para los props de TestimonialCard
interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  testimony: string;
}

const TestimonialCard = ({ name, role, rating, testimony }: TestimonialCardProps) => {
  return (
    <motion.div 
      className="bg-white shadow-xl p-8 rounded-lg border border-gray-200 transform hover:scale-105 transition duration-300 ease-in-out"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mb-4 relative">
        <p className="text-gray-700 italic text-lg">{testimony}</p>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-primary">{name}</h3>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
        <div className="flex space-x-1">
          {/* Usar Array.from para generar las estrellas */}
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="text-yellow-500 text-lg" />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: 'Juan Pérez',
      role: 'Cliente frecuente',
      rating: 5,
      testimony: 'La experiencia fue increíble. Todo estuvo organizado y disfrutamos al máximo.',
    },
    {
      name: 'Ana García',
      role: 'Viajera ocasional',
      rating: 4,
      testimony: 'Muy buen servicio y atención en cada detalle del viaje. Volveré a viajar con ellos.',
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Aventurero',
      rating: 5,
      testimony: 'Una de las mejores aventuras de mi vida. Increíble servicio y una atención al detalle asombrosa.',
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-white">
      <div className="container mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
