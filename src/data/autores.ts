export interface Autor {
    nombre: string;
    especialidad: string;
    ensayos: number;
    foto: string;
    descripcion: string;
    temas: string[];
    color: string;
    redes: {
      instagram: string;
      facebook: string;
      email: string;
    };
  }
  
  export const autores: Autor[] = [
    {
      nombre: "María González Pérez",
      especialidad: "Narrativa Contemporánea",
      ensayos: 3,
      foto: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Especialista en análisis narrativo y pedagogía digital. Sus investigaciones se centran en la adaptación de textos clásicos para nuevas generaciones.",
      temas: ["Realismo Mágico", "Pedagogía Digital", "Literatura Juvenil"],
      color: "from-purple-400 to-pink-400",
      redes: {
        instagram: "@maria.literatura",
        facebook: "María González Literatura",
        email: "maria.gonzalez@edu.pe"
      }
    },
    {
      nombre: "Carlos Ruiz Mendoza",
      especialidad: "Crítica Literaria",
      ensayos: 4,
      foto: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Investigador en hermenéutica literaria y metodologías de enseñanza innovadoras. Pionero en el uso de tecnología educativa.",
      temas: ["Hermenéutica", "Tecnología Educativa", "Análisis Textual"],
      color: "from-blue-400 to-cyan-400",
      redes: {
        instagram: "@carlos.critica",
        facebook: "Carlos Ruiz Académico",
        email: "carlos.ruiz@edu.pe"
      }
    },
    {
      nombre: "Ana Martínez Silva",
      especialidad: "Poesía y Expresión",
      ensayos: 2,
      foto: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Experta en poesía contemporánea y técnicas de expresión creativa. Desarrolla métodos innovadores para la enseñanza poética.",
      temas: ["Poesía Contemporánea", "Expresión Creativa", "Métrica"],
      color: "from-green-400 to-emerald-400",
      redes: {
        instagram: "@ana.poesia",
        facebook: "Ana Martínez Poesía",
        email: "ana.martinez@edu.pe"
      }
    },
    {
      nombre: "Diego Morales Torres",
      especialidad: "Literatura Clásica",
      ensayos: 5,
      foto: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Estudioso de los clásicos universales y su aplicación en contextos educativos modernos. Especialista en adaptaciones pedagógicas.",
      temas: ["Literatura Clásica", "Adaptaciones", "Historia Literaria"],
      color: "from-orange-400 to-red-400",
      redes: {
        instagram: "@diego.clasicos",
        facebook: "Diego Morales Literatura",
        email: "diego.morales@edu.pe"
      }
    },
    {
      nombre: "Isabella Torres Vega",
      especialidad: "Sociolingüística",
      ensayos: 3,
      foto: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Investigadora en el impacto social de la literatura y las variaciones lingüísticas en textos educativos contemporáneos.",
      temas: ["Sociolingüística", "Impacto Social", "Variaciones Lingüísticas"],
      color: "from-indigo-400 to-purple-400",
      redes: {
        instagram: "@isabella.socio",
        facebook: "Isabella Torres Investigación",
        email: "isabella.torres@edu.pe"
      }
    },
    {
      nombre: "Roberto Silva Campos",
      especialidad: "Didáctica Literaria",
      ensayos: 4,
      foto: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      descripcion: "Especialista en metodologías didácticas para la enseñanza de literatura. Creador de estrategias pedagógicas innovadoras.",
      temas: ["Didáctica", "Metodologías", "Estrategias Pedagógicas"],
      color: "from-teal-400 to-blue-400",
      redes: {
        instagram: "@roberto.didactica",
        facebook: "Roberto Silva Educación",
        email: "roberto.silva@edu.pe"
      }
    }
  ];