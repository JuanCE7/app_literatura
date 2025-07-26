import React, { useState } from 'react';
import { ThumbsUp, Heart, Star, Send, MessageCircle, Quote } from 'lucide-react';

interface Comentario {
  id: number;
  nombre: string;
  comentario: string;
  likes: number;
  tiempo: string;
  avatar: string;
}

const ComunidadPage: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      id: 1,
      nombre: "Ana García",
      comentario: "¡Increíble trabajo! Los ensayos son muy profundos y bien estructurados.",
      likes: 12,
      tiempo: "hace 2 horas",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      comentario: "Las video reseñas me ayudaron mucho a entender mejor los textos clásicos.",
      likes: 8,
      tiempo: "hace 5 horas",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      nombre: "María López",
      comentario: "Excelente iniciativa para compartir conocimiento literario. ¡Felicitaciones!",
      likes: 15,
      tiempo: "hace 1 día",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]);

  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [reacciones, setReacciones] = useState({ likes: 47, hearts: 23, stars: 31 });

  const agregarComentario = () => {
    if (nuevoComentario.trim() && nombreUsuario.trim()) {
      const comentario: Comentario = {
        id: Date.now(),
        nombre: nombreUsuario,
        comentario: nuevoComentario,
        likes: 0,
        tiempo: "ahora",
        avatar: `https://images.pexels.com/photos/${Math.floor(Math.random() * 1000000)}/pexels-photo-${Math.floor(Math.random() * 1000000)}.jpeg?auto=compress&cs=tinysrgb&w=100`
      };
      setComentarios([comentario, ...comentarios]);
      setNuevoComentario('');
      setNombreUsuario('');
    }
  };

  const darLike = (id: number) => {
    setComentarios(comentarios.map(c => 
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    ));
  };

  const reaccionar = (tipo: 'likes' | 'hearts' | 'stars') => {
    setReacciones(prev => ({
      ...prev,
      [tipo]: prev[tipo] + 1
    }));
  };

  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-16 min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Comunidad Literaria
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comparte tus pensamientos y conecta con otros amantes de la literatura
          </p>
        </div>

        {/* Reacciones Globales */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl mb-6 sm:mb-8 animate-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-4 sm:mb-6 text-center">
            ¿Qué te parece nuestro contenido?
          </h3>
          <div className="flex justify-center space-x-4 sm:space-x-8 mb-6">
            <button
              onClick={() => reaccionar('likes')}
              className="group flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110"
            >
              <ThumbsUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 group-hover:text-blue-600" />
              <span className="text-lg sm:text-xl font-bold text-blue-500">{reacciones.likes}</span>
              <span className="text-xs sm:text-sm text-gray-600">Me gusta</span>
            </button>
            <button
              onClick={() => reaccionar('hearts')}
              className="group flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110"
            >
              <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 group-hover:text-red-600" />
              <span className="text-lg sm:text-xl font-bold text-red-500">{reacciones.hearts}</span>
              <span className="text-xs sm:text-sm text-gray-600">Me encanta</span>
            </button>
            <button
              onClick={() => reaccionar('stars')}
              className="group flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-110"
            >
              <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 group-hover:text-yellow-600" />
              <span className="text-lg sm:text-xl font-bold text-yellow-500">{reacciones.stars}</span>
              <span className="text-xs sm:text-sm text-gray-600">Excelente</span>
            </button>
          </div>
        </div>

        {/* Formulario de Comentarios */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl mb-6 sm:mb-8 animate-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Comparte tu opinión
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Tu nombre"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
            />
            <textarea
              placeholder="Escribe tu comentario aquí..."
              value={nuevoComentario}
              onChange={(e) => setNuevoComentario(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
            />
            <button
              onClick={agregarComentario}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Send className="w-4 h-4" />
              Enviar comentario
            </button>
          </div>
        </div>

        {/* Lista de Comentarios */}
        <div className="space-y-4 sm:space-y-6">
          {comentarios.map((comentario, index) => (
            <div 
              key={comentario.id} 
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-3 sm:space-x-4">
                <img
                  src={comentario.avatar}
                  alt={comentario.nombre}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`;
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{comentario.nombre}</h4>
                    <span className="text-xs sm:text-sm text-gray-500">{comentario.tiempo}</span>
                  </div>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed">{comentario.comentario}</p>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => darLike(comentario.id)}
                      className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors group"
                    >
                      <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">{comentario.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors group">
                      <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium">Responder</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de Inspiración */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-6 sm:p-8 text-white text-center mt-8 sm:mt-12 animate-fade-in-up">
          <Quote className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-4 opacity-50" />
          <p className="text-lg sm:text-xl font-serif italic mb-4">
            "La literatura es el arte de descubrir algo extraordinario acerca de la gente ordinaria, y decir con palabras ordinarias algo extraordinario."
          </p>
          <p className="text-sm sm:text-base opacity-75">- Boris Pasternak</p>
        </div>
      </div>
    </section>
  );
};

export default ComunidadPage;