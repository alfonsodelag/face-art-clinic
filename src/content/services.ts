export type Service = {
  title: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    title: "Dermatología clínica",
    description:
      "Evaluación médica de piel, cabello y uñas con planes claros para diagnóstico, tratamiento y seguimiento.",
    image: "/images/services/sd-1.jpg",
    featured: true
  },
  {
    title: "Tratamiento para acné",
    description:
      "Protocolos personalizados para brotes activos, marcas, sensibilidad e inflamación persistente.",
    image: "/images/services/sd-2.jpg",
    featured: true
  },
  {
    title: "Manchas y melasma",
    description:
      "Manejo integral de hiperpigmentación con peelings, tecnología médica y cuidado domiciliario.",
    image: "/images/services/sd-3.jpg",
    featured: true
  },
  {
    title: "Rejuvenecimiento facial",
    description:
      "Tratamientos para textura, luminosidad y firmeza, diseñados para resultados naturales.",
    image: "/images/services/services-details.jpg"
  },
  {
    title: "Botox y rellenos faciales",
    description:
      "Procedimientos estéticos médicos para suavizar líneas y armonizar rasgos con criterio clínico.",
    image: "/images/consultation-video.jpg"
  },
  {
    title: "Láser dermatológico",
    description:
      "Tecnología para manchas, rojeces, cicatrices, rejuvenecimiento y otras necesidades de la piel.",
    image: "/images/services-bg.jpg"
  }
];
