export interface Ensayo {
    titulo: string;
    autor: string;
    resumen: string;
    paginas: number;
    categoria: string;
    fecha: string;
    rating: number;
    preview: string;
    pdf: string;
  }
  
  export const ensayos: Ensayo[] = [
    {
      titulo: "Estrategias narrativas en La sangre de la aurora: la focalización de la violencia",
      autor: "Maria José Moscol",
      resumen: "La sangre de la aurora es una novela de ficción histórica de la escritora peruana Claudia Salazar...",
      paginas: 5,
      categoria: "Novela",
      fecha: "Julio 2025",
      rating: 4.8,
      preview: "La sangre de la aurora es una novela de ficción histórica de la escritora peruana Claudia Salazar Jiménez publicada en 2013. Ha sido traducida al inglés por Elizabeth Bryer y presentada en la ciudad de Nueva York, donde reside actualmente la autora...",
      pdf: "La Sangre de la Aurora.pdf",
    },
    {
      titulo: "Crescendo del caleidoscopio neobarroco en la angustia corpórea",
      autor: "Abigail Arias",
      resumen: "'La Mujer de Helio' es el título de una obra poética de la escritora ecuatoriana Dina Bellrham...",
      paginas: 4,
      categoria: "Poesía",
      fecha: "Julio 2025",
      rating: 4.8,
      preview: "'La Mujer de Helio' es el título de una obra poética de la escritora ecuatoriana Dina Bellrham. La autora construye un sujeto neobarroco a través de la figura de la 'Mujer de Helio', quien representa una manifestación de la subjetividad poética y sus discursos ocultos. La obra explora la relación entre el sujeto poético y el lenguaje, utilizando elementos del neobarroco para crear una experiencia estética compleja y profunda...",
      pdf: "La Mujer de Helio.pdf",
    },
  ];