import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Comencemos() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Mobile status bar */}
      <div className="w-full flex justify-between items-center px-6 pt-4 text-foreground font-semibold">
        <span>12:00</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-foreground rounded-full"></div>
            <div className="w-1 h-3 bg-foreground rounded-full"></div>
            <div className="w-1 h-3 bg-foreground rounded-full"></div>
            <div className="w-1 h-3 bg-foreground/40 rounded-full"></div>
          </div>
          <svg className="w-6 h-4 fill-foreground ml-1" viewBox="0 0 24 16">
            <path d="M2 4h20v8H2z" />
            <path d="M24 6v4h2V6z" />
          </svg>
          <div className="w-6 h-3 bg-foreground rounded-sm ml-1">
            <div className="w-4 h-2 bg-white rounded-sm mt-0.5 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center px-6 py-4">
        <Link to="/crear-cuenta" className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 flex flex-col justify-center">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Comencemos!
          </h1>
          <p className="text-muted-foreground">
            Por favor introduce tu teléfono móvil para verificar tu cuenta vía
            SMS
          </p>
        </div>

        <div className="mb-8">
          <div className="relative">
            <div className="flex items-center border border-input rounded-lg px-3 py-3">
              <div className="flex items-center pr-3 border-r border-input">
                <div className="w-6 h-4 bg-red-500 rounded-sm mr-2"></div>
                <span className="text-sm font-medium">+34</span>
                <svg
                  className="w-4 h-4 ml-1 text-muted-foreground"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="tel"
                placeholder="000-000-0000"
                className="flex-1 pl-3 bg-transparent outline-none text-muted-foreground"
              />
            </div>
          </div>
        </div>

        <div className="mb-8 text-center text-sm text-muted-foreground">
          <p>
            Haciendo click en "Siguiente" estas de acuerdo con nuestras{" "}
            <Link to="/politicas" className="text-foreground underline">
              políticas
            </Link>{" "}
            y{" "}
            <Link to="/terminos" className="text-foreground underline">
              términos
            </Link>
          </p>
        </div>
      </div>

      {/* Bottom button */}
      <div className="px-6 pb-8">
        <Button
          disabled
          className="w-full bg-muted text-muted-foreground rounded-full py-6 text-lg font-semibold cursor-not-allowed"
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
}
