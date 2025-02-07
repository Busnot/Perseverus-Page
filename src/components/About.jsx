import React from "react";
import { motion } from "framer-motion";

const About = () => {
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
    <section className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Título */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Quiénes Somos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          En <strong>Perseverus</strong>, somos un equipo apasionado por la tecnología y la innovación. Nos especializamos en el desarrollo de software a medida, diseño UI/UX y soluciones backend robustas. Nuestra misión es ayudar a las empresas a alcanzar su máximo potencial a través de herramientas tecnológicas eficientes y escalables.
        </motion.p>

        {/* Valores */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovación</h3>
            <p className="text-gray-600">
              Utilizamos las últimas tecnologías para crear soluciones vanguardistas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Compromiso</h3>
            <p className="text-gray-600">
              Trabajamos contigo en cada paso para garantizar resultados excepcionales.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Calidad</h3>
            <p className="text-gray-600">
              Nos enfocamos en entregar productos de alta calidad, probados y optimizados.
            </p>
          </div>
        </motion.div>

        {/* Botón CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <a
            href="#contacto"
            className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
          >
            Conoce Más
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;