'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { SECTION_SPACING, TYPOGRAPHY } from '@/lib/constants';
import { cn } from '@/lib/utils/cn';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className={cn('max-w-2xl mx-auto text-center', SECTION_SPACING.PY)}>
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 mb-6">
            <svg
              className="w-10 h-10 text-red-600"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className={cn(TYPOGRAPHY.HEADING.H1, TYPOGRAPHY.COLOR.PRIMARY, 'mb-4')}>
            Ops! Algo deu errado
          </h1>
          <p className={cn(TYPOGRAPHY.COLOR.TERTIARY, TYPOGRAPHY.BODY.LARGE, 'mb-8')}>
            Desculpe pelo inconveniente. Ocorreu um erro inesperado. Por favor, tente novamente ou retorne à página inicial.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className={cn(
              'px-6 py-3 bg-straw-500 text-white rounded-lg font-semibold',
              'hover:bg-straw-600 transition-colors shadow-lg',
              'focus:outline-none focus:ring-2 focus:ring-straw-500 focus:ring-offset-2'
            )}
          >
            Tentar Novamente
          </button>
          <Link
            href="/"
            className={cn(
              'px-6 py-3 bg-white text-straw-600 border-2 border-straw-500 rounded-lg font-semibold',
              'hover:bg-straw-50 transition-colors',
              'focus:outline-none focus:ring-2 focus:ring-straw-500 focus:ring-offset-2',
              'text-center'
            )}
          >
            Voltar à Página Inicial
          </Link>
        </div>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-lg text-left">
            <p className="text-sm font-semibold text-red-800 mb-2">Detalhes do Erro (Desenvolvimento):</p>
            <p className="text-sm text-red-700 font-mono">{error.message}</p>
            {error.digest && (
              <p className="text-xs text-red-600 mt-2">Digest: {error.digest}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

