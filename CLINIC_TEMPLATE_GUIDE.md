# Clinic Landing Page Template Guide

This guide will help you create a new clinic landing page by customizing the configuration file. All clinic-specific content is centralized in `lib/clinic-config.ts`, making it easy to create new landing pages without modifying component code.

## Quick Start

1. **Copy the configuration file**: Create a new file `lib/clinic-config-[name].ts` for your clinic
2. **Update the configuration**: Modify all placeholder content with your clinic's information
3. **Update imports**: Change the import in components to use your new config file
4. **Customize colors** (optional): Modify `tailwind.config.ts` to match your brand colors

## Configuration Guide

### Basic Information

```typescript
name: 'Your Clinic Name',
tagline: 'Your tagline here',
logoUrl: 'https://images.unsplash.com/photo-...', // Optional
```

- **name**: Your clinic's full name
- **tagline**: A short, memorable tagline (appears in hero section)
- **logoUrl**: Optional Unsplash image URL for your logo

### Contact Information

```typescript
contact: {
  phone: '+1 (555) 123-4567',
  email: 'info@yourclinic.com',
  address: '123 Street, City, State ZIP',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=...',
}
```

**Getting Google Maps Embed URL:**
1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your clinic's address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

### Hero Section Specialties

The hero section displays a rotating slider of specialties. Each specialty needs:

```typescript
{
  id: 'unique-id',
  name: 'Specialty Name',
  description: 'Brief description',
  imageUrl: 'https://images.unsplash.com/photo-...',
}
```

**Finding Unsplash Images:**
- Visit [Unsplash](https://unsplash.com)
- Search for relevant terms (e.g., "dental clinic", "medical equipment")
- Click on an image → Click "Download" → Copy the URL
- Or use Unsplash Source API format: `https://images.unsplash.com/photo-[id]?w=[width]&q=80`

### About Section

```typescript
about: {
  mission: 'Your mission statement...',
  values: [
    'Value 1',
    'Value 2',
    // ... more values
  ],
  imageUrl: 'https://images.unsplash.com/photo-...',
}
```

### Team Members

```typescript
teamMembers: [
  {
    id: '1',
    name: 'Dr. Name',
    title: 'Position Title',
    specialty: 'Specialty Area',
    description: 'Brief bio...',
    imageUrl: 'https://images.unsplash.com/photo-...',
  },
  // ... more team members
]
```

**Image Tips:**
- Search Unsplash for "professional doctor" or "medical professional"
- Use consistent image sizes (400x400px recommended)
- Ensure images are professional and appropriate

### Services/Specialties

```typescript
specialties: [
  {
    id: '1',
    name: 'Service Name',
    description: 'Service description...',
    imageUrl: 'https://images.unsplash.com/photo-...',
  },
  // ... more services
]
```

### Testimonials

```typescript
testimonials: [
  {
    id: '1',
    name: 'Patient Name',
    role: 'Patient Type',
    content: 'Testimonial text...',
    imageUrl: 'https://images.unsplash.com/photo-...',
    rating: 5, // 1-5 stars
  },
  // ... more testimonials
]
```

### Social Media Links

```typescript
socialLinks: {
  facebook: 'https://facebook.com/yourpage',
  instagram: 'https://instagram.com/yourpage',
  twitter: 'https://twitter.com/yourpage',
  linkedin: 'https://linkedin.com/company/yourpage',
  youtube: 'https://youtube.com/@yourpage', // Optional
}
```

Include only the social media platforms you use.

### SEO Metadata

```typescript
seo: {
  title: 'Your Clinic Name - Services | Tagline',
  description: 'A compelling description of your clinic and services...',
  keywords: [
    'keyword1',
    'keyword2',
    // ... more keywords
  ],
}
```

- **title**: Appears in browser tab and search results (keep under 60 characters)
- **description**: Appears in search results (keep under 160 characters)
- **keywords**: Relevant search terms for your clinic

## Customizing Colors

To change the color scheme, edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#...',
        100: '#...',
        // ... customize primary color palette
        900: '#...',
      },
    },
  },
}
```

The primary color is used for:
- Buttons and CTAs
- Links and hover states
- Accent elements
- Brand highlights

## Image Guidelines

### Recommended Image Sizes

- **Hero backgrounds**: 1920x1080px (full width)
- **About section**: 1200x800px
- **Team photos**: 400x400px (square)
- **Service cards**: 600x400px
- **Testimonial avatars**: 200x200px (square)
- **Logo**: 200x200px (square)

### Unsplash Search Terms

- **Dental/Medical**: "dental clinic", "dentist", "medical equipment", "dental office"
- **Team photos**: "professional doctor", "dentist portrait", "medical professional"
- **Facilities**: "modern clinic", "hospital interior", "dental office interior"
- **Testimonials**: "professional headshot", "business person", "portrait"

## Adding/Removing Sections

To add or remove sections:

1. **Add a section**: Create a new component in `app/components/` and import it in `app/page.tsx`
2. **Remove a section**: Comment out or remove the component import and usage in `app/page.tsx`

## Best Practices

1. **Keep descriptions concise**: Hero descriptions should be 1-2 sentences
2. **Use high-quality images**: Ensure all images are clear and professional
3. **Test responsiveness**: Check the site on mobile, tablet, and desktop
4. **Optimize SEO**: Use relevant keywords naturally in descriptions
5. **Update regularly**: Keep team members, services, and testimonials current

## Troubleshooting

### Images not loading
- Verify Unsplash URLs are correct and accessible
- Check that `next.config.js` includes `images.unsplash.com` in `remotePatterns`

### Styling issues
- Clear `.next` cache: `rm -rf .next` (or delete `.next` folder)
- Restart the dev server: `npm run dev`

### TypeScript errors
- Ensure all required fields in config match the `ClinicConfig` type
- Check that IDs are unique within each array

## Support

For questions or issues, refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Unsplash API Documentation](https://unsplash.com/developers)

