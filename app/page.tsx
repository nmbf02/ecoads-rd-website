"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Leaf,
  Droplets,
  Heart,
  Users,
  Lightbulb,
  Shield,
  Eye,
  GraduationCap,
  CheckCircle,
  Mail,
  Phone,
  Instagram,
  MapPin,
  Star,
  ArrowRight,
  Recycle,
  TreePine,
  Sparkles,
} from "lucide-react"

export default function EcoAdsRD() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    campaignType: "",
    location: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData)
    alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">EcoAds RD</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-green-600 transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-gray-700 hover:text-green-600 transition-colors">
              Nosotros
            </a>
            <a href="#como-funciona" className="text-gray-700 hover:text-green-600 transition-colors">
              Cómo Funciona
            </a>
            <a href="#servicios" className="text-gray-700 hover:text-green-600 transition-colors">
              Servicios
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors">
              Contacto
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-200">
              🌿 Publicidad Urbana Sostenible
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Publicidad que <span className="text-green-600">limpia</span>,<br />
              no contamina
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transformamos el espacio urbano con campañas ecológicas que embellecen y comunican, sin generar residuos
              ni ruido.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <ArrowRight className="mr-2 h-5 w-5" />
                Solicita tu campaña personalizada
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 bg-transparent"
              >
                Ver cómo funciona
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quiénes Somos */}
      <section id="nosotros" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quiénes Somos</h2>
              <p className="text-xl text-gray-600">
                La primera agencia dominicana especializada en publicidad urbana sostenible
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Sobre EcoAds RD</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Somos pioneros en República Dominicana utilizando técnicas ecológicas como el
                  <em> clean graffiti</em> y la <em>publicidad viva</em> con elementos naturales para que tu marca
                  comunique de manera responsable, creativa y sin contaminar.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Heart className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Misión</h4>
                      <p className="text-gray-600">
                        Ofrecer soluciones publicitarias limpias, silenciosas y sostenibles que conecten a las marcas
                        con sus comunidades.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Eye className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Visión</h4>
                      <p className="text-gray-600">
                        Ser referentes globales en comunicación urbana ecológica, liderando un movimiento de marcas
                        responsables.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 p-8 rounded-2xl">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Nuestros Valores</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Sostenibilidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Innovación</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Estética urbana</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Responsabilidad</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Transparencia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">Educación</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">¿Cómo Funciona el Clean Graffiti?</h2>
              <p className="text-xl text-gray-600">Una técnica revolucionaria que limpia para comunicar</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <div className="bg-blue-50 p-6 rounded-xl mb-6">
                  <Droplets className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Qué es?</h3>
                  <p className="text-gray-600">
                    Es una técnica que utiliza agua a presión y moldes personalizados para
                    <strong> limpiar selectivamente</strong> superficies urbanas. No se aplica tinta ni pintura: solo se
                    limpia el diseño deseado.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">Beneficios:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Sin residuos físicos</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Sin contaminación visual o sonora</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Revaloriza el entorno</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Llama la atención de forma ética</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-6">Ideal para:</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Leaf className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Campañas ecológicas</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                    <Users className="h-6 w-6 text-blue-600" />
                    <span className="text-gray-700">Propaganda política limpia</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                    <span className="text-gray-700">Instituciones responsables</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <Recycle className="h-6 w-6 text-green-600" />
                    <span className="text-gray-700">Marcas sostenibles</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h4 className="text-center text-lg font-semibold text-gray-900 mb-6">Proceso: Antes y Después</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="bg-gray-200 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Superficie sucia</span>
                  </div>
                  <p className="text-sm text-gray-600">1. Superficie urbana con suciedad acumulada</p>
                </div>
                <div>
                  <div className="bg-blue-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <Droplets className="h-8 w-8 text-blue-600" />
                  </div>
                  <p className="text-sm text-gray-600">2. Aplicación de molde y limpieza con agua a presión</p>
                </div>
                <div>
                  <div className="bg-green-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-green-600 font-semibold">Tu Mensaje</span>
                  </div>
                  <p className="text-sm text-gray-600">3. Mensaje limpio y visible que embellece el espacio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
              <p className="text-xl text-gray-600">Soluciones publicitarias ecológicas adaptadas a tus necesidades</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <Droplets className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Campañas Clean Graffiti</CardTitle>
                  <CardDescription>
                    Intervenciones urbanas limpias sobre aceras, plazas o paredes públicas, con mensajes temporales
                    personalizados.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <TreePine className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Publicidad Viva</CardTitle>
                  <CardDescription>
                    Muros ecológicos con plantas naturales, podas creativas con formas de logotipos y placas
                    biodegradables en árboles adoptados.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardHeader>
                  <Sparkles className="h-12 w-12 text-green-600 mb-4" />
                  <CardTitle className="text-xl">Campañas Integrales</CardTitle>
                  <CardDescription>
                    Combinación de técnicas ecológicas para campañas de mayor impacto, incluyendo mantenimiento y
                    seguimiento.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Planes Disponibles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Campaña Individual</CardTitle>
                    <div className="text-3xl font-bold text-green-600">RD$2,500+</div>
                    <CardDescription>1 intervención puntual</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Diseño personalizado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Ubicación estratégica</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Documentación fotográfica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-green-300 relative">
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white">
                    Más Popular
                  </Badge>
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Plan Mensual</CardTitle>
                    <div className="text-3xl font-bold text-green-600">RD$10,000+</div>
                    <CardDescription>3 a 5 campañas por mes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Todo lo del plan individual</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Múltiples ubicaciones</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Reporte de impacto</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Soporte prioritario</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">Plan Anual</CardTitle>
                    <div className="text-3xl font-bold text-green-600">Cotización</div>
                    <CardDescription>Paquete completo personalizado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Todo lo anterior</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Publicidad viva incluida</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Mantenimiento visual</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span>Consultoría estratégica</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impacto y Beneficios */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Impacto y Beneficios</h2>
              <p className="text-xl text-gray-600">Cada campaña genera un impacto positivo medible</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beneficio Ambiental</h3>
                <p className="text-gray-600">
                  Cada campaña es una limpieza activa del espacio urbano con reducción directa de contaminación visual y
                  sonora.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Beneficio Social</h3>
                <p className="text-gray-600">
                  Promueve conciencia ciudadana y respeto al entorno, fortaleciendo la relación entre las marcas y las
                  comunidades.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Para Marcas y Gobiernos</h3>
                <p className="text-gray-600">
                  Fortalece la imagen pública de responsabilidad social. Ideal para municipios con políticas verdes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Lo que dicen nuestros clientes</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "Nuestra campaña electoral fue la más limpia y mejor recibida por la ciudadanía. EcoAds RD nos ayudó
                    a comunicar nuestro mensaje de manera responsable."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Comité Electoral Municipal</p>
                      <p className="text-sm text-gray-600">Santiago, RD</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "EcoAds RD convirtió una simple acera en una obra de arte responsable. La respuesta de la comunidad
                    fue increíblemente positiva."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                      <Leaf className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Fundación Verde RD</p>
                      <p className="text-sm text-gray-600">Santo Domingo, RD</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section id="contacto" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                ¿Te gustaría hacer una campaña limpia y memorable?
              </h2>
              <p className="text-xl text-gray-600">Llena el siguiente formulario y nos pondremos en contacto contigo</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle>Solicita una Cotización</CardTitle>
                  <CardDescription>
                    Cuéntanos sobre tu proyecto y te enviaremos una propuesta personalizada
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Empresa o institución</label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Nombre de tu empresa"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de campaña *</label>
                      <select
                        name="campaignType"
                        value={formData.campaignType}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Selecciona una opción</option>
                        <option value="individual">Campaña Individual</option>
                        <option value="mensual">Plan Mensual</option>
                        <option value="anual">Plan Anual</option>
                        <option value="consulta">Solo consulta</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ubicación sugerida</label>
                      <Input
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        placeholder="¿Dónde te gustaría la campaña?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje o idea que deseas comunicar *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier idea específica..."
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
                      <Mail className="mr-2 h-5 w-5" />
                      Enviar Propuesta
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Información de Contacto</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Email</p>
                          <p className="text-gray-600">contacto@ecoadsrd.com</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">WhatsApp</p>
                          <p className="text-gray-600">+1 (809) 000-0000</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Instagram className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Instagram</p>
                          <p className="text-gray-600">@EcoAdsRD</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Ubicación</p>
                          <p className="text-gray-600">República Dominicana</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-green-600 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">¿Por qué elegir EcoAds RD?</h3>
                    <ul className="space-y-2 text-green-100">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Pioneros en publicidad ecológica en RD</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>100% libre de contaminación</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Impacto social positivo garantizado</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Resultados medibles y documentados</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="h-8 w-8 text-green-400" />
                  <span className="text-2xl font-bold">EcoAds RD</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Transformando el espacio urbano sin contaminar. Publicidad que limpia, no ensucia.
                </p>
                <div className="flex space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Enlaces</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#inicio" className="hover:text-green-400 transition-colors">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#nosotros" className="hover:text-green-400 transition-colors">
                      Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#como-funciona" className="hover:text-green-400 transition-colors">
                      Cómo Funciona
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" className="hover:text-green-400 transition-colors">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="hover:text-green-400 transition-colors">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Servicios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Clean Graffiti</li>
                  <li>Publicidad Viva</li>
                  <li>Campañas Integrales</li>
                  <li>Consultoría Ecológica</li>
                </ul>
              </div>
            </div>

            <Separator className="bg-gray-700 mb-8" />

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 EcoAds RD - Todos los derechos reservados</p>
              <p>Diseñado para transformar el espacio urbano sin contaminar</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
