import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
      <div className="container mx-auto px-6">
        {/* Contenido del Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-blue-200 transition duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-blue-200 transition duration-300">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portafolio" className="hover:text-blue-200 transition duration-300">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-200 transition duration-300">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="#Inicio"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-200 transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Información de Contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li>
                <strong>Correo:</strong> atencionalcliente@perseverus.com
              </li>
              <li>
                <strong>Teléfono:</strong> +503 2321 3232
              </li>
            </ul>
          </div>
        </div>

        {/* Derechos de Autor */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white">
          <p>
            © {new Date().getFullYear()} Perseverus. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;