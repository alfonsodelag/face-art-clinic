export const siteConfig = {
  businessName: "Clínica Dermatológica Demo",
  tagline: "Dermatología estética y clínica con atención personalizada",
  description:
    "Clínica especializada en dermatología clínica, estética facial, tratamientos láser, acné, manchas y cuidado integral de la piel.",
  url: "https://clinica-derma.vercel.app",
  phone: "+507 0000-0000",
  whatsapp: "50700000000",
  email: "contacto@clinicademo.com",
  address: "Ciudad de Panamá, Panamá",
  hours: {
    weekdays: "Lunes a viernes: 8:00 a.m. - 6:00 p.m.",
    saturday: "Sábados: 9:00 a.m. - 1:00 p.m.",
    sunday: "Domingos: cerrado"
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "Clínica Dermatológica Demo | Dermatología en Panamá",
    description:
      "Dermatología clínica y estética en Panamá. Tratamientos para acné, manchas, rejuvenecimiento facial, botox, láser y cuidado de la piel.",
    keywords: [
      "dermatólogo en Panamá",
      "clínica dermatológica en Panamá",
      "dermatología estética Panamá",
      "tratamiento para acné Panamá",
      "botox Panamá",
      "manchas en la piel Panamá"
    ]
  },
  colors: {
    primary: "#9F7AEA",
    secondary: "#F8F5F2",
    accent: "#D6A4A4",
    dark: "#1F2937",
    light: "#FFFFFF"
  }
} as const;

export const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}`;
