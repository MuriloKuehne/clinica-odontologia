import { clinicConfig } from '@/lib/clinic-config';

const Location = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gray-900 mb-4">
              Visite Nossa Clínica
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Localizada convenientemente no coração do distrito médico
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="rounded-xl overflow-hidden shadow-xl h-96">
              <iframe
                src={clinicConfig.contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>

            {/* Address Info */}
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {clinicConfig.name}
                </h3>
                <p className="text-gray-700 text-xl leading-relaxed">
                  {clinicConfig.contact.address}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Como Chegar</h4>
                <div className="space-y-3 text-gray-600 text-lg">
                  <p>
                    <strong className="text-gray-900">De Carro:</strong> Estacionamento gratuito
                    disponível no local
                  </p>
                  <p>
                    <strong className="text-gray-900">Transporte Público:</strong> Acessível via
                    linhas de ônibus 10, 25 e 42
                  </p>
                  <p>
                    <strong className="text-gray-900">Acessibilidade:</strong> Entrada e
                    instalações acessíveis para cadeirantes
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    clinicConfig.contact.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
                >
                  <span>Obter Direções</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;

