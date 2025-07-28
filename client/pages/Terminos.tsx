import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Terminos() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link to="/mi-perfil" className="flex items-center text-black hover:text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-black">Términos y Condiciones</h1>
        <div className="w-6" />
      </div>

      <div className="p-6">
        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Términos y Condiciones de Uso</h2>
              <p className="text-gray-600">
                Bienvenido a LottoCoin. Por favor, lee atentamente estos términos antes de utilizar nuestra plataforma.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-black mb-3">1. Aceptación de los términos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Al crear una cuenta en LottoCoin, aceptas quedar vinculado a estas condiciones de uso y todas las políticas aplicables.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">2. Naturaleza del servicio</h3>
                <p className="text-gray-700 leading-relaxed">
                  LottoCoin es una plataforma de lotería basada en criptomonedas donde los usuarios compran boletos con USDT para participar en sorteos semanales. No somos un casino ni una casa de apuestas tradicional.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">3. Elegibilidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Debes ser mayor de edad según las leyes de tu país de residencia y no residir en jurisdicciones donde este tipo de actividades estén prohibidas o restringidas.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">4. Funcionamiento de los sorteos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Los sorteos se realizan mediante algoritmos públicos y contratos inteligentes verificables en la red TRON. Las probabilidades de ganar y las reglas del juego están disponibles públicamente y son auditables.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">5. Boletos y recargas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Los boletos se adquieren exclusivamente con saldo USDT en tu cuenta. Las recargas deben realizarse únicamente en la red TRON (TRC-20). No nos hacemos responsables por depósitos realizados en otras redes.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">6. Premios y retiros</h3>
                <p className="text-gray-700 leading-relaxed">
                  Todos los premios son distribuidos automáticamente a través de contratos inteligentes. Los retiros están sujetos a tarifas de red y tiempos de procesamiento claramente definidos en la plataforma.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">7. Uso adecuado de la plataforma</h3>
                <p className="text-gray-700 leading-relaxed">
                  Está prohibido cualquier intento de manipulación, uso fraudulento, creación de múltiples cuentas con fines abusivos, o cualquier actividad que comprometa la integridad del sistema.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">8. Limitación de responsabilidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  LottoCoin no garantiza resultados específicos ni ganancias. La participación en sorteos conlleva riesgos inherentes y cada usuario participa bajo su propia responsabilidad y criterio.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">9. Cambios en los términos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Nos reservamos el derecho de actualizar estos términos en cualquier momento. Te notificaremos de cambios importantes a través de la aplicación o por correo electrónico.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">10. Contacto legal</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para consultas legales o disputas relacionadas con estos términos, puedes contactarnos en: <strong>legal@lottocoin.com</strong>
                </p>
              </section>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Última actualización: Enero 2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
