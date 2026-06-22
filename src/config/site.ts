export const siteConfig = {
  businessName: "Face Art Clinic",
  fullName: "Face Art Clinic Panama",
  tagline: "Medicina estetica facial enfocada en armonia, naturalidad y confianza",
  description:
    "Clinica estetica facial en Panama enfocada en tratamientos personalizados para realzar la belleza natural, la armonia del rostro y el cuidado de la piel.",
  url: "https://demo-facial-art-clinic-alfonsodelag.vercel.app",
  phone: "",
  whatsapp: "",
  email: "",
  address: "Calle Aquilino de la Guardia, Ph. Ocean Business, piso 12 oficina 1209, Panama",
  city: "Panama",
  country: "Panama",
  hours: {
    weekdays: "Lunes a Viernes: 9:00 a.m. - 7:00 p.m.",
    saturday: "Sabados: 9:00 a.m. - 4:30 p.m.",
    sunday: "Domingos: 10:00 a.m. - 3:00 p.m.",
    appointmentNote: "Atencion: sujeta a previa cita"
  },
  social: {
    instagram: "https://www.instagram.com/faceartclinic.panama/",
    facebook: "",
    tiktok: "",
    linkedin: ""
  },
  seo: {
    title: "Face Art Clinic Panama | Estetica facial y belleza natural",
    description:
      "Clinica estetica facial en Panama enfocada en tratamientos personalizados para realzar la belleza natural, la armonia del rostro y el cuidado de la piel.",
    keywords: [
      "clinica estetica facial en Panama",
      "medicina estetica facial en Panama",
      "armonizacion facial en Panama",
      "tratamientos faciales en Panama",
      "cuidado de piel en Panama",
      "toxina botulinica Panama",
      "rellenos faciales Panama",
      "Face Art Clinic Panama"
    ]
  }
} as const;

// Falls back to Instagram if WhatsApp is not yet configured.
export const whatsappUrl = siteConfig.whatsapp
  ? `https://wa.me/${siteConfig.whatsapp}`
  : siteConfig.social.instagram;
