import React from 'react';
import { Download, FileText, Star } from 'lucide-react';

interface Ensayo {
  titulo: string;
  autor: string;
  resumen: string;
  paginas: number;
  categoria: string;
  fecha: string;
  rating: number;
}

interface EnsayosPageProps {
  ensayos: Ensayo[];
}

const EnsayosPage: React.FC<EnsayosPageProps> = ({ ensayos }) => {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-16 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Ensayos Académicos
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Investigaciones y reflexiones profundas sobre literatura y pedagogía
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {ensayos.map((ensayo, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.15}s`}}
            >
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  {ensayo.categoria}
                </span>
                <div className="flex items-center space-x-2">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm font-medium text-gray-600">{ensayo.rating}</span>
                </div>
              </div>

              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-800 mb-3 sm:mb-4 group-hover:text-blue-700 transition-colors">
                {ensayo.titulo}
              </h3>

              <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed line-clamp-3">
                {ensayo.resumen}
              </p>

              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                <span className="font-medium">Por {ensayo.autor}</span>
                <span>{ensayo.fecha}</span>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                <span>{ensayo.paginas} páginas</span>
                <span className="flex items-center space-x-1">
                  <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>PDF</span>
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 sm:py-3 px-3 sm:px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                  <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                  Descargar
                </button>
                <button className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium text-sm sm:text-base">
                  Vista previa
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnsayosPage;