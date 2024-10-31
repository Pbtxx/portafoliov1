import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="px-6 lg:px-8 h-16 flex items-center border-b border-white">
        <a className="flex items-center justify-center" href="#">
          <span className="sr-only">Pablo Martínez Canto</span>
          <span className="text-2xl font-bold text-white">PMC</span>
        </a>
        <nav className="ml-auto flex gap-6">
          <a className="text-sm font-medium hover:text-gray-300 transition-colors" href="#sobre-mi">
            Sobre Mí
          </a>
          <a className="text-sm font-medium hover:text-gray-300 transition-colors" href="#proyectos">
            Proyectos
          </a>
          <a className="text-sm font-medium hover:text-gray-300 transition-colors" href="#habilidades">
            Habilidades
          </a>
          <a className="text-sm font-medium hover:text-gray-300 transition-colors" href="#contacto">
            Contacto
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
                  Pablo Martínez Canto
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Estudiante de Ingeniería Civil en Computación mención Informática
                </p>
              </div>
              <div className="flex gap-4 mt-6">
              <Button variant="outline" className="bg-white text-black hover:bg-gray-200" asChild>
                  <a href="https://www.linkedin.com/in/pmartinezcanto" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button variant="ghost" className="text-white border border-white hover:bg-white hover:text-black">
                <a href="#contacto" >
                Contactar
                   </a>     
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="sobre-mi" className="w-full py-16 md:py-24 bg-white text-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-8 text-center">Sobre Mí</h2>
            <p className="max-w-3xl mx-auto text-center">
            Soy un apasionado de la tecnología y la innovación, con un enfoque constante en crear soluciones prácticas que aporten valor real a las personas y a las empresas. Como estudiante de Ingeniería Civil en Computación, en mi último año en la Universidad Tecnológica Metropolitana, busco desafíos que me permitan aplicar y expandir mis habilidades técnicas y de gestión en entornos reales. Mi objetivo es contribuir a proyectos que impulsen la eficiencia y la transformación digital, aprendiendo de cada experiencia y perfeccionando mi capacidad para resolver problemas complejos de manera creativa y eficaz.
            </p>
          </div>
        </section>
        <section id="proyectos" className="w-full py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center text-white">Proyectos Destacados</h2>
            <div className="grid gap-10 md:grid-cols-3">
              <Card className="bg-black border-white">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl md:text-2xl text-white">Marketplace Digital</CardTitle>
                  <CardDescription className="text-white">Alloxentric</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-white">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Diseño de arquitectura de software para un marketplace digital.</li>
                    <li>Desarrollo completo del frontend del marketplace agente.</li>
                  </ul>
                  <p className="text-sm text-gray-400">Tecnologías: Javascript, Vue, MongoDB, Docker</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-end">
                  <a href="https://github.com/sebastiangc88/alloxentric_agente_vue2" className="text-white hover:text-gray-300 transition-colors" aria-label="Ver código en GitHub">
                    <Github className="h-6 w-6" />
                  </a>
                </CardFooter>
              </Card>
              <Card className="bg-black border-white">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl md:text-2xl text-white">Traductor Automático Mapudungún - Español</CardTitle>
                  <CardDescription className="text-white">Universidad Tecnológica Metropolitana</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-white">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Optimización de prototipo de traductor automático entre mapudungun, español e inglés.</li>
                    <li>Análisis de datos lingüísticos utilizando Deep Learning e Inteligencia Artificial.</li>
                  </ul>
                  <p className="text-sm text-gray-400">Tecnologías: Python, React, Transformers, NLTK</p>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end">
                  <a href="https://github.com/Pbtxx/traductor-mapudungun-espanol" className="text-white hover:text-gray-300 transition-colors" aria-label="Ver código en GitHub">
                    <Github className="h-6 w-6" />
                  </a>
                </CardFooter>
              </Card>
              <Card className="bg-black border-white">
                <CardHeader className="p-6">
                  <CardTitle className="text-xl md:text-2xl text-white">Análisis de Inflación</CardTitle>
                  <CardDescription className="text-white">Universidad Tecnológica Metropolitana</CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-white">
                  <ul className="list-disc pl-5 space-y-2 mb-4">
                    <li>Desarrollo estadístico de inflación mediante técnicas de programación secuencial y paralela.</li>
                    <li>Implementación de tecnologías paralelas, mejorando el rendimiento y escabilidad del algoritmo en entornos multicore.</li>
                  </ul>
                  <p className="text-sm text-gray-400">Tecnologías: C/C++, OpenMP, SQL </p>
                </CardContent>
                <CardFooter className="p-4 flex justify-end">
                  <a href="https://github.com/Pbtxx/inflacion-paralela" className="text-white hover:text-gray-300 transition-colors" aria-label="Ver código en GitHub">
                    <Github className="h-6 w-6" />
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="habilidades" className="w-full py-16 md:py-24 bg-white text-black">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12 text-center">Habilidades</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Python", "C / C++", "MySQL", "Javascript", "MongoDB", "React" ,"Vue","Docker", "Grafana" ,"Agile", "Scrum"].map((skill) => (
                <Badge key={skill} variant="outline" className="text-lg py-2 px-4 bg-black text-white border-white">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer id="contacto" className="w-full py-12 bg-white text-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Contacto</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:pmzcanto@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                pmzcanto@gmail.com
              </a>
              <a href="tel:+56958747250" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                +56 9 5874 7250
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Santiago, Chile
              </span>
            </div>
            <div className="flex gap-6 mt-4">
              <a className="text-black hover:text-gray-600 transition-colors" href="https://github.com/Pbtxx" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a className="text-black hover:text-gray-600 transition-colors" href="https://www.linkedin.com/in/pmartinezcanto/" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
