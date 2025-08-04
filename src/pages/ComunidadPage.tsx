import React, { useState, useEffect } from 'react';
import { ThumbsUp, Heart, Star, Send, MessageCircle, Quote, Smile, TrendingUp, Users, Award, Zap } from 'lucide-react';

interface Comentario {
  id: number;
  nombre: string;
  comentario: string;
  likes: number;
  tiempo: string;
  avatar: string;
  tipo?: 'normal' | 'destacado' | 'moderador';
  respuestas?: Comentario[];
}

interface Reacciones {
  likes: number;
  hearts: number;
  stars: number;
}

interface Estadisticas {
  totalComentarios: number;
  usuariosActivos: number;
  interaccionesHoy: number;
}

const ComunidadPage: React.FC = () => {
  const [comentarios, setComentarios] = useState<Comentario[]>([
    {
      id: 1,
      nombre: "Ana García",
      comentario: "¡Increíble trabajo! Los ensayos son muy profundos y bien estructurados. Me ayudaron mucho en mi comprensión de la literatura contemporánea.",
      likes: 12,
      tiempo: "hace 2 horas",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100",
      tipo: "destacado"
    },
    {
      id: 2,
      nombre: "Carlos Mendoza",
      comentario: "Las video reseñas me ayudaron mucho a entender mejor los textos clásicos. La explicación sobre el realismo mágico fue excepcional.",
      likes: 8,
      tiempo: "hace 5 horas",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      nombre: "María López",
      comentario: "Excelente iniciativa para compartir conocimiento literario. ¡Felicitaciones a todos los autores del 6to ciclo!",
      likes: 15,
      tiempo: "hace 1 día",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      tipo: "moderador"
    },
    {
      id: 4,
      nombre: "Diego Ramírez",
      comentario: "Como estudiante de literatura, encuentro estos recursos invaluables. Especialmente el análisis de narrativas digitales.",
      likes: 6,
      tiempo: "hace 3 horas",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]);

  const [nuevoComentario, setNuevoComentario] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [reacciones, setReacciones] = useState<Reacciones>({ likes: 47, hearts: 23, stars: 31 });
  const [estadisticas, setEstadisticas] = useState<Estadisticas>({
    totalComentarios: 156,
    usuariosActivos: 23,
    interaccionesHoy: 89
  });
  const [mostrarEmojis, setMostrarEmojis] = useState(false);
  const [comentarioDestacado, setComentarioDestacado] = useState<Comentario | null>(null);

  // Seleccionar comentario destacado aleatoriamente
  useEffect(() => {
    const comentariosDestacados = comentarios.filter(c => c.likes > 10);
    if (comentariosDestacados.length > 0) {
      const random = Math.floor(Math.random() * comentariosDestacados.length);
      setComentarioDestacado(comentariosDestacados[random]);
    }
  }, [comentarios]);

  // Actualizar estadísticas en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setEstadisticas(prev => ({
        ...prev,
        usuariosActivos: Math.max(15, prev.usuariosActivos + Math.floor(Math.random() * 3) - 1),
        interaccionesHoy: prev.interaccionesHoy + Math.floor(Math.random() * 2)
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const emojis = ['😊', '😍', '🤔', '👏', '🔥', '💡', '📚', '✨'];

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
      setEstadisticas(prev => ({
        ...prev,
        totalComentarios: prev.totalComentarios + 1,
        interaccionesHoy: prev.interaccionesHoy + 1
      }));
      setNuevoComentario('');
      setNombreUsuario('');
    }
  };

  const darLike = (id: number) => {
    setComentarios(comentarios.map(c => 
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    ));
    setEstadisticas(prev => ({
      ...prev,
      interaccionesHoy: prev.interaccionesHoy + 1
    }));
  };

  const reaccionar = (tipo: keyof Reacciones) => {
    setReacciones(prev => ({
      ...prev,
      [tipo]: prev[tipo] + 1
    }));
    setEstadisticas(prev => ({
      ...prev,
      interaccionesHoy: prev.interaccionesHoy + 1
    }));
  };

  const agregarEmoji = (emoji: string) => {
    setNuevoComentario(prev => prev + emoji);
    setMostrarEmojis(false);
  };

  const getTipoIcon = (tipo?: string) => {
    switch (tipo) {
      case 'destacado':
        return <Star className="w-4 h-4 text-yellow-500 fill-current" />;
      case 'moderador':
        return <Award className="w-4 h-4 text-purple-500 fill-current" />;
      default:
        return null;
    }
  };

  const getTipoBorder = (tipo?: string) => {
    switch (tipo) {
      case 'destacado':
        return 'border-l-4 border-yellow-400';
      case 'moderador':
        return 'border-l-4 border-purple-400';
      default:
        return '';
    }
  };

  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-16 min-h-screen bg-gradient-to-br from-green-50 to-teal-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Comunidad Literaria
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Comparte tus pensamientos y conecta con otros amantes de la literatura
          </p>
        </div>

        {/* Estadísticas en Tiempo Real */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 animate-fade-in-up">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <MessageCircle className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-gray-800">{estadisticas.totalComentarios}</div>
            <div className="text-sm text-gray-600">Comentarios totales</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-gray-800">{estadisticas.usuariosActivos}</div>
            <div className="text-sm text-gray-600">Usuarios activos</div>
          </div>
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300">
            <TrendingUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl sm:text-3xl font-bold text-gray-800">{estadisticas.interaccionesHoy}</div>
            <div className="text-sm text-gray-600">Interacciones hoy</div>
          </div>
        </div>

        {/* Comentario Destacado */}
        {comentarioDestacado && (
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8 mb-8 border border-yellow-200 animate-fade-in-up">
            <div className="flex items-center mb-4">
              <Zap className="w-6 h-6 text-yellow-500 mr-2" />
              <h3 className="text-lg font-bold text-gray-800">Comentario Destacado</h3>
            </div>
            <div className="flex items-start space-x-4">
              <img
                src={comentarioDestacado.avatar}
                alt={comentarioDestacado.nombre}
                className="w-12 h-12 rounded-full object-cover shadow-md"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`;
                }}
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-gray-800">{comentarioDestacado.nombre}</h4>
                  {getTipoIcon(comentarioDestacado.tipo)}
                </div>
                <p className="text-gray-700 leading-relaxed">{comentarioDestacado.comentario}</p>
                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center space-x-1">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{comentarioDestacado.likes} likes</span>
                  </span>
                  <span>{comentarioDestacado.tiempo}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reacciones Globales Mejoradas */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8 animate-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-6 text-center">
            ¿Qué te parece nuestro contenido?
          </h3>
          <div className="flex justify-center space-x-6 sm:space-x-12 mb-6">
            <button
              onClick={() => reaccionar('likes')}
              className="group flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <div className="relative">
                <ThumbsUp className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500 group-hover:text-blue-600 transition-colors" />
                <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  +1
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-blue-500 group-hover:text-blue-600">{reacciones.likes}</span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">Me gusta</span>
            </button>
            <button
              onClick={() => reaccionar('hearts')}
              className="group flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl hover:bg-red-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <div className="relative">
                <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-red-500 group-hover:text-red-600 transition-colors" />
                <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  +1
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-red-500 group-hover:text-red-600">{reacciones.hearts}</span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">Me encanta</span>
            </button>
            <button
              onClick={() => reaccionar('stars')}
              className="group flex flex-col items-center space-y-3 p-4 sm:p-6 rounded-2xl hover:bg-yellow-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
            >
              <div className="relative">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500 group-hover:text-yellow-600 transition-colors" />
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
                  +1
                </div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-yellow-500 group-hover:text-yellow-600">{reacciones.stars}</span>
              <span className="text-sm sm:text-base text-gray-600 font-medium">Excelente</span>
            </button>
          </div>
        </div>

        {/* Formulario de Comentarios Mejorado */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl mb-8 animate-fade-in-up">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-gray-800 mb-6">
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
            <div className="relative">
              <textarea
                placeholder="Escribe tu comentario aquí..."
                value={nuevoComentario}
                onChange={(e) => setNuevoComentario(e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base pr-12"
              />
              <button
                onClick={() => setMostrarEmojis(!mostrarEmojis)}
                className="absolute bottom-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Smile className="w-5 h-5" />
              </button>
              {mostrarEmojis && (
                <div className="absolute bottom-12 right-0 bg-white border border-gray-200 rounded-lg p-2 shadow-lg z-10">
                  <div className="grid grid-cols-4 gap-1">
                    {emojis.map((emoji, index) => (
                      <button
                        key={index}
                        onClick={() => agregarEmoji(emoji)}
                        className="p-2 hover:bg-gray-100 rounded text-lg transition-colors"
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={agregarComentario}
              className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600 text-white px-8 py-3 rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Send className="w-4 h-4" />
              Enviar comentario
            </button>
          </div>
        </div>

        {/* Lista de Comentarios Mejorada */}
        <div className="space-y-6">
          {comentarios.map((comentario, index) => (
            <div 
              key={comentario.id} 
              className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up ${getTipoBorder(comentario.tipo)}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="flex items-start space-x-4">
                <img
                  src={comentario.avatar}
                  alt={comentario.nombre}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover shadow-md"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100`;
                  }}
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <h4 className="font-semibold text-gray-800 text-sm sm:text-base">{comentario.nombre}</h4>
                      {getTipoIcon(comentario.tipo)}
                    </div>
                    <span className="text-xs sm:text-sm text-gray-500">{comentario.tiempo}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">{comentario.comentario}</p>
                  <div className="flex items-center space-x-6">
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
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                      <span className="text-sm">Compartir</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de Inspiración Mejorado */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 sm:p-12 text-white text-center mt-12 animate-fade-in-up relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <Quote className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 opacity-50" />
            <p className="text-xl sm:text-2xl font-serif italic mb-6 leading-relaxed">
              "La literatura es el arte de descubrir algo extraordinario acerca de la gente ordinaria, y decir con palabras ordinarias algo extraordinario."
            </p>
            <p className="text-sm sm:text-base opacity-75 mb-6">- Boris Pasternak</p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold">{comentarios.length}</div>
                <div className="opacity-75">Voces activas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{reacciones.likes + reacciones.hearts + reacciones.stars}</div>
                <div className="opacity-75">Reacciones</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="opacity-75">Inspiración</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComunidadPage;