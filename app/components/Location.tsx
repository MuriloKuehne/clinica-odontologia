import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const Location = () => {
  return (
    <section id="location" className={cn(SECTION_SPACING.PY, 'bg-white')}>
      <div className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="max-w-6xl mx-auto">
          <div className={cn('text-center', SECTION_SPACING.MARGIN_BOTTOM.SECTION)}>
            <h2 className={cn(TYPOGRAPHY.HEADING.H2, 'text-straw-700', SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
              Visite Nossa Clínica
            </h2>
            <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.LARGE, 'max-w-2xl mx-auto')}>
              Localizada convenientemente no centro de Machado, MG
            </p>
            <div className="w-24 h-1 bg-straw-500 mx-auto mt-4" />
          </div>

          {/* Clinic Front Image */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/frente-clinica.jpg"
                alt="Frente da Clínica Dr. Hernani Jr"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          </div>

          <div className={cn('grid md:grid-cols-2', SECTION_SPACING.GAP.SM)}>
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
                <h3 className={cn(TYPOGRAPHY.HEADING.H3, TYPOGRAPHY.COLOR.PRIMARY, SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
                  {clinicConfig.name}
                </h3>
                <p className={cn(TYPOGRAPHY.COLOR.SECONDARY, TYPOGRAPHY.BODY.LARGE, 'leading-relaxed')}>
                  {clinicConfig.contact.address}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-200">
                <h4 className={cn('font-semibold', TYPOGRAPHY.COLOR.PRIMARY, SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>Como Chegar</h4>
                <div className={cn('space-y-3', TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.BASE)}>
                  <p>
                    <strong className={TYPOGRAPHY.COLOR.PRIMARY}>De Carro:</strong> {clinicConfig.contact.transportation.car}
                  </p>
                  <p>
                    <strong className={TYPOGRAPHY.COLOR.PRIMARY}>Transporte Público:</strong> {clinicConfig.contact.transportation.publicTransport}
                  </p>
                  <p>
                    <strong className={TYPOGRAPHY.COLOR.PRIMARY}>Acessibilidade:</strong> {clinicConfig.contact.transportation.accessibility}
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
                  className="inline-flex items-center text-straw-600 hover:text-straw-700 font-semibold transition-colors"
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
