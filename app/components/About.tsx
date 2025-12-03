import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const About = () => {
  return (
    <section id="about" className={cn(SECTION_SPACING.PY, 'bg-gray-50')}>
      <div className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="max-w-6xl mx-auto">
          <div className={cn('text-center', SECTION_SPACING.MARGIN_BOTTOM.SECTION)}>
            <h2 className={cn(TYPOGRAPHY.HEADING.H2, 'text-straw-700', SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
              Sobre {clinicConfig.name}
            </h2>
            <div className="w-24 h-1 bg-straw-500 mx-auto" />
          </div>

          <div className={cn('grid md:grid-cols-2', SECTION_SPACING.GAP.MD, 'items-center')}>
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
              <h3 className={cn(TYPOGRAPHY.HEADING.H3, TYPOGRAPHY.COLOR.PRIMARY)}>Nossa Missão</h3>
              <p className={cn(TYPOGRAPHY.COLOR.SECONDARY, 'leading-relaxed', TYPOGRAPHY.BODY.LARGE)}>
                {clinicConfig.about.mission}
              </p>

              <div className="pt-6">
                <h3 className={cn(TYPOGRAPHY.HEADING.H3, TYPOGRAPHY.COLOR.PRIMARY, SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>Nossos Valores</h3>
                <ul className="space-y-3">
                  {clinicConfig.about.values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="w-6 h-6 text-straw-500 mr-3 mt-0.5 flex-shrink-0"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={cn(TYPOGRAPHY.COLOR.SECONDARY, TYPOGRAPHY.BODY.LARGE)}>{value}</span>
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

