import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  // Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
  };

  // Datos de testimonios (puedes reemplazar esto con tus datos reales)
  const testimonials = [
    {
      name: "Mafu Martínez",
      company: "Tech Solutions",
      testimonial:
        "Perseverus transformó nuestra plataforma web. ¡El equipo es increíblemente talentoso y profesional!",
      image: "https://plus.unsplash.com/premium_vector-1727952231430-87b459905e1b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Carlos Chicas",
      company: "Innovate Corp",
      testimonial:
        "El diseño de UI/UX que nos entregaron superó todas nuestras expectativas. ¡Altamente recomendados!",
      image: "https://plus.unsplash.com/premium_vector-1719858611039-66c134efa74d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVyZmlsfGVufDB8fDB8fHww", // Reemplaza con la foto de Carlos
    },
    {
      name: "Ana López",
      company: "Data Insights",
      testimonial:
        "Gracias a Perseverus, nuestra base de datos ahora es más eficiente y escalable. ¡Excelente trabajo!",
      image: "https://plus.unsplash.com/premium_vector-1728553013151-9ecc71c746bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlcmZpbHxlbnwwfHwwfHx8MA%3D%3D", // Reemplaza con la foto de Ana
    },
  ];

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
          Lo Que Dicen Nuestros Clientes
        </motion.h2>

        {/* Descripción */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Nuestros clientes son nuestra mayor prioridad. Aquí hay algunas de las cosas que dicen sobre nuestro trabajo.
        </motion.p>

        {/* Tarjetas de Testimonios */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              {/* Foto */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              {/* Nombre y Empresa */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mb-4">{testimonial.company}</p>
              {/* Testimonio */}
              <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;