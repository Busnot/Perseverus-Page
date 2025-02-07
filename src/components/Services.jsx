import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Lo Que Ofrecemos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          En Perseverus, nos especializamos en ofrecer soluciones tecnológicas integrales para impulsar tu negocio. Desde el desarrollo de páginas web hasta el diseño de bases de datos y la creación de interfaces de usuario atractivas, tenemos todo lo que necesitas.
        </motion.p>

        {/* Tarjetas de Servicios */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Desarrollo de Páginas Web */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desarrollo de Páginas Web</h3>
            <p className="text-gray-600">
              Creamos sitios web modernos, responsivos y optimizados para SEO que se adaptan a tus necesidades.
            </p>
          </div>

          {/* Diseño de Bases de Datos */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diseño de Bases de Datos</h3>
            <p className="text-gray-600">
              Diseñamos bases de datos robustas y escalables para garantizar un manejo eficiente de la información.
            </p>
          </div>

          {/* Programadores Backend */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Programadores Backend</h3>
            <p className="text-gray-600">
              Desarrollamos sistemas backend potentes y seguros para garantizar un rendimiento óptimo.
            </p>
          </div>

          {/* Diseñadores UI/UX */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Diseñadores UI/UX</h3>
            <p className="text-gray-600">
              Creamos interfaces de usuario intuitivas y atractivas para una experiencia de usuario excepcional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;