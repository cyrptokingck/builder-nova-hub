import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnboardingWalkthrough1() {
  return (
    <div className="min-h-screen bg-lotto-background flex flex-col relative overflow-hidden">
      {/* Mobile status bar */}
      <div className="w-full flex justify-between items-center px-6 pt-4 text-lotto-text-primary font-semibold">
        <span>12:00</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-lotto-text-primary rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-text-primary rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-text-primary rounded-full"></div>
            <div className="w-1 h-3 bg-lotto-text-primary/40 rounded-full"></div>
          </div>
          <svg className="w-6 h-4 fill-lotto-text-primary ml-1" viewBox="0 0 24 16">
            <path d="M2 4h20v8H2z" />
            <path d="M24 6v4h2V6z" />
          </svg>
          <div className="w-6 h-3 bg-lotto-text-primary rounded-sm ml-1">
            <div className="w-4 h-2 bg-white rounded-sm mt-0.5 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Skip button */}
      <div className="flex justify-end px-6 py-4">
        <Link to="/landing" className="text-lotto-text-secondary font-medium">
          Skip
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-lotto-black mb-4 max-w-xs leading-tight">
            Juega y gana con criptomonedas, cada semana
          </h1>
          <p className="text-lg text-lotto-black/80 max-w-sm">
            LottoCoin es una plataforma de lotería en USDT (TRC-20) donde los premios se reparten siempre de forma garantizada y transparente.
          </p>
        </div>

        {/* 3D Illustration - Money bag with coins */}
        <div className="relative w-80 h-80 mb-8">
          {/* Main money bag */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-24 h-32 bg-gradient-to-b from-gray-100 to-gray-300 rounded-t-full rounded-b-lg shadow-lg relative">
              {/* Bag tie */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-b from-red-400 to-red-600 rounded-full shadow-md">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-red-300 rounded-full"></div>
              </div>
              
              {/* Dollar sign on bag */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-green-600">$</div>
            </div>
          </div>

          {/* Floating coins around */}
          <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-sm">$</div>
          </div>
          
          <div className="absolute top-4 right-12 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>
          
          <div className="absolute top-16 left-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>
          
          <div className="absolute top-24 right-8 w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.9s' }}>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-sm">$</div>
          </div>

          <div className="absolute bottom-8 right-4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.2s' }}>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>

          <div className="absolute bottom-4 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '1.5s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 pb-8">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-6 h-2 bg-lotto-black rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button 
            asChild
            className="w-16 h-16 bg-lotto-black text-lotto-green hover:bg-lotto-black/90 rounded-full p-0"
          >
            <Link to="/onboarding-walkthrough-2">
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
