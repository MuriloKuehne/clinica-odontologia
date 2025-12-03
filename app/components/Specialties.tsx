import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const Specialties = () => {
  return (
    <section id="services" className={cn(SECTION_SPACING.PY, 'bg-gray-50')}>
      <div className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="max-w-6xl mx-auto">
          <div className={cn('text-center', SECTION_SPACING.MARGIN_BOTTOM.SECTION)}>
            <h2 className={cn(TYPOGRAPHY.HEADING.H2, 'text-straw-700', SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
              Nossos Serviços
            </h2>
            <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.LARGE, 'max-w-2xl mx-auto')}>
              Cuidado odontológico completo adaptado às suas necessidades
            </p>
            <div className="w-24 h-1 bg-straw-500 mx-auto mt-4" />
          </div>

          <div className={cn('grid sm:grid-cols-2 lg:grid-cols-3', SECTION_SPACING.GAP.SM)}>
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
                  <h3 className={cn(TYPOGRAPHY.HEADING.H4, 'text-straw-700', 'mb-3')}>
                    {specialty.name}
                  </h3>
                  <p className={cn(TYPOGRAPHY.COLOR.SECONDARY, 'leading-relaxed', TYPOGRAPHY.BODY.BASE)}>
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

