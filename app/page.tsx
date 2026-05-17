"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Home() {
  const { scrollY } = useScroll();

  const logoScale = useTransform(scrollY, [0, 300], [1, 0.45]);
  const logoX = useTransform(scrollY, [0, 300], [0, -550]);
  const logoY = useTransform(scrollY, [0, 300], [0, -220]);

  const trucks = [
    {
      name: "Mercedes Actros",
      image:
        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop",
      power: "625 CV",
      year: "2024",
      capacity: "34 toneladas",
      gps: "GPS Inteligente 24/7",
      available: 6,
    },
    {
      name: "Volvo FH16",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop",
      power: "750 CV",
      year: "2025",
      capacity: "40 toneladas",
      gps: "Seguimiento Satélite",
      available: 6,
    },
    {
      name: "Scania S730",
      image:
        "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
      power: "730 CV",
      year: "2024",
      capacity: "38 toneladas",
      gps: "Monitorización 24/7",
      available: 6,
    },
  ];

  return (
    <main className="bg-white text-white overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
          alt="camion"
          fill
          className="object-cover scale-110 blur-[2px]"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-900/50 to-orange-500/40" />

        <div className="absolute inset-0 bg-white/10" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-400/30 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/30 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center max-w-5xl"
        >

          <motion.h1
            style={{
              scale: logoScale,
              x: logoX,
              y: logoY,
            }}
            className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.5)]"
          >
            FRANSMUR
          </motion.h1>

          <p className="mt-8 text-2xl text-white/90">
            Plataforma logística inteligente especializada en transporte frigorífico nacional e internacional.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <a href="#empresa">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-orange-500 hover:bg-orange-600 transition px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
              >
                NECESITO TRANSPORTE
              </motion.button>
            </a>

            <a href="#transportista">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-cyan-500 hover:bg-cyan-600 transition px-10 py-5 rounded-full text-xl font-bold shadow-2xl"
              >
                TENGO UN CAMIÓN
              </motion.button>
            </a>

          </div>

        </motion.div>

      </section>

      {/* EMPRESA */}
      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2070&auto=format&fit=crop')",
        }}
      >

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-orange-900/60" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <h2 className="text-6xl font-black mb-16 text-center">
            FRANSMUR LOGÍSTICA S.L.
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6">
                Empresa
              </h3>

              <p className="text-white/90 leading-8">
                FransMur Logística S.L. es una Sociedad de Responsabilidad Limitada especializada
                en el transporte frigorífico de mercancías perecederas tanto a nivel nacional como internacional.
                La empresa opera desde el Polígono Industrial Oeste de Murcia, uno de los principales
                núcleos logísticos del sureste español.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6">
                Ubicación Estratégica
              </h3>

              <p className="text-white/90 leading-8">
                Nuestra sede se sitúa entre Murcia y Alcantarilla,
                junto a las autovías A-7 y A-30,
                permitiendo conexiones rápidas con Madrid,
                Barcelona, Andalucía y el resto de Europa.
                Disponemos de acceso cercano al Puerto de Cartagena,
                Mercamurcia y plataformas logísticas internacionales.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6">
                Transporte Refrigerado
              </h3>

              <p className="text-white/90 leading-8">
                Nuestra actividad principal consiste en el transporte
                frigorífico de productos hortofrutícolas frescos,
                manteniendo la cadena de frío entre 2°C y 8°C
                mediante sistemas digitales de control térmico y seguimiento GPS en tiempo real.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20">
              <h3 className="text-3xl font-bold mb-6">
                Normativa y Seguridad
              </h3>

              <p className="text-white/90 leading-8">
                FransMur Logística S.L. opera conforme a la normativa española y europea:
                Ley LOTT, Reglamento CE 1072/2009,
                Convenio CMR, normativa ATP,
                tacógrafo digital y Reglamento CE 561/2006
                sobre tiempos de conducción y descanso.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FLOTA */}
      <section className="relative py-32 px-6 overflow-hidden">

        <Image
          src="https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop"
          alt="fondo"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-cyan-900/50 to-orange-900/50" />

        <div className="relative z-10 max-w-7xl mx-auto">

          <h2 className="text-6xl font-black text-center mb-20">
            NUESTRA FLOTA
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            {trucks.map((truck, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20"
              >

                <div className="relative h-72">

                  <Image
                    src={truck.image}
                    alt={truck.name}
                    fill
                    className="object-cover"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-3xl font-bold mb-6">
                    {truck.name}
                  </h3>

                  <div className="space-y-4 text-lg">

                    <div className="flex justify-between">
                      <span>Potencia</span>
                      <span>{truck.power}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Año</span>
                      <span>{truck.year}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Capacidad</span>
                      <span>{truck.capacity}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Seguimiento</span>
                      <span>{truck.gps}</span>
                    </div>

                    <div className="flex justify-between">
                      <span>Disponibles</span>
                      <span>{truck.available}</span>
                    </div>

                  </div>

                  <button
                    onClick={() => {
                      alert(
                        `Actualmente quedan ${
                          Math.floor(Math.random() * 6) + 1
                        } camiones ${truck.name} disponibles`
                      );
                    }}
                    className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl font-bold"
                  >
                    VER DISPONIBILIDAD
                  </button>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* FORMULARIOS */}
      <section className="relative py-32 px-6 bg-gradient-to-br from-cyan-700 to-blue-900">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* EMPRESA */}
          <div
            id="empresa"
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20"
          >

            <h2 className="text-4xl font-black mb-8">
              Soy una empresa
            </h2>

            <form
              action="https://formsubmit.co/fransmur@gmail.com"
              method="POST"
              className="space-y-5"
            >

              <input
                type="text"
                name="empresa"
                placeholder="Nombre de empresa"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <input
                type="text"
                name="telefono"
                placeholder="Número de contacto"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <textarea
                name="mercancia"
                placeholder="Tipo de mercancía y ruta"
                className="w-full p-4 rounded-2xl text-black h-40"
                required
              />

              <button className="w-full bg-orange-500 hover:bg-orange-600 transition py-4 rounded-2xl font-bold">
                SOLICITAR TRANSPORTE
              </button>

            </form>

          </div>

          {/* TRANSPORTISTA */}
          <div
            id="transportista"
            className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20"
          >

            <h2 className="text-4xl font-black mb-8">
              Soy transportista
            </h2>

            <form
              action="https://formsubmit.co/fransmur@gmail.com"
              method="POST"
              className="space-y-5"
            >

              <input
                type="text"
                name="nombre"
                placeholder="Nombre completo"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <input
                type="number"
                name="años"
                placeholder="Años de carnet"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <input
                type="number"
                name="puntos"
                placeholder="Puntos del carnet"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <input
                type="text"
                name="vehiculo"
                placeholder="Tipo de camión"
                className="w-full p-4 rounded-2xl text-black"
                required
              />

              <textarea
                name="rutas"
                placeholder="Rutas disponibles"
                className="w-full p-4 rounded-2xl text-black h-40"
                required
              />

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl font-bold">
                UNIRME A FRANSMUR
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-14 text-center">

        <div className="space-y-4">

          <p className="text-3xl font-black">
            FRANSMUR LOGÍSTICA S.L.
          </p>

          <p>
            📍 Polígono Industrial Oeste — Murcia
          </p>

          <p>
            📞 646381797
          </p>

          <p>
            📧 fransmur@gmail.com
          </p>

          <p className="text-white/70">
            Transporte frigorífico nacional e internacional
          </p>

          <p className="text-white/50 text-sm">
            © 2026 FransMur Logística S.L. — Todos los derechos reservados
          </p>

        </div>

      </footer>

    </main>
  );
}