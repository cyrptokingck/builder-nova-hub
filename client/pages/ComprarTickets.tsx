import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trash2, Shuffle, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ComprarTickets() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [quickPicks, setQuickPicks] = useState<number[][]>([]);
  const [balance] = useState(1202.365);

  // Generate numbers 1-49 for the lottery
  const lotteryNumbers = Array.from({ length: 49 }, (_, i) => i + 1);
  const ticketPrice = 50;

  const toggleNumber = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, number]);
    } else {
      toast({
        title: "Máximo alcanzado",
        description: "Solo puedes seleccionar 6 números por boleto",
        variant: "destructive",
      });
    }
  };

  const generateQuickPick = () => {
    const numbers = [];
    while (numbers.length < 6) {
      const randomNum = Math.floor(Math.random() * 49) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    return numbers.sort((a, b) => a - b);
  };

  const addQuickPick = () => {
    if (quickPicks.length < 5) {
      setQuickPicks([...quickPicks, generateQuickPick()]);
    } else {
      toast({
        title: "Máximo alcanzado",
        description: "Solo puedes generar hasta 5 Quick Picks",
        variant: "destructive",
      });
    }
  };

  const removeQuickPick = (index: number) => {
    setQuickPicks(quickPicks.filter((_, i) => i !== index));
  };

  const clearSelection = () => {
    setSelectedNumbers([]);
  };

  const getTotalCost = () => {
    const manualTickets = selectedNumbers.length === 6 ? 1 : 0;
    const totalTickets = manualTickets + quickPicks.length;
    return totalTickets * ticketPrice;
  };

  const getTotalTickets = () => {
    const manualTickets = selectedNumbers.length === 6 ? 1 : 0;
    return manualTickets + quickPicks.length;
  };

  const handleBuyTickets = () => {
    const totalCost = getTotalCost();
    
    if (totalCost === 0) {
      toast({
        title: "Error",
        description: "Selecciona al menos 6 números o genera un Quick Pick",
        variant: "destructive",
      });
      return;
    }

    if (totalCost > balance) {
      toast({
        title: "Saldo insuficiente",
        description: "No tienes suficiente saldo para esta compra",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Boletos comprados!",
      description: `${getTotalTickets()} boleto(s) comprado(s) por $${totalCost} USDT`,
    });

    // Navigate back to dashboard after purchase
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b">
        <Link to="/dashboard" className="flex items-center text-black hover:text-gray-600">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-black">Comprar boletos</h1>
        <div className="w-6" />
      </div>

      <div className="p-6 space-y-6 pb-32">
        {/* Price Info */}
        <Card className="border-2 border-[#CAF206]">
          <CardContent className="text-center p-6">
            <h2 className="text-lg text-gray-600 mb-2">Precio por boleto</h2>
            <div className="text-3xl font-bold text-[#CAF206] mb-2">${ticketPrice} USDT</div>
            <p className="text-sm text-gray-500">Selecciona 6 números del 1 al 49</p>
          </CardContent>
        </Card>

        {/* Current Draw Info */}
        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-black">Próximo sorteo</h3>
                <p className="text-sm text-gray-500">Thu, 25 Ago 2025</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Premio acumulado</p>
                <p className="text-xl font-bold text-[#CAF206]">45,000,000 USDT</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500">Finaliza en</p>
              <p className="text-lg font-bold text-black">3d 04h 12m</p>
            </div>
          </CardContent>
        </Card>

        {/* Manual Selection */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-black">Selección manual</CardTitle>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={clearSelection}
                className="text-[#CAF206] hover:text-[#CAF206]/80"
              >
                <RotateCcw className="w-4 h-4 mr-1" />
                Limpiar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              {selectedNumbers.length}/6 números seleccionados
            </p>
            
            {/* Numbers Grid */}
            <div className="grid grid-cols-7 gap-2">
              {lotteryNumbers.map((number) => (
                <Button
                  key={number}
                  variant={selectedNumbers.includes(number) ? "default" : "outline"}
                  size="sm"
                  className={`h-12 w-12 p-0 ${
                    selectedNumbers.includes(number)
                      ? "bg-[#CAF206] text-black hover:bg-[#CAF206]/90 border-[#CAF206]"
                      : "border-gray-300 text-black hover:bg-gray-50"
                  }`}
                  onClick={() => toggleNumber(number)}
                  disabled={!selectedNumbers.includes(number) && selectedNumbers.length >= 6}
                >
                  {number}
                </Button>
              ))}
            </div>

            {/* Selected Numbers Display */}
            {selectedNumbers.length === 6 && (
              <Card className="bg-[#CAF206]/10 border-[#CAF206]">
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-black mb-2">Números seleccionados:</p>
                  <div className="flex gap-2">
                    {selectedNumbers.sort((a, b) => a - b).map((number) => (
                      <Badge key={number} className="bg-[#CAF206] text-black hover:bg-[#CAF206]/90">
                        {number}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>

        {/* Quick Pick */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-black">Quick Pick</CardTitle>
              <Button 
                size="sm" 
                onClick={addQuickPick}
                disabled={quickPicks.length >= 5}
                className="bg-[#CAF206] text-black hover:bg-[#CAF206]/90"
              >
                <Shuffle className="w-4 h-4 mr-1" />
                Generar
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-500">
              Genera números aleatorios automáticamente (máximo 5)
            </p>

            {quickPicks.map((numbers, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {numbers.map((number, numIndex) => (
                        <Badge key={numIndex} className="bg-[#CAF206] text-black">
                          {number}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeQuickPick(index)}
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Balance Info */}
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Tu saldo actual:</span>
              <span className="font-bold text-black">${balance.toLocaleString()} USDT</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-6 space-y-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500">Total a pagar:</p>
            <p className="text-2xl font-bold text-[#CAF206]">${getTotalCost()} USDT</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">Boletos:</p>
            <p className="text-lg font-bold text-black">{getTotalTickets()}</p>
          </div>
        </div>
        
        <Button 
          className="w-full bg-[#CAF206] text-black hover:bg-[#CAF206]/90 h-12"
          onClick={handleBuyTickets}
          disabled={getTotalCost() === 0}
        >
          Comprar boletos
        </Button>
        
        <p className="text-xs text-gray-400 text-center">
          Tu participación está sujeta a reglas públicas. No se garantizan premios. Ver términos del sorteo
        </p>
      </div>
    </div>
  );
}
