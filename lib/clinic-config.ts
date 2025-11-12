import { ClinicConfig } from './types/clinic';

export const clinicConfig: ClinicConfig = {
  name: 'Clínica Odontológica',
  tagline: 'Seu Sorriso, Nossa Prioridade',
  logoUrl: 'https://images.unsplash.com/photo-1606811971618-4486c44c0e5a?w=200&q=80',
  
  contact: {
    phone: '+55 (11) 1234-5678',
    email: 'contato@clinicaodontologica.com.br',
    address: 'Rua da Saúde, 123, Centro Médico, Cidade, Estado 12345-678',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',
  },
  
  heroSpecialties: [
    {
      id: '1',
      name: 'Odontologia Geral',
      description: 'Cuidado odontológico completo para toda a família',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    },
    {
      id: '2',
      name: 'Odontologia Estética',
      description: 'Transforme seu sorriso com nossos tratamentos estéticos',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80',
    },
    {
      id: '3',
      name: 'Ortodontia',
      description: 'Alinhe seus dentes com soluções ortodônticas modernas',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    },
    {
      id: '4',
      name: 'Cirurgia Oral',
      description: 'Procedimentos cirúrgicos especializados para saúde bucal ideal',
      imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80',
    },
  ],
  
  about: {
    mission: 'Estamos comprometidos em fornecer cuidados odontológicos excepcionais em um ambiente confortável e acolhedor. Nossa missão é ajudá-lo a alcançar e manter uma saúde bucal ideal, garantindo sua completa satisfação.',
    values: [
      'Atendimento Centrado no Paciente',
      'Excelência Clínica',
      'Serviço Compassivo',
      'Educação Continuada',
      'Compromisso com a Comunidade',
    ],
    imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=80',
  },
  
  teamMembers: [
    {
      id: '1',
      name: 'Dra. Sarah Johnson',
      title: 'Dentista Chefe',
      specialty: 'Odontologia Geral e Estética',
      description: 'Com mais de 15 anos de experiência, a Dra. Johnson é especialista em cuidados odontológicos completos e procedimentos estéticos.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '2',
      name: 'Dr. Michael Chen',
      title: 'Ortodontista',
      specialty: 'Ortodontia e Invisalign',
      description: 'Dr. Chen é um provedor certificado de Invisalign com expertise em tratamentos ortodônticos modernos.',
      imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    },
  ],
  
  specialties: [
    {
      id: '1',
      name: 'Prevenção',
      description: 'Limpezas regulares, exames e tratamentos com flúor para manter dentes e gengivas saudáveis.',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    },
    {
      id: '2',
      name: 'Clareamento Dental',
      description: 'Tratamentos profissionais de clareamento para iluminar seu sorriso de forma segura e eficaz.',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    },
    {
      id: '3',
      name: 'Implantes Dentários',
      description: 'Soluções permanentes de substituição dentária que parecem e se sentem naturais.',
      imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80',
    },
    {
      id: '4',
      name: 'Tratamento de Canal',
      description: 'Tratamentos de canal sem dor para salvar dentes infectados e restaurar a saúde bucal.',
      imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80',
    },
    {
      id: '5',
      name: 'Coroas e Próteses',
      description: 'Restaurações personalizadas para reparar e substituir dentes danificados ou ausentes.',
      imageUrl: 'https://images.unsplash.com/photo-1594824476968-48aa8a9e073d?w=600&q=80',
    },
    {
      id: '6',
      name: 'Odontopediatria',
      description: 'Cuidado especializado e gentil para crianças, garantindo sorrisos saudáveis desde cedo.',
      imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    },
  ],
  
  testimonials: [
    {
      id: '1',
      name: 'Paciente A',
      role: 'Paciente de Longo Prazo',
      content: 'A equipe da Clínica Odontológica tem sido incrível. Eles tornam cada visita confortável e sem estresse. Altamente recomendado!',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
    },
    {
      id: '2',
      name: 'Paciente B',
      role: 'Tratamento Estético',
      content: 'Estou encantado com a transformação do meu sorriso. O trabalho estético superou minhas expectativas e a equipe foi profissional durante todo o processo.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 5,
    },
    {
      id: '3',
      name: 'Paciente C',
      role: 'Paciente Ortodôntico',
      content: 'O tratamento com Invisalign foi perfeito e os resultados são excelentes. Dr. Chen e a equipe foram muito atenciosos em cada etapa.',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
    },
  ],
  
  socialLinks: {
    facebook: 'https://facebook.com/clinicaodontologica',
    instagram: 'https://instagram.com/clinicaodontologica',
    twitter: 'https://twitter.com/clinicaodontologica',
    linkedin: 'https://linkedin.com/company/clinicaodontologica',
  },
  
  seo: {
    title: 'Clínica Odontológica - Serviços Odontológicos Especializados | Seu Sorriso, Nossa Prioridade',
    description: 'Serviços profissionais de cuidados odontológicos incluindo odontologia geral, procedimentos estéticos, ortodontia e cirurgia oral. Agende sua consulta hoje.',
    keywords: [
      'clínica odontológica',
      'dentista',
      'cuidado odontológico',
      'odontologia estética',
      'ortodontia',
      'implantes dentários',
      'clareamento dental',
      'cirurgia oral',
      'prevenção',
    ],
  },
};

