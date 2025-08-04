import React from "react";
import { BookOpen, FileText, Users, ChevronDown, Feather } from "lucide-react";

interface InicioPageProps {
  currentText: string;
  navigateToPage: (page: string) => void;
}

const InicioPage: React.FC<InicioPageProps> = ({
  currentText,
  navigateToPage,
}) => {
  return (
    <section className="pt-14 sm:pt-16 min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 via-orange-100/30 to-yellow-100/50"></div>

      {/* Animated Background Elements - Responsive */}
      <div className="absolute inset-0">
        <Feather
          className="absolute top-16 sm:top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 text-amber-200/30 animate-float"
          style={{ animationDelay: "0s" }}
        />
        <BookOpen
          className="absolute top-32 sm:top-40 right-8 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 text-orange-200/30 animate-float"
          style={{ animationDelay: "1s" }}
        />
        <FileText
          className="absolute bottom-24 sm:bottom-32 left-8 sm:left-20 w-14 h-14 sm:w-28 sm:h-28 text-yellow-200/30 animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-6 sm:mb-8 animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif font-bold text-gray-800 mb-4 leading-tight">
            Redescubriendo
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600 block animate-gradient">
               lo Hispanoamericano
            </span>
          </h1>
        </div>

        <div className="h-16 sm:h-20 flex items-center justify-center mb-8 sm:mb-12 px-4">
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-600 font-light text-center">
            {currentText}
            <span className="animate-pulse text-amber-600">|</span>
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 animate-fade-in-up px-4"
          style={{ animationDelay: "0.5s" }}
        >
          <button
            onClick={() => navigateToPage("autores")}
            className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl w-full sm:w-auto"
          >
            <span className="flex items-center justify-center space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              <span className="text-sm sm:text-base">Conocer Autores</span>
            </span>
          </button>
          <button
            onClick={() => navigateToPage("ensayos")}
            className="group border-2 border-amber-600 text-amber-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
          >
            <span className="flex items-center justify-center space-x-2">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
              <span className="text-sm sm:text-base">Explorar Contenido</span>
            </span>
          </button>
        </div>

        <button
          onClick={() => navigateToPage("autores")}
          className="animate-bounce text-amber-600 hover:text-amber-700 transition-colors group"
        >
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 mx-auto group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default InicioPage;
