import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
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
      <div className="container mx-auto px-6">
        {/* Título */}
        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-4xl font-bold text-gray-800 text-center mb-4"
        >
          Contáctanos
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          ¿Tienes alguna pregunta o quieres trabajar con nosotros? ¡Estamos aquí para ayudarte! Completa el formulario o contáctanos directamente.
        </motion.p>

        {/* Contenido */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Formulario de Contacto */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full lg:w-1/2 bg-white p-8 rounded-lg shadow-lg mb-8 lg:mb-0"
          >
            <form>
              {/* Nombre */}
              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-2" htmlFor="name">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Correo Electrónico */}
              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-2" htmlFor="email">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Mensaje */}
              <div className="mb-6">
                <label className="block text-gray-800 font-semibold mb-2" htmlFor="message">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              {/* Botón de Envío */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={scaleIn}
              >
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Enviar Mensaje
                </button>
              </motion.div>
            </form>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Información de Contacto</h3>
            <ul className="text-gray-600">
              <li className="mb-4">
                <strong>Correo Electrónico:</strong> atencionalcliente@perseverus.com
              </li>
              <li className="mb-4">
                <strong>Teléfono:</strong> +503 1252 5245
              </li>
              <li className="mb-4">
                <strong>Redes Sociales:</strong>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <i className="fab fa-facebook text-2xl"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <i className="fab fa-twitter text-2xl"></i>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-600">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;