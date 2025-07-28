import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
