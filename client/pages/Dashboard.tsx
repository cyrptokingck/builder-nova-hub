import { Button } from "@/components/ui/button";
import { Home, FileText, Wallet, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
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
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-lotto-green rounded-full"></div>
          <span className="text-sm">Hola, Manuel 👋</span>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/notificaciones" className="relative">
            <Bell className="w-6 h-6 text-black" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Link>
          <div className="bg-lotto-black text-lotto-green px-3 py-1 rounded-full text-sm font-semibold">
            💰 1,202,365 USDT
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 px-6">
        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground">
            Esta semana repartimos 🎯
          </p>
          <h1 className="text-4xl font-bold text-lotto-green">45 000 000</h1>
          <p className="text-xl text-muted-foreground">USDT</p>
          <p className="text-sm text-red-500 mt-1">Finaliza en 3d 04h 12m</p>
        </div>

        <Link to="/comprar-tickets">
          <Button className="w-full bg-lotto-green text-lotto-black hover:bg-lotto-green/90 rounded-full py-6 text-lg font-semibold mb-4">
            Comprar boleto
          </Button>
        </Link>

        <p className="text-center text-sm text-lotto-green mb-8">
          15M de boletos ya participan
        </p>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Boletos activos</h2>
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-card border rounded-lg p-3 text-center"
              >
                <div className="text-sm font-semibold">08 23</div>
                <div className="text-sm font-semibold">32 36</div>
                <div className="text-sm font-semibold">36 36</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Fri, 01 ago
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Últimos resultados</h2>
            <span className="text-sm text-muted-foreground">All results</span>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">08 23 32 36 36 66</div>
                <div className="text-xs text-muted-foreground">
                  Fri, 25 jun 2025
                </div>
              </div>
              <div className="text-lotto-green font-semibold">
                15 223 365 USDT
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <div className="font-semibold">32 54 50 25 78 95</div>
                <div className="text-xs text-muted-foreground">
                  Fri, 18 jun 2025
                </div>
              </div>
              <div className="text-lotto-green font-semibold">22 USDT</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-lotto-black rounded-t-3xl p-4 mx-4 mb-4">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 bg-lotto-green rounded-full flex items-center justify-center">
              <Home className="w-6 h-6 text-lotto-black" />
            </div>
            <span className="text-xs text-lotto-green font-medium">Home</span>
          </div>
          <Link to="/comprar-tickets" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white">Boletos</span>
          </Link>
          <Link to="/mi-saldo" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white">Wallet</span>
          </Link>
          <Link to="/mi-perfil" className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs text-white">Perfil</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
