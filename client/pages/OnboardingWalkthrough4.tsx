import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnboardingWalkthrough4() {
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
            Código abierto, premios garantizados
          </h1>
          <p className="text-lg text-lotto-black/80 max-w-sm">
            Usamos contratos inteligentes auditados, reglas claras y probabilidades públicas. Todo está verificado y nadie puede manipularlo.
          </p>
        </div>

        {/* 3D Illustration - Security/Verification theme */}
        <div className="relative w-80 h-80 mb-8">
          {/* Floating coins */}
          <div className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>
          <div className="absolute top-16 right-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }}>
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
          </div>

          {/* Main elements - Shield, document, and lock */}
          
          {/* Security Shield with checkmark */}
          <div className="absolute top-12 left-4 w-16 h-20 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full rounded-b-lg shadow-lg">
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Gold coins on shield */}
            <div className="absolute top-12 left-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
            <div className="absolute top-14 right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>

          {/* Document/Contract */}
          <div className="absolute top-8 right-4 w-12 h-16 bg-white rounded-lg shadow-lg border-2 border-gray-200">
            <div className="absolute top-2 left-1 right-1 h-1 bg-orange-400 rounded"></div>
            <div className="absolute top-4 left-1 right-1 h-0.5 bg-gray-300 rounded"></div>
            <div className="absolute top-5 left-1 right-1 h-0.5 bg-gray-300 rounded"></div>
            <div className="absolute top-6 left-1 right-1 h-0.5 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 right-1 w-3 h-3 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full"></div>
          </div>

          {/* Lock with coin */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg shadow-lg">
            {/* Lock shackle */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 border-4 border-purple-600 rounded-t-full bg-transparent"></div>
            {/* Keyhole */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-800 rounded-full"></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-purple-800"></div>
            {/* Coin with dollar sign */}
            <div className="absolute -top-3 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg">
              <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
            </div>
          </div>

          {/* Additional floating elements */}
          <div className="absolute bottom-8 left-8 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div className="absolute bottom-4 right-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce" style={{ animationDelay: '0.9s' }}>
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">$</div>
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
          <div className="w-6 h-2 bg-lotto-black rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button 
            asChild
            className="w-16 h-16 bg-lotto-black text-lotto-green hover:bg-lotto-black/90 rounded-full p-0"
          >
            <Link to="/onboarding-walkthrough-5">
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
