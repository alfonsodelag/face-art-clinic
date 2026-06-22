export type Service = {
  title: string;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
};

// TODO: Confirm final service list with Face Art Clinic before launch.
export const services: Service[] = [
  {
    title: "Armonización facial",
    description:
      "Tratamiento personalizado para mejorar la proporción y el equilibrio de los rasgos del rostro, buscando resultados naturales y armónicos.",
    image: "/images/services/sd-1.jpg",
    category: "Inyectables estéticos",
    featured: true
  },
  {
    title: "Toxina botulínica",
    description:
      "Ayuda a suavizar la apariencia de líneas de expresión y a relajar zonas específicas del rostro con precisión y criterio estético.",
    image: "/images/services/sd-2.jpg",
    category: "Inyectables estéticos",
    featured: true
  },
  {
    title: "Rellenos faciales",
    description:
      "Tratamientos para restaurar volumen, definir contornos y mejorar la apariencia de ciertas áreas del rostro de forma gradual y natural.",
    image: "/images/services/sd-3.jpg",
    category: "Inyectables estéticos",
    featured: true
  },
  {
    title: "Limpieza facial profunda",
    description:
      "Protocolo de limpieza y purificación de la piel para mejorar su textura, luminosidad y salud general.",
    image: "/images/services/sd-4.jpg",
    category: "Cuidado de la piel"
  },
  {
    title: "Tratamientos para manchas",
    description:
      "Abordaje personalizado para reducir la apariencia de manchas, melasma e hiperpigmentación con un enfoque gradual y seguro.",
    image: "/images/services/sd-5.jpg",
    category: "Cuidado de la piel"
  },
  {
    title: "Peelings y renovación",
    description:
      "Tratamientos de exfoliación controlada para renovar la superficie de la piel y mejorar su tono, textura y apariencia.",
    image: "/images/services/sd-6.jpg",
    category: "Cuidado de la piel"
  },
  {
    title: "Skinboosters",
    description:
      "Hidratación profunda con ácido hialurónico para mejorar la luminosidad, firmeza y calidad general de la piel.",
    image: "/images/services/sd-7.jpg",
    category: "Tratamientos avanzados"
  },
  {
    title: "Bioestimuladores",
    description:
      "Tratamientos que estimulan la producción natural de colágeno para mejorar la firmeza y la calidad de la piel a largo plazo.",
    image: "/images/services/sd-8.jpg",
    category: "Tratamientos avanzados"
  },
  {
    title: "Microneedling",
    description:
      "Técnica de microagujas para estimular la regeneración de la piel, mejorar textura, poros y cicatrices con resultados progresivos.",
    image: "/images/services/sd-9.jpg",
    category: "Tratamientos avanzados"
  }
];

export const serviceCategories = [
  "Inyectables estéticos",
  "Cuidado de la piel",
  "Tratamientos avanzados"
] as const;
