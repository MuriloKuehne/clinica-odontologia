# Dental Care Clinic Landing Page

A modern, minimalist, and clean landing page template for dental clinics built with Next.js 14, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, minimalist design
- 📱 Fully responsive (mobile-first)
- ⚡ Optimized performance with Next.js App Router
- 🖼️ Unsplash image integration
- 🔧 Easy configuration system
- ♿ Accessible components
- 🎯 SEO optimized

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Specialties.tsx
│   │   ├── MedicalTeam.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   ├── Location.tsx
│   │   └── Footer.tsx
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx         # Main page
│   └── globals.css       # Global styles
├── lib/
│   ├── clinic-config.ts  # Clinic configuration
│   └── types/
│       └── clinic.ts     # TypeScript types
├── info/
│   └── clinic-plan.md    # Original plan document
└── CLINIC_TEMPLATE_GUIDE.md  # Configuration guide
```

## Customization

All clinic-specific content is centralized in `lib/clinic-config.ts`. To customize:

1. Open `lib/clinic-config.ts`
2. Update the configuration with your clinic's information
3. Replace Unsplash image URLs with your own images
4. (Optional) Customize colors in `tailwind.config.ts`

See [CLINIC_TEMPLATE_GUIDE.md](./CLINIC_TEMPLATE_GUIDE.md) for detailed instructions.

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React** - UI library
- **Next/Image** - Optimized image component

## License

This project is open source and available for use.

## Support

For customization help, refer to:
- [CLINIC_TEMPLATE_GUIDE.md](./CLINIC_TEMPLATE_GUIDE.md) - Detailed configuration guide
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

