'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { clinicConfig } from '@/lib/clinic-config';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

const MedicalTeam = () => {
  const swiperRef = useRef<any>(null);

  const equalizeHeights = () => {
    if (!swiperRef.current?.swiper) return;
    
    const swiper = swiperRef.current.swiper;
    const visibleSlides = swiper.slides.filter((slide: HTMLElement) => {
      const rect = slide.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    if (visibleSlides.length === 0) return;

    let maxHeight = 0;
    visibleSlides.forEach((slide: HTMLElement) => {
      const card = slide.querySelector('.team-card') as HTMLElement;
      if (card) {
        card.style.height = 'auto';
        const height = card.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      }
    });

    visibleSlides.forEach((slide: HTMLElement) => {
      const card = slide.querySelector('.team-card') as HTMLElement;
      if (card) {
        card.style.height = `${maxHeight}px`;
      }
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setTimeout(equalizeHeights, 100);
    };

    const handleSlideChange = () => {
      setTimeout(equalizeHeights, 100);
    };

    window.addEventListener('resize', handleResize);
    
    if (swiperRef.current?.swiper) {
      const swiper = swiperRef.current.swiper;
      swiper.on('slideChange', handleSlideChange);
      swiper.on('resize', handleResize);
      swiper.on('slideChangeTransitionEnd', handleSlideChange);
    }

    setTimeout(equalizeHeights, 300);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (swiperRef.current?.swiper) {
        const swiper = swiperRef.current.swiper;
        swiper.off('slideChange', handleSlideChange);
        swiper.off('resize', handleResize);
        swiper.off('slideChangeTransitionEnd', handleSlideChange);
      }
    };
  }, []);

  return (
    <section id="team" className={cn(SECTION_SPACING.PY, 'bg-white')}>
      <div className={cn('container mx-auto', SECTION_SPACING.CONTAINER_PX_RESPONSIVE)}>
        <div className="max-w-6xl mx-auto">
          <div className={cn('text-center', SECTION_SPACING.MARGIN_BOTTOM.SECTION)}>
            <h2 className={cn(TYPOGRAPHY.HEADING.H2, 'text-straw-700', SECTION_SPACING.MARGIN_BOTTOM.HEADING)}>
              Nossa Equipe Especializada
            </h2>
            <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.LARGE, 'max-w-2xl mx-auto')}>
              Conheça nossos profissionais odontológicos experientes dedicados à sua saúde bucal
            </p>
            <div className="w-24 h-1 bg-straw-500 mx-auto mt-4" />
          </div>

          <div className="relative team-swiper-container">
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  centeredSlides: true,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: true,
                },
              }}
              navigation={{
                nextEl: '.swiper-button-next-team',
                prevEl: '.swiper-button-prev-team',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination-team',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSlideChangeTransitionEnd={equalizeHeights}
              className="!pb-12 team-swiper"
            >
              {clinicConfig.teamMembers.map((member) => (
                <SwiperSlide key={member.id} className="h-auto">
                  <div className="team-card bg-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-straw-500 hover:border-straw-600 hover:scale-[1.02] h-full relative flex flex-col">
                    <div className="mb-4 pb-3 border-b border-straw-200">
                      <h3 className={cn(TYPOGRAPHY.HEADING.H4, 'text-straw-700 mb-1.5')}>{member.name}</h3>
                      <p className={cn(TYPOGRAPHY.BODY.SMALL, 'text-straw-600 font-medium')}>{member.title}</p>
                    </div>
                    <p className={cn('text-straw-700', 'leading-relaxed', TYPOGRAPHY.BODY.BASE, 'mb-3 font-semibold')}>
                      {member.specialty}
                    </p>
                    <p className={cn(TYPOGRAPHY.COLOR.SECONDARY, 'leading-relaxed', TYPOGRAPHY.BODY.SMALL, 'flex-grow')}>
                      {member.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className="swiper-button-prev-team"
              aria-label="Slide anterior"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              className="swiper-button-next-team"
              aria-label="Próximo slide"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="swiper-pagination-team" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;

