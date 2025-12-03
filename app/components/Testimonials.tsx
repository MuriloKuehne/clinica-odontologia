import Image from 'next/image';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => {
      const starValue = index + 1;
      const isFullStar = starValue <= Math.floor(rating);
      const isHalfStar = !isFullStar && starValue - 0.5 <= rating;
      const isEmptyStar = !isFullStar && !isHalfStar;

      return (
        <div key={index} className="relative w-4 h-4 inline-block">
          {/* Background star (always gray) */}
          <svg
            className="w-4 h-4 absolute text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {/* Foreground star (yellow if full or half) */}
          {(isFullStar || isHalfStar) && (
            <div className={cn('absolute overflow-hidden', isHalfStar ? 'w-1/2' : 'w-full')}>
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          )}
        </div>
      );
    });
  };

  return (
    <section id="testimonials" className={cn(SECTION_SPACING.PY, 'bg-white')}>
      <div className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="max-w-6xl mx-auto">
          <div className={cn('text-center', SECTION_SPACING.MARGIN_BOTTOM.SECTION)}>
            <h2 className={cn(TYPOGRAPHY.HEADING.H2, 'text-straw-700', SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
              O Que Nossos Pacientes Dizem
            </h2>
            <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.LARGE, 'max-w-2xl mx-auto')}>
              Confiado por pacientes para cuidados odontológicos excepcionais
            </p>
            <div className="w-24 h-1 bg-straw-500 mx-auto mt-4" />
          </div>

          <div className={cn('grid sm:grid-cols-2 lg:grid-cols-3', SECTION_SPACING.GAP.SM)}>
            {clinicConfig.testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="flex-1">
                    <p className={cn('font-semibold', TYPOGRAPHY.COLOR.PRIMARY)}>{testimonial.name}</p>
                    <p className={cn(TYPOGRAPHY.BODY.SMALL, TYPOGRAPHY.COLOR.TERTIARY)}>{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                <p className={cn(TYPOGRAPHY.COLOR.SECONDARY, 'leading-relaxed italic', TYPOGRAPHY.BODY.BASE)}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

