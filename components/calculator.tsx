"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Leaf, Package, TrendingUp } from "lucide-react"

const products = [
  {
    id: "agroabono",
    name: "AGROABONO",
    ratePerHectare: 3, // toneladas por hectárea
    unit: "toneladas",
    description: "Compost tradicional",
  },
  {
    id: "agroabono-granulado",
    name: "AGROABONO Granulado",
    ratePerHectare: 2,
    unit: "toneladas",
    description: "Versión granulada",
  },
  {
    id: "avicompost",
    name: "AVICOMPOST",
    ratePerHectare: 1.5,
    unit: "toneladas",
    description: "Alta concentración",
  },
]

const cropTypes = [
  { id: "hortalizas", name: "Hortalizas", multiplier: 1.2 },
  { id: "frutales", name: "Frutales", multiplier: 1.0 },
  { id: "cereales", name: "Cereales", multiplier: 0.8 },
  { id: "pastos", name: "Pastos", multiplier: 0.7 },
  { id: "cafe", name: "Café", multiplier: 1.1 },
  { id: "flores", name: "Flores", multiplier: 1.3 },
  { id: "otros", name: "Otros cultivos", multiplier: 1.0 },
]

export function ProductCalculator() {
  const [area, setArea] = useState<string>("")
  const [areaUnit, setAreaUnit] = useState<string>("hectareas")
  const [productId, setProductId] = useState<string>("")
  const [cropType, setCropType] = useState<string>("")
  const [result, setResult] = useState<{
    amount: number
    product: string
    unit: string
  } | null>(null)

  const calculate = () => {
    if (!area || !productId || !cropType) return

    const product = products.find((p) => p.id === productId)
    const crop = cropTypes.find((c) => c.id === cropType)
    if (!product || !crop) return

    let areaInHectares = parseFloat(area)
    
    // Convert to hectares if needed
    if (areaUnit === "metros") {
      areaInHectares = areaInHectares / 10000
    } else if (areaUnit === "fanegadas") {
      areaInHectares = areaInHectares * 0.64 // 1 fanegada ≈ 0.64 hectáreas en Colombia
    } else if (areaUnit === "plazas") {
      areaInHectares = areaInHectares * 0.64 // 1 plaza ≈ 6400 m²
    }

    const amount = areaInHectares * product.ratePerHectare * crop.multiplier

    setResult({
      amount: Math.round(amount * 100) / 100,
      product: product.name,
      unit: product.unit,
    })
  }

  const reset = () => {
    setArea("")
    setAreaUnit("hectareas")
    setProductId("")
    setCropType("")
    setResult(null)
  }

  return (
    <section id="calculadora" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Calculator className="h-4 w-4" />
            Herramienta de cálculo
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Calculadora de Producto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Calcule la cantidad aproximada de abono orgánico que necesita según la extensión de su cultivo
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Leaf className="h-5 w-5 text-primary" />
                Ingrese los datos de su cultivo
              </CardTitle>
              <CardDescription>
                Complete los campos para obtener una estimación de la cantidad de producto requerida
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Input Fields */}
                <div className="space-y-5">
                  {/* Area Input */}
                  <div className="space-y-2">
                    <Label htmlFor="area">Extensión del terreno</Label>
                    <div className="flex gap-2">
                      <Input
                        id="area"
                        type="number"
                        placeholder="Ej: 5"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="flex-1"
                        min="0"
                        step="0.1"
                      />
                      <Select value={areaUnit} onValueChange={setAreaUnit}>
                        <SelectTrigger className="w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hectareas">Hectáreas</SelectItem>
                          <SelectItem value="fanegadas">Fanegadas</SelectItem>
                          <SelectItem value="plazas">Plazas</SelectItem>
                          <SelectItem value="metros">m²</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Product Select */}
                  <div className="space-y-2">
                    <Label htmlFor="product">Producto</Label>
                    <Select value={productId} onValueChange={setProductId}>
                      <SelectTrigger id="product">
                        <SelectValue placeholder="Seleccione un producto" />
                      </SelectTrigger>
                      <SelectContent>
                        {products.map((product) => (
                          <SelectItem key={product.id} value={product.id}>
                            <span className="flex items-center gap-2">
                              {product.name}
                              <span className="text-muted-foreground text-xs">
                                ({product.description})
                              </span>
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Crop Type Select */}
                  <div className="space-y-2">
                    <Label htmlFor="crop">Tipo de cultivo</Label>
                    <Select value={cropType} onValueChange={setCropType}>
                      <SelectTrigger id="crop">
                        <SelectValue placeholder="Seleccione tipo de cultivo" />
                      </SelectTrigger>
                      <SelectContent>
                        {cropTypes.map((crop) => (
                          <SelectItem key={crop.id} value={crop.id}>
                            {crop.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={calculate}
                      className="flex-1"
                      disabled={!area || !productId || !cropType}
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Calcular
                    </Button>
                    <Button variant="outline" onClick={reset} className="bg-transparent">
                      Limpiar
                    </Button>
                  </div>
                </div>

                {/* Result Display */}
                <div className="flex items-center justify-center">
                  {result ? (
                    <div className="w-full p-6 rounded-xl bg-primary/5 border border-primary/20 text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                        <Package className="h-7 w-7" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Cantidad recomendada de
                      </p>
                      <p className="font-semibold text-foreground mb-3">
                        {result.product}
                      </p>
                      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                        {result.amount.toLocaleString("es-CO")}
                      </div>
                      <p className="text-lg text-muted-foreground mb-4">
                        {result.unit}
                      </p>
                      <div className="pt-4 border-t border-primary/20">
                        <Button asChild className="w-full">
                          <a href="#contacto">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Solicitar cotización
                          </a>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full p-6 rounded-xl bg-muted/50 border border-border text-center">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-muted text-muted-foreground mb-4">
                        <Calculator className="h-7 w-7" />
                      </div>
                      <p className="text-muted-foreground">
                        Complete los campos y presione calcular para ver la cantidad recomendada
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-xs text-muted-foreground mt-6 text-center">
                * Los valores son aproximados y pueden variar según las condiciones específicas del suelo y el cultivo. 
                Contáctenos para una asesoría personalizada.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
