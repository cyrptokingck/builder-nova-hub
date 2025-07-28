import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OnboardingWalkthrough2() {
  return (
    <div className="min-h-screen bg-lotto-background flex flex-col relative overflow-hidden">
      {/* Mobile status bar */}
      <div className="w-full flex justify-between items-center px-6 pt-4 text-lotto-text-primary font-semibold">
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
        <Link to="/landing" className="text-lotto-text-secondary font-medium">
          Skip
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-lotto-text-primary mb-4 max-w-xs leading-tight">
            Participa con solo unos céntimos
          </h1>
          <p className="text-lg text-lotto-text-secondary max-w-sm">
            Compra boletos con pequeñas cantidades y entra en sorteos semanales.
            Cuantos más boletos, más oportunidades.
          </p>
        </div>

        {/* 3D Illustration - Leprechaun with gold (from original design) */}
        <div className="relative w-80 h-80 mb-8">
          {/* Gold coins scattered around */}
          <div
            className="absolute top-8 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">
              $
            </div>
          </div>
          <div
            className="absolute top-4 right-12 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
          <div
            className="absolute top-16 left-4 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">
              $
            </div>
          </div>
          <div
            className="absolute top-24 right-8 w-7 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0.9s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>

          {/* Main 3D Character - Simplified leprechaun */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
            {/* Hat */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-12 bg-gradient-to-b from-green-600 to-green-800 rounded-t-full shadow-lg">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-2 bg-green-700 rounded-full"></div>
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
            </div>

            {/* Head */}
            <div className="w-20 h-20 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full shadow-lg relative">
              {/* Eyes */}
              <div className="absolute top-6 left-3 w-2 h-2 bg-black rounded-full"></div>
              <div className="absolute top-6 right-3 w-2 h-2 bg-black rounded-full"></div>
              {/* Nose */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-orange-400 rounded-full"></div>
              {/* Smile */}
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-black rounded-full"></div>
              {/* Beard */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-gradient-to-b from-orange-600 to-orange-700 rounded-b-full"></div>
            </div>

            {/* Body */}
            <div className="w-16 h-24 bg-gradient-to-b from-green-500 to-green-700 rounded-lg shadow-lg mx-auto">
              {/* Belt */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-18 h-2 bg-black rounded-full"></div>
              <div className="absolute top-15 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-sm"></div>
            </div>
          </div>

          {/* Pot of gold */}
          <div className="absolute bottom-4 right-8 w-12 h-10 bg-gradient-to-b from-gray-600 to-gray-800 rounded-lg shadow-lg">
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full shadow-lg overflow-hidden">
              <div className="absolute top-1 left-2 w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
              <div className="absolute top-2 right-3 w-2 h-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            </div>
          </div>

          {/* Four-leaf clover */}
          <div className="absolute top-32 right-4 w-8 h-8">
            <div className="relative w-full h-full">
              <div className="absolute top-0 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute top-2 left-0 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute top-2 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute bottom-0 left-2 w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="px-6 pb-8">
        {/* Progress dots */}
        <div className="flex justify-center gap-2 mb-6">
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-6 h-2 bg-lotto-black rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
          <div className="w-2 h-2 bg-lotto-black/40 rounded-full"></div>
        </div>

        {/* Next button */}
        <div className="flex justify-end">
          <Button
            asChild
            className="w-16 h-16 bg-lotto-button-dark text-lotto-green hover:bg-lotto-button-dark/90 rounded-full p-0"
          >
            <Link to="/onboarding-walkthrough-3">
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
