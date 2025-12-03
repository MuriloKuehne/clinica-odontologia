import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className={cn('text-center', SECTION_SPACING.PY)}>
        <div className="inline-block relative w-16 h-16 mb-6">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-straw-200 rounded-full"></div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-straw-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <h2 className={cn(TYPOGRAPHY.HEADING.H2, TYPOGRAPHY.COLOR.PRIMARY, 'mb-2')}>
          Carregando...
        </h2>
        <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.BASE)}>
          Por favor, aguarde um momento.
        </p>
      </div>
    </div>
  );
}

