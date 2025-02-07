import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Perseverus
        </div>
        {/* Menú de navegación */}
        <div className="flex space-x-6 font-bold">
          <a href="#inicio" className="text-gray-800 hover:text-blue-500">Inicio</a>
          <a href="#servicios" className="text-gray-800 hover:text-blue-500">Servicios</a>
          <a href="#portafolio" className="text-gray-800 hover:text-blue-500">Portafolio</a>
          <a href="#contacto" className="text-gray-800 hover:text-blue-500">Contacto</a>
        </div>
        {/* Botón de contacto */}
        <a
          href="#contacto"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Contáctanos
        </a>
      </div>
    </nav>
  );
};

export default Navbar;