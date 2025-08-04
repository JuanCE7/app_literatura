export interface Ensayo {
    titulo: string;
    autor: string;
    resumen: string;
    paginas: number;
    categoria: string;
    fecha: string;
    rating: number;
    preview: string;
  }
  
  export const ensayos: Ensayo[] = [
    {
      titulo: "La Metamorfosis de la Enseñanza Literaria",
      autor: "Laura Pérez",
      resumen: "Un análisis profundo sobre cómo la pedagogía moderna transforma la enseñanza de la literatura clásica en el siglo XXI...",
      paginas: 15,
      categoria: "Pedagogía",
      fecha: "Febrero 2025",
      rating: 4.8,
      preview: "La literatura clásica enfrenta desafíos únicos en el contexto educativo contemporáneo. Este ensayo explora metodologías innovadoras que permiten conectar obras atemporales con estudiantes del siglo XXI, utilizando herramientas digitales y enfoques pedagógicos modernos para revitalizar textos que han perdido relevancia aparente en las nuevas generaciones..."
    },
    {
      titulo: "Narrativas Digitales en el Aula",
      autor: "Roberto Silva",
      resumen: "Explorando las nuevas formas de contar historias en la era digital y su impacto transformador en la educación...",
      paginas: 12,
      categoria: "Tecnología Educativa",
      fecha: "Enero 2025",
      rating: 4.9,
      preview: "La revolución digital ha transformado no solo cómo consumimos contenido, sino también cómo lo creamos y enseñamos. Las narrativas digitales representan una oportunidad única para integrar tecnología y literatura, creando experiencias inmersivas que capturan la atención de estudiantes nativos digitales..."
    },
    {
      titulo: "El Poder Transformador de la Palabra",
      autor: "Isabella Torres",
      resumen: "Reflexiones profundas sobre el impacto social y emocional de la literatura en la formación integral estudiantil...",
      paginas: 18,
      categoria: "Impacto Social",
      fecha: "Marzo 2025",
      rating: 4.7,
      preview: "Las palabras poseen un poder transformador que trasciende las páginas de los libros. Este ensayo examina cómo la literatura influye en la construcción de identidad, valores y perspectivas sociales de los estudiantes, analizando casos específicos donde textos literarios han generado cambios significativos en comunidades educativas..."
    },

  ];