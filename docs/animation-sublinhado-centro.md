# Animação de Sublinhado - Expansão do Centro

## Descrição
Animação minimalista onde uma linha de sublinhado começa no centro do texto e se expande suavemente para os dois lados ao passar o mouse (hover).

## Classe CSS Tailwind

```css
relative pb-0.5 text-gray-700 hover:text-primary-600 transition-colors duration-200 
after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full 
after:h-[2px] after:bg-primary-600 after:scale-x-0 after:origin-center 
hover:after:scale-x-100 after:transition-transform after:duration-500 
after:ease-in-out after:will-change-transform
```

## Como Aplicar

### Opção 1: Usando o Componente AnimatedLink

```tsx
import AnimatedLink from '@/app/components/AnimatedLink';

<AnimatedLink href="#home">Início</AnimatedLink>
```

### Opção 2: Aplicando as classes diretamente

```tsx
<a
  href="#home"
  className="relative pb-0.5 text-gray-700 hover:text-primary-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-primary-600 after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:duration-500 after:ease-in-out after:will-change-transform"
>
  Início
</a>
```

## Explicação das Classes

- `relative pb-0.5`: Cria contexto de posicionamento e reserva espaço para a linha
- `after:absolute after:bottom-0`: Posiciona a linha na parte inferior
- `after:left-1/2 after:-translate-x-1/2`: Centraliza a linha horizontalmente
- `after:w-full`: A linha ocupa toda a largura do elemento
- `after:h-[2px]`: Altura da linha (2px)
- `after:bg-primary-600`: Cor da linha
- `after:scale-x-0`: Estado inicial (invisível, escala 0)
- `after:origin-center`: A escala começa do centro
- `hover:after:scale-x-100`: No hover, expande para largura total
- `after:transition-transform after:duration-500 after:ease-in-out`: Transição suave de 500ms
- `after:will-change-transform`: Otimização de performance

## Customização

Para mudar a cor, substitua `after:bg-primary-600` por outra cor:
- `after:bg-blue-500`
- `after:bg-red-500`
- `after:bg-[#custom-color]`

Para mudar a duração, ajuste `after:duration-500`:
- `after:duration-300` (mais rápido)
- `after:duration-700` (mais lento)

## Exemplo de Uso no Header

```tsx
<AnimatedLink href="#home">Início</AnimatedLink>
<AnimatedLink href="#about">Sobre</AnimatedLink>
<AnimatedLink href="#services">Serviços</AnimatedLink>
```

