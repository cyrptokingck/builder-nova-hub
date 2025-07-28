import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CrearCuenta() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
        <Link to="/" className="p-2">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 pb-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Crear cuenta
          </h1>
          <p className="text-muted-foreground">
            Por favor introduce todos los datos que solicitamos para crear tu cuenta.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Nombre
            </label>
            <Input 
              placeholder="Manuel"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Apellidos
            </label>
            <Input 
              placeholder="Campos P"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Email
            </label>
            <Input 
              type="email"
              placeholder="manuel.g.campos.p@gmail.com"
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Contraseña
            </label>
            <div className="relative">
              <Input 
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-1">
              Confirmar contraseña
            </label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••••"
                className="w-full pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                <Eye className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex items-start space-x-2 pt-4">
            <Checkbox id="terms" className="mt-1" />
            <label htmlFor="terms" className="text-sm text-muted-foreground leading-5">
              He leído y acepto los{" "}
              <Link to="/terminos" className="text-foreground font-medium underline">
                Términos y Condiciones
              </Link>{" "}
              y la{" "}
              <Link to="/privacidad" className="text-foreground font-medium underline">
                Política de Privacidad
              </Link>
            </label>
          </div>
        </form>
      </div>

      {/* Bottom button */}
      <div className="px-6 pb-8">
        <Button 
          asChild
          className="w-full bg-lotto-green text-lotto-black hover:bg-lotto-green/90 rounded-full py-6 text-lg font-semibold"
        >
          <Link to="/comencemos">Siguiente</Link>
        </Button>
      </div>
    </div>
  );
}
