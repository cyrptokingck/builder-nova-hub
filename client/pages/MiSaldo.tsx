import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Plus,
  Minus,
  Copy,
  CreditCard,
  Wallet,
  TrendingUp,
  TrendingDown,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Transaction {
  id: string;
  type: "deposit" | "withdrawal" | "ticket" | "win";
  amount: number;
  description: string;
  date: string;
  status: "completed" | "pending" | "failed";
}

export default function MiSaldo() {
  const { toast } = useToast();
  const [balance] = useState(1202.365);
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [withdrawType, setWithdrawType] = useState("standard");
  const [depositMethod, setDepositMethod] = useState("crypto");

  const tronAddress = "TPxgRCEFxZqKxJrpoUAFzW3YrBqJxsr3NF";

  const [transactions] = useState<Transaction[]>([
    {
      id: "1",
      type: "deposit",
      amount: 500,
      description: "Depósito con tarjeta",
      date: "01 Ago",
      status: "completed",
    },
    {
      id: "2",
      type: "ticket",
      amount: -50,
      description: "Compra de boleto #12345",
      date: "01 Ago",
      status: "completed",
    },
    {
      id: "3",
      type: "win",
      amount: 235,
      description: "Premio - Sorteo #456",
      date: "01 Ago",
      status: "completed",
    },
    {
      id: "4",
      type: "withdrawal",
      amount: -200,
      description: "Retiro a wallet externa",
      date: "01 Ago",
      status: "pending",
    },
  ]);

  const copyAddress = () => {
    navigator.clipboard.writeText(tronAddress);
    toast({
      title: "¡Copiado!",
      description: "Dirección TRC-20 copiada al portapapeles",
    });
  };

  const handleDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      toast({
        title: "Error",
        description: "Ingresa un monto válido",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Depósito iniciado",
      description: `Depósito de $${depositAmount} USDT en proceso`,
    });
    setDepositAmount("");
  };

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);

    if (!withdrawAmount || amount <= 0) {
      toast({
        title: "Error",
        description: "Ingresa un monto válido",
        variant: "destructive",
      });
      return;
    }

    if (amount < 10) {
      toast({
        title: "Error",
        description: "El monto mínimo de retiro es $10 USDT",
        variant: "destructive",
      });
      return;
    }

    if (amount > balance) {
      toast({
        title: "Error",
        description: "Saldo insuficiente",
        variant: "destructive",
      });
      return;
    }

    if (!withdrawAddress) {
      toast({
        title: "Error",
        description: "Ingresa una dirección TRC-20 válida",
        variant: "destructive",
      });
      return;
    }

    const fees = {
      standard: 0.5,
      express: 1,
      instant: 5,
    };

    const fee = fees[withdrawType as keyof typeof fees];
    const finalAmount = amount - fee;

    toast({
      title: "¡Retiro solicitado!",
      description: `Recibirás $${finalAmount} USDT en tu wallet externa`,
    });

    setWithdrawAmount("");
    setWithdrawAddress("");
  };

  const getTransactionIcon = (type: string) => {
    switch (type) {
      case "deposit":
        return <TrendingUp className="w-5 h-5 text-green-500" />;
      case "withdrawal":
        return <TrendingDown className="w-5 h-5 text-red-500" />;
      case "ticket":
        return <Minus className="w-5 h-5 text-red-500" />;
      case "win":
        return <Plus className="w-5 h-5 text-green-500" />;
      default:
        return <Wallet className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "failed":
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completado";
      case "pending":
        return "Pendiente";
      case "failed":
        return "Fallido";
      default:
        return status;
    }
  };

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
        <h1 className="text-xl font-bold text-black">Mi Saldo</h1>
        <div className="w-6" />
      </div>

      <div className="p-6 space-y-6">
        {/* Balance Card */}
        <Card className="border-2 border-[#CAF206] bg-gradient-to-r from-[#CAF206]/10 to-[#CAF206]/5">
          <CardContent className="text-center p-8">
            <p className="text-gray-600 mb-2">Saldo disponible</p>
            <h2 className="text-4xl font-bold text-black mb-6">
              ${balance.toLocaleString()} USDT
            </h2>
            <div className="flex gap-4 justify-center">
              <Button className="bg-[#CAF206] text-black hover:bg-[#CAF206]/90">
                <Plus className="w-4 h-4 mr-2" />
                Recargar
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-black hover:bg-gray-50"
              >
                <Minus className="w-4 h-4 mr-2" />
                Retirar
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Deposit/Withdraw Tabs */}
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="deposit" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="deposit">Recargar saldo</TabsTrigger>
                <TabsTrigger value="withdraw">Retirar saldo</TabsTrigger>
              </TabsList>

              <TabsContent value="deposit" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="deposit-method">Método de depósito</Label>
                    <Select
                      value={depositMethod}
                      onValueChange={setDepositMethod}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="crypto">
                          <div className="flex items-center">
                            <Wallet className="w-4 h-4 mr-2" />
                            Depósito en la cadena (USDT TRC-20)
                          </div>
                        </SelectItem>
                        <SelectItem value="card">
                          <div className="flex items-center">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Tarjeta (Visa/Mastercard)
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {depositMethod === "crypto" && (
                    <Card className="border-[#CAF206]/30 bg-[#CAF206]/5">
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-2">
                          Tu dirección TRC-20 personal:
                        </h4>
                        <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                          <code className="flex-1 text-sm font-mono break-all">
                            {tronAddress}
                          </code>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={copyAddress}
                          >
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-2">
                          <strong>Importante:</strong> Solo se aceptan depósitos
                          USDT en red TRON (TRC-20). Cualquier otro token será
                          perdido.
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {depositMethod === "card" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="deposit-amount">
                          Monto a comprar (USD)
                        </Label>
                        <Input
                          id="deposit-amount"
                          type="number"
                          placeholder="0"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                        />
                      </div>

                      <div className="grid grid-cols-4 gap-2">
                        {[10, 50, 100, 500].map((amount) => (
                          <Button
                            key={amount}
                            variant="outline"
                            size="sm"
                            onClick={() => setDepositAmount(amount.toString())}
                            className="border-[#CAF206] text-[#CAF206] hover:bg-[#CAF206] hover:text-black"
                          >
                            ${amount}
                          </Button>
                        ))}
                      </div>

                      <Button
                        className="w-full bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
                        onClick={handleDeposit}
                      >
                        Comprar USDT
                      </Button>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="withdraw" className="space-y-4 mt-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="withdraw-address">
                      Wallet externa (TRC-20)
                    </Label>
                    <Input
                      id="withdraw-address"
                      placeholder="TXabc123..."
                      value={withdrawAddress}
                      onChange={(e) => setWithdrawAddress(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="withdraw-amount">Importe (USDT)</Label>
                    <Input
                      id="withdraw-amount"
                      type="number"
                      placeholder="Mínimo 10"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Tipo de retiro</Label>
                    <Select
                      value={withdrawType}
                      onValueChange={setWithdrawType}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">
                          <div className="space-y-1">
                            <div className="font-medium">Standard</div>
                            <div className="text-sm text-gray-500">
                              24-48 hrs • Coste: 0.50 USDT
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="express">
                          <div className="space-y-1">
                            <div className="font-medium">Express</div>
                            <div className="text-sm text-gray-500">
                              6 hrs • Coste: 1.00 USDT
                            </div>
                          </div>
                        </SelectItem>
                        <SelectItem value="instant">
                          <div className="space-y-1">
                            <div className="font-medium">Instant</div>
                            <div className="text-sm text-gray-500">
                              10 min • Coste: 5.00 USDT
                            </div>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {withdrawAmount && (
                    <Card className="border-[#CAF206]/30 bg-[#CAF206]/5">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <span>Recibes:</span>
                          <span className="font-bold">
                            $
                            {(
                              parseFloat(withdrawAmount) -
                              (withdrawType === "standard"
                                ? 0.5
                                : withdrawType === "express"
                                  ? 1
                                  : 5)
                            ).toFixed(2)}{" "}
                            USDT
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <Button
                    className="w-full bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
                    onClick={handleWithdraw}
                  >
                    Retirar
                  </Button>

                  <p className="text-xs text-gray-500">
                    <strong>Importante:</strong> Todos los retiros usan energía
                    de red (TRON Energy Rental). Los fees cubren estos costes.
                    Solo se aceptan direcciones TRC-20.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card>
          <CardHeader>
            <CardTitle className="text-black">Historial</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {transactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div className="flex items-center gap-3">
                  {getTransactionIcon(transaction.type)}
                  <div>
                    <p className="font-medium text-black">
                      {transaction.description}
                    </p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount)} USDT
                  </p>
                  <div className="flex items-center gap-1 justify-end">
                    {getStatusIcon(transaction.status)}
                    <span className="text-xs text-gray-500">
                      {getStatusText(transaction.status)}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            <div className="text-center text-gray-500 text-sm pt-4">
              No hay más datos
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
