import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnboardingWalkthrough5() {
  return (
    <div className="min-h-screen bg-lotto-green flex flex-col relative overflow-hidden">
      {/* Mobile status bar */}
      <div className="w-full flex justify-between items-center px-6 pt-4 text-lotto-black font-semibold">
        <span>12:00</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-lotto-black rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-black rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-black rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-black/40 rounded-full"></div>
          </div>
          <svg className="w-6 h-4 fill-lotto-black ml-1" viewBox="0 0 24 16">
            <path d="M2 4h20v8H2z" />
            <path d="M24 6v4h2V6z" />
          </svg>
          <div className="w-6 h-3 bg-lotto-black rounded-sm ml-1">
            <div className="w-4 h-2 bg-white rounded-sm mt-0.5 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <div className="flex justify-end px-6 py-4">
        <Link to="/landing" className="text-lotto-black/70 font-medium">
          Skip
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-lotto-black mb-4 max-w-xs leading-tight">
            Jugar también es construir oportunidades
          </h1>
          <p className="text-lg text-lotto-black/80 max-w-sm">
            LottoCoin es una comunidad. Cada sorteo impulsa inclusión financiera, igualdad de oportunidades y diversión transparente.
          </p>
        </div>

        {/* 3D Illustration - Community building theme */}
        <div className="relative w-80 h-80 mb-8">
          {/* Floating coins */}
          <div className="absolute top-8 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute top-4 right-12 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>
          <div className="absolute top-20 left-4 w-7 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-12 right-4 w-9 h-9 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.9s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>

          {/* Main character - Same person from screen 3 but celebrating */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            {/* Head */}
            <div className="w-16 h-16 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full shadow-lg relative mb-2">
              {/* Happy eyes */}
              <div className="absolute top-5 left-3 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-5 right-3 w-2 h-2 bg-black rounded-full"></div>
              {/* Big smile */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-3 border-2 border-black border-t-0 rounded-b-full"></div>
              {/* Headphones */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-18 h-4 border-4 border-blue-500 rounded-full bg-transparent"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-blue-600 rounded-full"></div>
              <div className="absolute top-1 right-1 w-4 h-4 bg-blue-600 rounded-full"></div>
            </div>
            
            {/* Body */}
            <div className="w-20 h-16 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-lg shadow-lg mx-auto mb-2">
              {/* Arms raised in celebration */}
              <div className="absolute -left-6 -top-2 w-6 h-14 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full transform -rotate-45"></div>
              <div className="absolute -right-6 -top-2 w-6 h-14 bg-gradient-to-b from-orange-200 to-orange-300 rounded-full transform rotate-45"></div>
              {/* Hands */}
              <div className="absolute -left-8 -top-6 w-4 h-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full"></div>
              <div className="absolute -right-8 -top-6 w-4 h-4 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full"></div>
            </div>
            
            {/* Legs */}
            <div className="relative">
              <div className="absolute -left-2 top-0 w-6 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"></div>
              <div className="absolute right-2 top-0 w-6 h-16 bg-gradient-to-b from-blue-500 to-blue-700 rounded-lg"></div>
              {/* Shoes */}
              <div className="absolute -left-4 top-12 w-8 h-4 bg-red-600 rounded-full"></div>
              <div className="absolute right-0 top-12 w-8 h-4 bg-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Celebration coins falling from hands */}
          <div className="absolute top-2 left-12 w-5 h-5 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.2s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute top-0 right-16 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute top-6 left-16 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.8s' }}>
            <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute top-4 right-20 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '2.1s' }}>
            <div className="absolute inset-0.5 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 pb-8">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-6 h-2 bg-lotto-black rounded-full"></div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button 
            asChild
            className="w-16 h-16 bg-lotto-black text-lotto-green hover:bg-lotto-black/90 rounded-full p-0"
          >
            <Link to="/landing">
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center pt-4">
          <div className="w-8 h-1 bg-lotto-black rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
