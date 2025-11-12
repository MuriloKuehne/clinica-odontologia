import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gray-900 mb-4">
              Sobre {clinicConfig.name}
            </h2>
            <div className="w-24 h-1 bg-primary-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={clinicConfig.about.imageUrl}
                alt={`Instalações da ${clinicConfig.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Nossa Missão</h3>
              <p className="text-gray-700 leading-relaxed text-xl">
                {clinicConfig.about.mission}
              </p>

              <div className="pt-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Nossos Valores</h3>
                <ul className="space-y-3">
                  {clinicConfig.about.values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-xl">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

