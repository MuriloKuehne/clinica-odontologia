import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';

const MedicalTeam = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light italic text-gray-900 mb-4">
              Nossa Equipe Especializada
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Conheça nossos profissionais odontológicos experientes dedicados à sua saúde bucal
            </p>
            <div className="w-24 h-1 bg-primary-600 mx-auto mt-4" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {clinicConfig.teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-80">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-2">{member.title}</p>
                  <p className="text-gray-600 text-base mb-3">{member.specialty}</p>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {member.description}
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

export default MedicalTeam;

