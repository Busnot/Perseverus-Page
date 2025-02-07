import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaBox, FaDumbbell, FaLaptopCode } from "react-icons/fa"; // Iconos de React Icons

const Portfolio = () => {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  // Datos de proyectos (puedes reemplazar esto con tus datos reales)
  const projects = [
    {
      id: 1,
      name: "Plataforma de E-commerce",
      description: "Desarrollamos una plataforma de comercio electrónico para una empresa de moda.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      results: "Aumento del 30% en ventas en los primeros 3 meses.",
      icon: <FaShoppingCart className="text-4xl text-blue-500" />, // Ícono de carrito de compras
    },
    {
      id: 2,
      name: "Sistema de Gestión de Inventarios",
      description: "Creamos un sistema para gestionar inventarios en tiempo real.",
      technologies: ["Python", "Django", "PostgreSQL", "Docker"],
      results: "Reducción del 20% en pérdidas por inventario.",
      icon: <FaBox className="text-4xl text-purple-500" />, // Ícono de caja
    },
    {
      id: 3,
      name: "Aplicación Móvil de Fitness",
      description: "Desarrollamos una app móvil para seguimiento de rutinas de ejercicio.",
      technologies: ["Flutter", "Firebase", "GraphQL"],
      results: "Más de 10,000 descargas en el primer mes.",
      icon: <FaDumbbell className="text-4xl text-blue-500" />, // Ícono de pesas
    },

  ];

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
          Nuestro Portafolio
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Estos son algunos de los proyectos en los que hemos trabajado. Cada uno representa nuestro compromiso con la calidad y la innovación.
        </motion.p>

        {/* Tarjetas de Proyectos */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }} // Efecto de escala al pasar el mouse
              className="bg-white p-6 rounded-lg shadow-lg transform transition-transform duration-300 flex flex-col items-center text-center"
            >
              {/* Ícono del Proyecto */}
              <div className="mb-4">
                {project.icon}
              </div>

              {/* Nombre del Proyecto */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.name}
              </h3>

              {/* Descripción */}
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tecnologías Utilizadas */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Resultados Clave */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Resultados Clave
                </h4>
                <p className="text-gray-600">{project.results}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;