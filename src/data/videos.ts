export interface VideoResena {
    titulo: string;
    autor: string;
    duracion: string;
    thumbnail: string;
    views: string;
    likes: number;
    videoUrl: string;
    descripcion: string;
  }
  
  export const videoResenas: VideoResena[] = [
    {
      titulo: "Máscaras",
      autor: "Miriam Álvarez, Valeria Mallaguari",
      duracion: "8:45",
      thumbnail: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "2.3k",
      likes: 156,
      videoUrl: "https://www.youtube.com/watch?v=97eFZ7GXUCI",
      descripcion: "Análisis profundo de la obra maestra de García Márquez desde una perspectiva educativa moderna."
    },
    {
      titulo: "Enseñando Poesía en el Siglo XXI",
      autor: "Carmen Delgado",
      duracion: "6:30",
      thumbnail: "https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "1.8k",
      likes: 142,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      descripcion: "Estrategias innovadoras para hacer la poesía accesible y emocionante para estudiantes contemporáneos."
    },
    {
      titulo: "Literatura Juvenil Contemporánea",
      autor: "Diego Morales",
      duracion: "10:15",
      thumbnail: "https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "3.1k",
      likes: 203,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      descripcion: "Explorando las tendencias actuales en literatura juvenil y su impacto en la formación de lectores."
    },
    {
      titulo: "El Realismo Mágico en el Aula",
      autor: "Ana Martínez",
      duracion: "7:22",
      thumbnail: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&w=600",
      views: "1.5k",
      likes: 98,
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      descripcion: "Técnicas para enseñar realismo mágico de manera que los estudiantes comprendan su relevancia cultural."
    }
  ];