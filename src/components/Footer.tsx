
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">Ubicación</h3>
          <p>Calle Falsa 123, Buenos Aires, Argentina</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Redes Sociales</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Contáctanos</h3>
          <p>Email: contacto@agenciadeviajes.com</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <p>&copy; 2024 Agencia de Viajes. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
