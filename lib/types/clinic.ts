export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  googleMapsEmbedUrl: string;
}

export interface Specialty {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialty: string;
  description: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  imageUrl: string;
  rating: number;
}

export interface SocialLinks {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
}

export interface ClinicConfig {
  // Basic Info
  name: string;
  tagline: string;
  logoUrl?: string;
  
  // Contact
  contact: ContactInfo;
  
  // Hero Section
  heroSpecialties: Specialty[];
  
  // About Section
  about: {
    mission: string;
    values: string[];
    imageUrl: string;
  };
  
  // Team
  teamMembers: TeamMember[];
  
  // Services
  specialties: Specialty[];
  
  // Testimonials
  testimonials: Testimonial[];
  
  // Social Media
  socialLinks: SocialLinks;
  
  // SEO
  seo: SEOMetadata;
}

