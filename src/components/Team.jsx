import React from "react";
import { motion } from "framer-motion";

const Team = () => {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  // Datos del equipo (puedes reemplazar esto con tus datos reales)
  const teamMembers = [
    {
      name: "Kamilo Martinez",
      role: "Desarrollador Frontend",
      description: "Especialista en React y diseño de interfaces interactivas.",
      image: "https://plus.unsplash.com/premium_vector-1719858610096-bba4498e5fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyZmlsfGVufDB8fDB8fHww", // Reemplaza con la foto de Juan
    },
    {
      name: "Carolina Flores",
      role: "Diseñadora UI/UX",
      description: "Crea experiencias de usuario intuitivas y atractivas.",
      image: "https://plus.unsplash.com/premium_vector-1728553013151-9ecc71c746bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D", // Reemplaza con la foto de María
    },
    {
      name: "Carlos Chicas",
      role: "Desarrollador Backend",
      description: "Experto en Node.js y bases de datos escalables.",
      image: "https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyZmlsfGVufDB8fDB8fHww", // Reemplaza con la foto de Carlos
    },
    {
      name: "Mafusita Uwu",
      role: "Diseñadora de Bases de Datos",
      description: "Diseña y optimiza bases de datos para un rendimiento óptimo.",
      image: "https://plus.unsplash.com/premium_vector-1727952231430-87b459905e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D", // Reemplaza con la foto de Ana
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
          Nuestro Equipo
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          En Perseverus, contamos con un equipo de expertos apasionados por la tecnología y comprometidos con la excelencia. Conoce a las mentes creativas detrás de nuestros proyectos.
        </motion.p>

        {/* Tarjetas de Integrantes */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              {/* Foto */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              {/* Nombre */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              {/* Rol */}
              <p className="text-lg text-gray-600 mb-4">{member.role}</p>
              {/* Descripción */}
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;