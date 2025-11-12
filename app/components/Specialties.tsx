import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';

const Specialties = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Cuidado odontológico completo adaptado às suas necessidades
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clinicConfig.specialties.map((specialty) => (
              <div
                key={specialty.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={specialty.imageUrl}
                    alt={specialty.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {specialty.name}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {specialty.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialties;

