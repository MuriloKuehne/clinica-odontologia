import React from 'react';

interface AnimatedLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

/**
 * Componente de link com animação de sublinhado que começa no centro e se expande para os lados
 * 
 * A animação é minimalista e suave, usando scale-x para criar o efeito de expansão
 * a partir do centro do texto.
 */
const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  href,
  children,
  className = '',
  onClick,
}) => {
  const baseClasses =
    'relative pb-0.5 text-gray-700 hover:text-primary-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-primary-600 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform';

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </a>
  );
};

export default AnimatedLink;

