import React from 'react';
import { Play, Video, Star } from 'lucide-react';

interface VideoResena {
  titulo: string;
  autor: string;
  duracion: string;
  thumbnail: string;
  views: string;
  likes: number;
}

interface VideoResenasPageProps {
  videos: VideoResena[];
}

const VideoResenasPage: React.FC<VideoResenasPageProps> = ({ videos }) => {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-16 min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Video Reseñas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Análisis audiovisuales que dan vida a la crítica literaria
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={video.thumbnail} 
                  alt={video.titulo}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-4 sm:p-6 rounded-full hover:from-red-700 hover:to-pink-700 transform hover:scale-110 transition-all duration-200 shadow-2xl">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
                  </button>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  {video.duracion}
                </div>
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex items-center space-x-2 sm:space-x-4 text-white text-xs sm:text-sm">
                  <span className="flex items-center space-x-1">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{video.views} views</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current text-yellow-400" />
                    <span>{video.likes}</span>
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3 group-hover:text-pink-300 transition-colors">
                  {video.titulo}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                  Por {video.autor}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Video className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400" />
                    <span className="text-xs sm:text-sm text-gray-300">Video Reseña</span>
                  </div>
                  <button className="text-pink-400 hover:text-pink-300 transition-colors text-xs sm:text-sm font-medium">
                    Ver más →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoResenasPage;