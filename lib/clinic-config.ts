import { ClinicConfig } from './types/clinic';

export const clinicConfig: ClinicConfig = {
  name: 'Clínica Dr.Hernani Jr',
  tagline: 'Seu Sorriso Sua Saúde Nossa Satisfação!',
  
  contact: {
    phone: '+55 35 3295-3382',
    whatsapp: '+55 35 3295-3382',
    email: 'contato@clinicaodontologica.com.br',
    address: 'R. Maj. Onófre, 288 - Machado, MG, 37750-000',
    // IMPORTANTE: Para obter a URL correta do embed:
    // 1) Acesse https://www.google.com/maps
    // 2) Pesquise "R. Maj. Onófre, 288 - Machado, MG"
    // 3) Clique no ícone de "Compartilhar" → "Incorporar um mapa"
    // 4) Copie a URL do iframe (formato: https://www.google.com/maps/embed?pb=!1m18!1m12...)
    // URL temporária usando busca (substitua pela URL de embed correta do Google Maps):
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d-45.9194!3d-21.6756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDQwJzMyLjIiUyA0NcKwNTUnMDkuOCJX!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    businessHours: {
      weekdays: '9:00 - 18:00',
      saturday: '9:00 - 14:00',
      sunday: 'Fechado',
    },
    transportation: {
      car: 'Estacionamento disponível no local. Localizada na R. Maj. Onófre, no centro de Machado.',
      publicTransport: 'Acessível através do transporte público local de Machado',
      accessibility: 'Entrada e instalações acessíveis para cadeirantes',
    },
  },
  
  heroSpecialties: [
    {
      id: '1',
      name: 'Odontologia Especializada',
      description: 'Cuidado odontológico completo e especializado para toda a família',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80',
    },
    {
      id: '2',
      name: 'Nutrição',
      description: 'Acompanhamento nutricional personalizado para sua saúde e bem-estar',
      imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=1920&q=80',
    },
    {
      id: '3',
      name: 'Estética Facial',
      description: 'Tratamentos estéticos faciais para realçar sua beleza natural',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1920&q=80',
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
      name: 'Dr. Hernani Jr',
      title: 'Responsável Técnico',
      specialty: 'Clínica Dr. Hernani Jr',
      description: 'Responsável Técnico pela Clínica Dr. Hernani Jr. A clínica completa 30 anos de trabalhos ininterruptos em Machado, oferecendo excelência em cuidados odontológicos com uma equipe altamente qualificada.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '2',
      name: 'Dr. Neife Miguel',
      title: 'Cirurgião Dentista',
      specialty: 'Endodontia e Ortopedia dos Maxilares',
      description: 'Trabalha com o Dr. Hernani há 10 anos. Especialista em Endodontia (tratamento de canal) há 30 anos e especialista em Ortopedia dos Maxilares há 22 anos, oferecendo tratamentos especializados com vasta experiência.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '3',
      name: 'Dra. Zuleica',
      title: 'Cirurgiã Dentista',
      specialty: 'Odontopediatria e Ortodontia',
      description: 'Cirurgiã Dentista que trabalha com o Dr. Hernani há 20 anos. Começou com Odontopediatria e especializou-se em Ortodontia, oferecendo cuidados completos desde a infância até a correção ortodôntica.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '4',
      name: 'Dra. Gabriela Souza',
      title: 'Cirurgiã Dentista',
      specialty: 'Clínico Geral e Estética',
      description: 'Cirurgiã Dentista que atua como Clínico Geral e Estética com ênfase em Clareamento Dental. Dedica-se a proporcionar tratamentos estéticos modernos e eficazes para um sorriso mais bonito e saudável.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '5',
      name: 'Dra. Marcela',
      title: 'Cirurgiã Dentista',
      specialty: 'Clínico Geral e Estética Dental',
      description: 'Dentista que atua como Clínico Geral e Estética Dental. Atende pacientes de todas as idades, incluindo crianças, oferecendo cuidados preventivos e tratamentos estéticos personalizados.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '6',
      name: 'Dr. André Carole',
      title: 'Cirurgião Dentista',
      specialty: 'Cirurgia Bucomaxilofacial, Estomatologia e Implantodontia',
      description: 'Especialista em cirurgia bucomaxilofacial, estomatologia e implantodontia. Participa de tratamentos de casos cirúrgicos mais complexos. Atua também no Hospital das Clínicas da Faculdade de Medicina da USP e no Hospital A.C. Camargo.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
    {
      id: '7',
      name: 'Fábia Ribeiro',
      title: 'Nutricionista',
      specialty: 'Nutrição de Precisão',
      description: 'Nutricionista que trabalha na clínica há quase 15 anos. Formada há 20 anos e possui mestrado em longevidade. Especializada em Nutrição de Precisão, oferece planos alimentares personalizados para cada paciente.',
      imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    },
  ],
  
  specialties: [
    {
      id: '1',
      name: 'Odontologia Especializada',
      description: 'Cuidado odontológico completo e especializado com profissionais experientes para toda a família.',
      imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&q=80',
    },
    {
      id: '2',
      name: 'Nutrição',
      description: 'Acompanhamento nutricional personalizado para promover sua saúde e bem-estar através de uma alimentação equilibrada.',
      imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80',
    },
    {
      id: '3',
      name: 'Estética Facial',
      description: 'Tratamentos estéticos faciais modernos para realçar sua beleza natural e promover o cuidado com a pele.',
      imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80',
    },
  ],
  
  testimonials: [
    {
      id: '1',
      name: 'Maria Silva',
      role: 'Paciente de Ortodontia',
      content: 'Fazia anos que eu queria corrigir meus dentes, mas tinha muito medo. A Dra. Zuleica foi extremamente paciente e me explicou todo o processo. Hoje, após 2 anos de tratamento, tenho um sorriso que sempre sonhei. A equipe toda é muito atenciosa e profissional.',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      rating: 5,
    },
    {
      id: '2',
      name: 'João Pedro Santos',
      role: 'Tratamento de Canal',
      content: 'Precisei fazer um tratamento de canal e estava muito nervoso. O Dr. Neife Miguel me tranquilizou e o procedimento foi muito mais tranquilo do que eu imaginava. A clínica tem equipamentos modernos e o atendimento é excelente. Recomendo muito!',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      rating: 4.5,
    },
    {
      id: '3',
      name: 'Ana Paula Costa',
      role: 'Clareamento Dental',
      content: 'Fiz clareamento dental com a Dra. Gabriela e o resultado superou todas as minhas expectativas! Ela explicou todo o processo, os cuidados necessários e o resultado ficou natural e lindo. Agora tenho muito mais confiança no meu sorriso.',
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      rating: 5,
    },
    {
      id: '4',
      name: 'Roberto Almeida',
      role: 'Acompanhamento Nutricional',
      content: 'Comecei o acompanhamento nutricional com a Fábia há 8 meses e já perdi 12kg de forma saudável. Ela entende muito bem as necessidades de cada pessoa e cria um plano personalizado. Além disso, a integração com os outros profissionais da clínica é perfeita.',
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
      rating: 4.5,
    },
    {
      id: '5',
      name: 'Fernanda Oliveira',
      role: 'Estética Facial',
      content: 'Sou paciente da clínica há mais de 5 anos e sempre fui muito bem atendida. Recentemente comecei a fazer tratamentos estéticos faciais e estou amando os resultados. A equipe é muito cuidadosa e sempre me orienta sobre os melhores procedimentos.',
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
      rating: 5,
    },
    {
      id: '6',
      name: 'Carlos Eduardo Lima',
      role: 'Paciente de Longo Prazo',
      content: 'Sou paciente do Dr. Hernani há mais de 15 anos. A clínica completa 30 anos e eu posso dizer que a qualidade do atendimento sempre foi excepcional. É uma clínica de confiança, com profissionais experientes e que realmente se importam com o bem-estar dos pacientes.',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80',
      rating: 4.5,
    },
  ],
  
  socialLinks: {
    facebook: 'https://facebook.com/clinicaodontologica',
    instagram: 'https://instagram.com/clinicaodontologica',
    twitter: 'https://twitter.com/clinicaodontologica',
    linkedin: 'https://linkedin.com/company/clinicaodontologica',
  },
  
  seo: {
    title: 'Clínica Dr.Hernani Jr - Odontologia Especializada, Nutrição e Estética Facial',
    description: 'Clínica especializada em Odontologia, Nutrição e Estética Facial. Seu Sorriso Sua Saúde Nossa Satisfação! Agende sua consulta hoje.',
    keywords: [
      'clínica dr hernani jr',
      'odontologia especializada',
      'nutrição',
      'estética facial',
      'dentista',
      'nutricionista',
      'esteticista',
      'clínica médica',
      'saúde e bem-estar',
    ],
  },
};

