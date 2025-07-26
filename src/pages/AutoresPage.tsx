import React from 'react';
import { FileText, Star } from 'lucide-react';

interface Autor {
  nombre: string;
  especialidad: string;
  ensayos: number;
  foto: string;
  descripcion: string;
  temas: string[];
  color: string;
}

interface AutoresPageProps {
  autores: Autor[];
}

const AutoresPage: React.FC<AutoresPageProps> = ({ autores }) => {
  return (
    <section className="pt-16 sm:pt-24 pb-8 sm:pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4 sm:mb-6">
            Autores del 6to Ciclo
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Conoce a los talentosos estudiantes que han contribuido con sus investigaciones literarias
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {autores.map((autor, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 sm:hover:-translate-y-4 transition-all duration-500 animate-fade-in-up overflow-hidden"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${autor.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center mb-4 sm:mb-6">
                  <div className="relative mb-4">
                    <img 
                      src={autor.foto} 
                      alt={autor.nombre}
                      className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${autor.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-gray-800 mb-2 group-hover:text-amber-700 transition-colors text-center">
                    {autor.nombre}
                  </h3>
                  <span className={`bg-gradient-to-r ${autor.color} text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg`}>
                    {autor.especialidad}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed text-center">
                  {autor.descripcion}
                </p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Temas de investigación:</h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {autor.temas.map((tema, idx) => (
                      <span key={idx} className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs font-medium">
                        {tema}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4 sm:mb-6">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-amber-600" />
                    <span className="font-medium">{autor.ensayos} ensayos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">Destacado</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 sm:py-3 rounded-xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                  Ver trabajos
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoresPage;