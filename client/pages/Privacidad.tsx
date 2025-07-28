import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link to="/mi-perfil" className="flex items-center text-black hover:text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-black">Política de Privacidad</h1>
        <div className="w-6" />
      </div>

      <div className="p-6">
        <Card>
          <CardContent className="p-8 space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-black mb-2">Política de Privacidad</h2>
              <p className="text-gray-600">
                En LottoCoin valoramos tu privacidad y nos comprometemos a proteger tu información personal.
              </p>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-lg font-semibold text-black mb-3">1. Datos que recopilamos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Recopilamos únicamente la información necesaria para brindarte nuestros servicios:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Dirección de correo electrónico</li>
                  <li>Contraseña encriptada (nunca almacenamos contraseñas en texto plano)</li>
                  <li>Dirección TRC-20 (opcional, solo si decides proporcionarla)</li>
                  <li>Dirección IP para seguridad y prevención de fraudes</li>
                  <li>Datos de uso de la aplicación para mejorar nuestros servicios</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">2. Cómo usamos tus datos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Crear y mantener tu cuenta de usuario</li>
                  <li>Enviarte notificaciones importantes sobre tu cuenta y sorteos</li>
                  <li>Mostrarte tu historial de participación y transacciones</li>
                  <li>Procesar depósitos, retiros y compras de boletos</li>
                  <li>Proporcionar soporte técnico cuando lo necesites</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">3. Con quién compartimos la información</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>No vendemos tus datos personales.</strong> Solo compartimos información con proveedores técnicos de confianza y únicamente cuando es estrictamente necesario para prestar nuestros servicios (por ejemplo, procesadores de pago o servicios de infraestructura en la nube).
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">4. Seguridad de los datos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Implementamos medidas de seguridad técnicas y organizativas apropiadas, incluyendo cifrado de datos, autenticación segura y mejores prácticas de la industria para proteger tu información contra acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">5. Tus derechos</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Tienes derecho a:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Acceder a la información que tenemos sobre ti</li>
                  <li>Modificar o actualizar tus datos personales</li>
                  <li>Solicitar la eliminación de tu cuenta y datos asociados</li>
                  <li>Exportar tus datos en un formato legible</li>
                  <li>Retirar tu consentimiento para ciertos usos de datos</li>
                </ul>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">6. Cookies y analítica</h3>
                <p className="text-gray-700 leading-relaxed">
                  Podemos usar cookies y herramientas de analítica para mejorar tu experiencia de usuario, detectar errores y optimizar el rendimiento de la plataforma. Puedes controlar las cookies a través de la configuración de tu navegador.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">7. Retención de datos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos para los cuales fue recopilada, incluyendo requisitos legales, contables o de informes.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">8. Cambios en esta política</h3>
                <p className="text-gray-700 leading-relaxed">
                  Te notificaremos cualquier cambio importante en esta política de privacidad a través de la aplicación o por correo electrónico con al menos 30 días de anticipación.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-black mb-3">9. Contacto de privacidad</h3>
                <p className="text-gray-700 leading-relaxed">
                  Para cualquier consulta, solicitud o reclamo relacionado con tu privacidad y datos personales, puedes contactarnos en: <strong>privacidad@lottocoin.com</strong>
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
