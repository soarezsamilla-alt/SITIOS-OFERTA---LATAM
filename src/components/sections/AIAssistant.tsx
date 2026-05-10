
'use client';

import { useState } from 'react';
import { recommendProject, type ProjectRecommendationOutput } from '@/ai/flows/project-recommendation-flow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, CheckCircle2 } from 'lucide-react';

export default function AIAssistant() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProjectRecommendationOutput | null>(null);
  const [formData, setFormData] = useState({
    landSize: '',
    location: '',
    climate: 'Tropical Húmedo',
    desiredAgriculturalOutput: 'café'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const recommendation = await recommendProject({
        landSize: parseFloat(formData.landSize),
        location: formData.location,
        climate: formData.climate,
        desiredAgriculturalOutput: formData.desiredAgriculturalOutput
      });
      setResult(recommendation);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-card rounded-3xl overflow-hidden shadow-2xl border border-border flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-8 md:p-12 gold-gradient">
            <div className="flex items-center gap-3 text-background mb-6">
              <Sparkles className="w-8 h-8" />
              <h2 className="text-3xl font-headline font-bold">Rural AI Assistant</h2>
            </div>
            <p className="text-background/80 mb-8 text-lg leading-relaxed">
              Dinos las características de tu terreno y nuestra IA buscará entre los +100 proyectos la mejor opción personalizada para ti.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="landSize" className="text-background font-bold">Tamaño (Hectáreas)</Label>
                  <Input 
                    id="landSize" 
                    type="number" 
                    step="0.1" 
                    required 
                    className="bg-white/90"
                    placeholder="Ej: 1.5"
                    value={formData.landSize}
                    onChange={e => setFormData({...formData, landSize: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-background font-bold">Ubicación</Label>
                  <Input 
                    id="location" 
                    required 
                    className="bg-white/90"
                    placeholder="Ej: Antioquia, CO"
                    value={formData.location}
                    onChange={e => setFormData({...formData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-background font-bold">Clima Predominante</Label>
                <Select onValueChange={val => setFormData({...formData, climate: val})} defaultValue={formData.climate}>
                  <SelectTrigger className="bg-white/90">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Tropical Húmedo">Tropical Húmedo</SelectItem>
                    <SelectItem value="Sabana Tropical">Sabana Tropical</SelectItem>
                    <SelectItem value="Zona Semiárida">Zona Semiárida</SelectItem>
                    <SelectItem value="Zona Templada">Zona Templada</SelectItem>
                    <SelectItem value="Zona Andina">Zona Andina</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-background font-bold">¿Qué te gustaría producir?</Label>
                <Select onValueChange={val => setFormData({...formData, desiredAgriculturalOutput: val})} defaultValue={formData.desiredAgriculturalOutput}>
                  <SelectTrigger className="bg-white/90">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="café">Café</SelectItem>
                    <SelectItem value="hortifruti">Frutas y Hortalizas</SelectItem>
                    <SelectItem value="ganadería lechera">Ganadería Lechera</SelectItem>
                    <SelectItem value="piscicultura">Piscicultura (Peces)</SelectItem>
                    <SelectItem value="agroforestería">Agroforestería</SelectItem>
                    <SelectItem value="avicultura">Avicultura (Pollos)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button type="submit" disabled={loading} className="w-full py-8 text-lg font-bold bg-secondary text-white hover:bg-secondary/90 shadow-xl">
                {loading ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : 'OBTENER RECOMENDACIÓN'}
              </Button>
            </form>
          </div>

          <div className="lg:w-1/2 p-8 md:p-12 bg-background flex flex-col justify-center">
            {!result && !loading && (
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">Tu Plan Ideal Te Espera</h3>
                <p className="text-muted-foreground">Completa el formulario para recibir una sugerencia técnica instantánea basada en nuestra base de datos rural.</p>
              </div>
            )}

            {loading && (
              <div className="text-center space-y-4">
                <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto" />
                <p className="text-primary font-bold tracking-widest uppercase text-sm">Analizando datos climáticos...</p>
              </div>
            )}

            {result && !loading && (
              <div className="space-y-6">
                <h3 className="text-2xl font-headline font-bold text-primary flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6" /> Recomendaciones Encontradas
                </h3>
                <div className="space-y-4">
                  {result.recommendations.map((rec, i) => (
                    <Card key={i} className="bg-secondary/10 border-none shadow-none">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-primary">{rec.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-white/80 mb-3">{rec.description}</p>
                        <div className="bg-background/50 p-3 rounded-lg border border-primary/20">
                          <p className="text-xs italic text-primary/80"><strong>Por qué este plan:</strong> {rec.reason}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="link" className="text-primary p-0 h-auto font-bold uppercase tracking-widest text-xs" onClick={() => setResult(null)}>
                  Hacer otra consulta
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
