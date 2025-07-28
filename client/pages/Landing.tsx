import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="min-h-screen bg-lotto-background flex flex-col items-center justify-between relative overflow-hidden">
      {/* Mobile status bar simulation */}
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

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-lotto-text-primary mb-4">
            LottoCoin
          </h1>
          <p className="text-lg text-lotto-text-secondary max-w-xs">
            La forma justa, divertida y transparente de jugar con criptomonedas.
          </p>
        </div>

        {/* 3D Rocket Illustration */}
        <div className="relative w-80 h-80 mb-8">
          {/* Rocket body */}
          <div className="absolute inset-x-0 top-8 mx-auto w-24 h-40 bg-gradient-to-b from-blue-400 to-blue-600 rounded-t-full rounded-b-lg shadow-lg">
            {/* Window */}
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full border-2 border-orange-500"></div>
            {/* Body stripes */}
            <div className="absolute top-16 left-2 right-2 h-1 bg-white/20 rounded"></div>
            <div className="absolute top-20 left-2 right-2 h-1 bg-white/20 rounded"></div>
          </div>

          {/* Rocket fins */}
          <div className="absolute bottom-20 left-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-blue-700"></div>
          <div className="absolute bottom-20 right-12 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-blue-700"></div>

          {/* Fire/exhaust */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-20">
            <div className="w-full h-full bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 rounded-t-lg opacity-90 animate-pulse"></div>
          </div>

          {/* Clouds */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-white rounded-full opacity-80"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 translate-x-8 w-24 h-12 bg-white rounded-full opacity-60"></div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 -translate-x-8 w-20 h-10 bg-white rounded-full opacity-60"></div>

          {/* Floating coins */}
          <div
            className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0s" }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">
              $
            </div>
          </div>
          <div
            className="absolute top-12 right-8 w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">
              $
            </div>
          </div>
          <div
            className="absolute top-20 left-8 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 font-bold text-xs">
              $
            </div>
          </div>
          <div
            className="absolute top-32 right-4 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full shadow-lg animate-bounce"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="absolute inset-1 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full px-6 pb-8 space-y-4">
        <Button
          asChild
          className="w-full bg-lotto-button-dark text-lotto-green hover:bg-lotto-button-dark/90 rounded-full py-6 text-lg font-semibold"
        >
          <Link to="/crear-cuenta">Crear cuenta</Link>
        </Button>

        <div className="text-center">
          <span className="text-lotto-text-secondary">
            ¿Tienes una cuenta?{" "}
          </span>
          <Link
            to="/iniciar-sesion"
            className="text-lotto-text-primary font-semibold underline"
          >
            Inicia sesión
          </Link>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center pt-4">
          <div className="w-8 h-1 bg-lotto-text-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
