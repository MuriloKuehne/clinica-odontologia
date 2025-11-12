# Reusable Clinic Landing Page Template Plan

## Overview

Transform the current clinic landing page into a reusable template system with placeholder content. All clinic-specific data (names, images, contact info, specialties) will be centralized in configuration files, making it easy to create new landing pages by simply updating the config.

## Implementation Strategy

### 1. Create Configuration System

- **File**: `lib/clinic-config.ts` - Central configuration file containing:
- Clinic name, logo path, tagline
- Contact information (phone, email, address, Google Maps embed URL)
- Hero slider specialties with Unsplash image URLs
- About section content (mission, values)
- Medical team members (names, titles, specialties, descriptions)
- Services/specialties list
- Testimonials (with Unsplash profile images)
- Social media links
- SEO metadata (title, description, keywords)

### 2. Replace Hardcoded Content

Update all components to use the configuration:

- **[app/components/Header.tsx](app/components/Header.tsx)**: Use config for logo path and clinic name
- **[app/components/Hero.tsx](app/components/Hero.tsx)**: Use config for specialties slider (already uses Unsplash, but hardcoded)
- **[app/components/About.tsx](app/components/About.tsx)**: Use config for clinic name, mission text, values, and Unsplash image URL
- **[app/components/MedicalTeam.tsx](app/components/MedicalTeam.tsx)**: Use config for team members (replace specific names with "Dr. [Name]", "Medical Director", etc.)
- **[app/components/Specialties.tsx](app/components/Specialties.tsx)**: Use config for services list
- **[app/components/Testimonials.tsx](app/components/Testimonials.tsx)**: Use config for testimonials (replace names with "Patient", "Client", etc.)
- **[app/components/Contact.tsx](app/components/Contact.tsx)**: Use config for contact information
- **[app/components/Location.tsx](app/components/Location.tsx)**: Use config for address, map embed, and Unsplash background image
- **[app/components/Footer.tsx](app/components/Footer.tsx)**: Use config for clinic name, contact info, specialties list, social links
- **[app/layout.tsx](app/layout.tsx)**: Use config for SEO metadata

### 3. Default Placeholder Content

The config will include generic placeholder content:

- Clinic name: "Medical Clinic" or "Healthcare Clinic"
- Team members: "Dr. [Name]", generic titles like "Medical Director", "Specialist"
- Testimonials: Generic patient names like "Patient A", "Client B"
- All images: Unsplash URLs with medical/clinic-related search terms
- Contact: Placeholder phone, email, address format

### 4. Image Strategy

- Replace all local images (`/clinica-*.jpg`, `/logo.jpg`) with Unsplash URLs
- Use Unsplash Source API format: `https://images.unsplash.com/photo-[id]?w=[width]&q=80`
- Categories:
- Hero backgrounds: medical equipment, hospital interiors
- About section: modern clinic/hospital exterior
- Location background: medical facility exterior
- Team photos: professional medical portraits (or placeholder avatars)
- Testimonial avatars: diverse professional headshots

### 5. TypeScript Types

- **File**: `lib/types/clinic.ts` - Define TypeScript interfaces for:
- `ClinicConfig` - Main config type
- `Specialty`, `TeamMember`, `Testimonial`, `ContactInfo`, etc.

### 6. Documentation

- **File**: `CLINIC_TEMPLATE_GUIDE.md` - Step-by-step guide for creating new clinic landing pages:
- How to update the config file
- Where to find Unsplash images
- How to customize colors (if needed)
- How to add/remove sections

## Files to Create/Modify

### New Files

- `lib/clinic-config.ts` - Main configuration
- `lib/types/clinic.ts` - TypeScript types
- `CLINIC_TEMPLATE_GUIDE.md` - Usage documentation

### Files to Modify

- All component files in `app/components/` to consume config
- `app/layout.tsx` to use config for metadata
- `app/page.tsx` (no changes needed, already imports components)

## Benefits

- Single source of truth for all clinic data
- Easy to create new landing pages by copying and updating config
- Consistent structure across all clinic sites
- No need to modify component code for new clinics
- All images from Unsplash (no local image management needed)