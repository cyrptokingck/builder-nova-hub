import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCheck, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Notification {
  id: string;
  type: "draw" | "win" | "promotion" | "account" | "system";
  title: string;
  message: string;
  timestamp: string;
  isRead: boolean;
  priority: "high" | "medium" | "low";
}

export default function Notificaciones() {
  const { toast } = useToast();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "win",
      title: "¡Resultados disponibles! Revisa si ganaste",
      message: "Ya están disponibles los resultados del sorteo del 25 de junio. Revisa tus boletos para ver si ganaste algún premio.",
      timestamp: "2024-01-15T18:30:00Z",
      isRead: false,
      priority: "high"
    },
    {
      id: "2",
      type: "draw",
      title: "Recordatorio: Faltan 3 horas para que cierre el sorteo",
      message: "El sorteo cierra hoy a las 8:00 PM. Asegúrate de comprar tus boletos antes de que termine el tiempo.",
      timestamp: "2024-01-15T15:00:00Z",
      isRead: false,
      priority: "high"
    },
    {
      id: "3",
      type: "win",
      title: "Notificación personalizada: ¡Has ganado un premio!",
      message: "¡Felicidades! Tu boleto #12345 ha ganado $800 USDT en el sorteo de esta semana. El premio ha sido depositado automáticamente en tu cuenta.",
      timestamp: "2024-01-14T10:00:00Z",
      isRead: false,
      priority: "high"
    },
    {
      id: "4",
      type: "draw",
      title: "Aviso de nuevo sorteo disponible",
      message: "Un nuevo sorteo está disponible con un premio acumulado de 45,000,000 USDT. ¡Compra tus boletos ahora!",
      timestamp: "2024-01-13T14:20:00Z",
      isRead: true,
      priority: "medium"
    },
    {
      id: "5",
      type: "account",
      title: "Confirmación de depósito acreditado",
      message: "Tu depósito de $500 USDT ha sido acreditado exitosamente en tu cuenta. Tu nuevo saldo es $1,202.365 USDT.",
      timestamp: "2024-01-12T09:00:00Z",
      isRead: true,
      priority: "low"
    },
    {
      id: "6",
      type: "draw",
      title: "Confirmación de compra de ticket",
      message: "Has comprado exitosamente 2 boletos para el sorteo del 25 de agosto. Números: 08-12-19-34-45-49 y Quick Pick.",
      timestamp: "2024-01-10T16:00:00Z",
      isRead: true,
      priority: "low"
    },
    {
      id: "7",
      type: "promotion",
      title: "Sorteo especial disponible (por fechas festivas)",
      message: "¡Sorteo especial de fin de año! Premio doble y boletos con 50% de descuento por tiempo limitado.",
      timestamp: "2024-01-08T12:00:00Z",
      isRead: true,
      priority: "medium"
    },
    {
      id: "8",
      type: "account",
      title: "Estado de retiro: En proceso",
      message: "Tu solicitud de retiro de $200 USDT está siendo procesada. Recibirás los fondos en 24-48 horas.",
      timestamp: "2024-01-07T14:30:00Z",
      isRead: true,
      priority: "medium"
    }
  ]);

  const filters = [
    { id: "all", name: "Todas", count: notifications.length },
    { id: "unread", name: "No leídas", count: notifications.filter(n => !n.isRead).length },
    { id: "draw", name: "Sorteos", count: notifications.filter(n => n.type === "draw").length },
    { id: "win", name: "Premios", count: notifications.filter(n => n.type === "win").length },
    { id: "account", name: "Wallet y Retiros", count: notifications.filter(n => n.type === "account").length },
    { id: "promotion", name: "Promociones", count: notifications.filter(n => n.type === "promotion").length },
  ];

  const getFilteredNotifications = () => {
    switch (selectedFilter) {
      case "unread":
        return notifications.filter(n => !n.isRead);
      case "draw":
      case "win":
      case "account":
      case "promotion":
        return notifications.filter(n => n.type === selectedFilter);
      default:
        return notifications;
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    toast({
      title: "¡Listo!",
      description: "Todas las notificaciones han sido marcadas como leídas",
    });
  };

  const deleteNotification = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications(notifications.filter(n => n.id !== id));
    toast({
      title: "Notificación eliminada",
      description: "La notificación ha sido eliminada",
    });
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "win": return "🏆";
      case "draw": return "🎱";
      case "promotion": return "🎁";
      case "account": return "💰";
      case "system": return "⚙️";
      default: return "📢";
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) {
      return "Hoy";
    } else if (diffDays === 2) {
      return "Ayer";
    } else if (diffDays <= 7) {
      return `Hace ${diffDays - 1} días`;
    } else {
      return date.toLocaleDateString("es-ES", { 
        day: "numeric", 
        month: "short" 
      });
    }
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const filteredNotifications = getFilteredNotifications();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link to="/dashboard" className="flex items-center text-black hover:text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-black">Notificaciones</h1>
          {unreadCount > 0 && (
            <Badge className="bg-red-500 text-white text-xs">
              {unreadCount}
            </Badge>
          )}
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={markAllAsRead}
          className="text-[#CAF206] hover:text-[#CAF206]/80"
        >
          <CheckCheck className="w-4 h-4 mr-1" />
          Marcar todas
        </Button>
      </div>

      {/* Filters */}
      <div className="px-6 py-4 border-b">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={selectedFilter === filter.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(filter.id)}
              className={`flex-shrink-0 ${
                selectedFilter === filter.id
                  ? "bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
                  : "border-gray-300 text-black hover:bg-gray-50"
              }`}
            >
              {filter.name}
              {filter.count > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs bg-gray-100 text-gray-700"
                >
                  {filter.count}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {filteredNotifications.length === 0 ? (
          <Card>
            <CardContent className="text-center py-16">
              <div className="text-6xl mb-4">📭</div>
              <h3 className="text-lg font-medium text-black mb-2">No hay notificaciones</h3>
              <p className="text-gray-500">
                {selectedFilter === "all" 
                  ? "No tienes notificaciones en este momento"
                  : `No tienes notificaciones de "${filters.find(f => f.id === selectedFilter)?.name}"`
                }
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {filteredNotifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`cursor-pointer transition-all hover:shadow-md ${
                  !notification.isRead 
                    ? "border-[#CAF206] bg-[#CAF206]/5" 
                    : "border-gray-200"
                }`}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="text-2xl flex-shrink-0">
                        {getNotificationIcon(notification.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className={`font-medium ${
                            !notification.isRead ? "font-semibold text-black" : "text-black"
                          }`}>
                            {notification.title}
                          </h3>
                          {!notification.isRead && (
                            <div className="w-2 h-2 bg-[#CAF206] rounded-full flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500">
                          {formatTimestamp(notification.timestamp)}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => deleteNotification(notification.id, e)}
                      className="text-gray-400 hover:text-red-500 flex-shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
