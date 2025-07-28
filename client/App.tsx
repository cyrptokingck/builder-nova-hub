import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CrearCuenta from "./pages/CrearCuenta";
import IniciarSesion from "./pages/IniciarSesion";
import Comencemos from "./pages/Comencemos";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import OnboardingWalkthrough1 from "./pages/OnboardingWalkthrough1";
import OnboardingWalkthrough2 from "./pages/OnboardingWalkthrough2";
import OnboardingWalkthrough3 from "./pages/OnboardingWalkthrough3";
import OnboardingWalkthrough4 from "./pages/OnboardingWalkthrough4";
import OnboardingWalkthrough5 from "./pages/OnboardingWalkthrough5";
import ComprarTickets from "./pages/ComprarTickets";
import MiSaldo from "./pages/MiSaldo";
import MiPerfil from "./pages/MiPerfil";
import Notificaciones from "./pages/Notificaciones";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/onboarding-walkthrough-1"
          element={<OnboardingWalkthrough1 />}
        />
        <Route
          path="/onboarding-walkthrough-2"
          element={<OnboardingWalkthrough2 />}
        />
        <Route
          path="/onboarding-walkthrough-3"
          element={<OnboardingWalkthrough3 />}
        />
        <Route
          path="/onboarding-walkthrough-4"
          element={<OnboardingWalkthrough4 />}
        />
        <Route
          path="/onboarding-walkthrough-5"
          element={<OnboardingWalkthrough5 />}
        />
        <Route path="/landing" element={<Landing />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/iniciar-sesion" element={<IniciarSesion />} />
        <Route path="/comencemos" element={<Comencemos />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/comprar-tickets" element={<ComprarTickets />} />
        <Route path="/mi-saldo" element={<MiSaldo />} />
        <Route path="/mi-perfil" element={<MiPerfil />} />
        <Route path="/notificaciones" element={<Notificaciones />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

// Ensure we only create root once
const container = document.getElementById("root");
if (container && !container._reactRootContainer) {
  const root = createRoot(container);
  root.render(<App />);
}
