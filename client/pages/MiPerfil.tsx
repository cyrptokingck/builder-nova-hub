import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Edit2,
  Save,
  X,
  User,
  Shield,
  CreditCard,
  FileText,
  HelpCircle,
  Globe,
  LogOut,
  Trash2,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserProfile {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;
  notifications: {
    draws: boolean;
    winnings: boolean;
    promotions: boolean;
    account: boolean;
  };
}

export default function MiPerfil() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: "Manuel",
    lastName: "Campos P",
    email: "manuel.g.campos.p@gmail.com",
    phone: "+34 666 444 555",
    language: "es",
    notifications: {
      draws: true,
      winnings: true,
      promotions: false,
      account: true,
    },
  });

  const [editedProfile, setEditedProfile] = useState<UserProfile>(profile);
  const [stats] = useState({
    prizesWon: 3,
    totalWinnings: 15236.598,
    ticketsPurchased: 164,
  });

  const handleSaveProfile = () => {
    setProfile(editedProfile);
    setIsEditing(false);
    toast({
      title: "¡Perfil actualizado!",
      description:
        "Tus datos se han guardado correctamente. Puedes seguir usando la app con normalidad.",
    });
  };

  const handleCancelEdit = () => {
    setEditedProfile(profile);
    setIsEditing(false);
  };

  const handleNotificationChange = (
    key: keyof UserProfile["notifications"],
  ) => {
    setEditedProfile({
      ...editedProfile,
      notifications: {
        ...editedProfile.notifications,
        [key]: !editedProfile.notifications[key],
      },
    });
  };

  const handleLogout = () => {
    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    });
    navigate("/landing");
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Función en desarrollo",
      description: "La eliminación de cuenta estará disponible próximamente",
      variant: "destructive",
    });
  };

  const menuItems = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Cuenta y Seguridad",
      action: () =>
        toast({ title: "Próximamente", description: "Función en desarrollo" }),
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Métodos de pago",
      action: () => navigate("/mi-saldo"),
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Mis boletos",
      action: () => navigate("/dashboard"),
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Términos y Condiciones de Uso",
      action: () => navigate("/terminos"),
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Política de Privacidad",
      action: () => navigate("/privacidad"),
    },
    {
      icon: <HelpCircle className="w-5 h-5" />,
      title: "Centro de ayuda / Soporte",
      action: () =>
        toast({ title: "Próximamente", description: "Función en desarrollo" }),
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link
          to="/dashboard"
          className="flex items-center text-black hover:text-gray-600"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-black">Mi Perfil</h1>
        {!isEditing ? (
          <Button
            variant="ghost"
            onClick={() => setIsEditing(true)}
            className="text-[#CAF206]"
          >
            <Edit2 className="w-4 h-4 mr-1" />
            Editar
          </Button>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={handleCancelEdit}>
              <X className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              onClick={handleSaveProfile}
              className="bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
            >
              <Save className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>

      <div className="p-6 space-y-6">
        {/* Profile Card */}
        <Card className="border-2 border-[#CAF206]">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-[#CAF206] rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-black">
                  {profile.name[0]}
                  {profile.lastName[0]}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-black">
                  {profile.name} {profile.lastName}
                </h2>
                <p className="text-gray-600">{profile.email}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-[#CAF206]">
                  {stats.prizesWon}
                </p>
                <p className="text-sm text-gray-600">Premios ganados</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#CAF206]">
                  ${stats.totalWinnings.toLocaleString()}
                </p>
                <p className="text-sm text-gray-600">Total ganado en USDT</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#CAF206]">
                  {stats.ticketsPurchased}
                </p>
                <p className="text-sm text-gray-600">Boletos comprados</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Información Personal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre</Label>
                {isEditing ? (
                  <Input
                    id="name"
                    value={editedProfile.name}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        name: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="py-2 text-black">{profile.name}</p>
                )}
              </div>
              <div>
                <Label htmlFor="lastName">Apellido</Label>
                {isEditing ? (
                  <Input
                    id="lastName"
                    value={editedProfile.lastName}
                    onChange={(e) =>
                      setEditedProfile({
                        ...editedProfile,
                        lastName: e.target.value,
                      })
                    }
                  />
                ) : (
                  <p className="py-2 text-black">{profile.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="email">Tu email</Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={editedProfile.email}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      email: e.target.value,
                    })
                  }
                />
              ) : (
                <p className="py-2 text-black">{profile.email}</p>
              )}
            </div>

            <div>
              <Label htmlFor="phone">Teléfono móvil</Label>
              {isEditing ? (
                <Input
                  id="phone"
                  value={editedProfile.phone}
                  onChange={(e) =>
                    setEditedProfile({
                      ...editedProfile,
                      phone: e.target.value,
                    })
                  }
                />
              ) : (
                <p className="py-2 text-black">{profile.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="language">Idioma</Label>
              {isEditing ? (
                <Select
                  value={editedProfile.language}
                  onValueChange={(value) =>
                    setEditedProfile({ ...editedProfile, language: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">Español</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              ) : (
                <p className="py-2 text-black">
                  {profile.language === "es" ? "Español" : "English"}
                </p>
              )}
            </div>

            {isEditing && (
              <Button
                className="w-full bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
                onClick={handleSaveProfile}
              >
                Actualizar datos
              </Button>
            )}
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Notificaciones</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Sorteos</p>
                <p className="text-sm text-gray-500">
                  Recordatorio: Faltan X horas para que cierre el sorteo
                </p>
              </div>
              <Switch
                checked={editedProfile.notifications.draws}
                onCheckedChange={() => handleNotificationChange("draws")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Premios ganados</p>
                <p className="text-sm text-gray-500">
                  Notificación personalizada: ¡Has ganado un premio!
                </p>
              </div>
              <Switch
                checked={editedProfile.notifications.winnings}
                onCheckedChange={() => handleNotificationChange("winnings")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Promociones</p>
                <p className="text-sm text-gray-500">
                  Ofertas especiales y descuentos
                </p>
              </div>
              <Switch
                checked={editedProfile.notifications.promotions}
                onCheckedChange={() => handleNotificationChange("promotions")}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-black">Wallet y Retiros</p>
                <p className="text-sm text-gray-500">
                  Confirmación de depósito acreditado
                </p>
              </div>
              <Switch
                checked={editedProfile.notifications.account}
                onCheckedChange={() => handleNotificationChange("account")}
              />
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer ${index !== menuItems.length - 1 ? "border-b" : ""}`}
                onClick={item.action}
              >
                <div className="flex items-center space-x-3">
                  {item.icon}
                  <span className="text-black">{item.title}</span>
                </div>
                <div className="text-gray-400">→</div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security Note */}
        <Card className="border-[#CAF206]/30 bg-[#CAF206]/5">
          <CardContent className="p-4">
            <p className="text-sm text-black">
              <Shield className="w-4 h-4 inline mr-2" />
              Tu cuenta está protegida por tecnología blockchain. Solo tú
              controlas tus fondos.
            </p>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200">
          <CardContent className="p-6 space-y-4">
            <Button
              variant="outline"
              className="w-full border-gray-300 text-black hover:bg-gray-50"
              onClick={handleLogout}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Cerrar sesión
            </Button>

            <Button
              variant="outline"
              className="w-full border-red-300 text-red-600 hover:bg-red-50"
              onClick={handleDeleteAccount}
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Eliminar cuenta
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
