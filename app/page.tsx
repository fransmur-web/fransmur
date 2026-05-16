"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Truck,
  Building2,
  Globe,
  Phone,
  Shield,
  Clock3,
} from "lucide-react";

const trucks = [
  {
    name: "Mercedes Actros",
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop",
    speed: "120 km/h",
    capacity: "34 toneladas",
    gps: "GPS Inteligente",
  },
  {
    name: "Volvo FH16",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2070&auto=format&fit=crop",
    speed: "130 km/h",
    capacity: "40 toneladas",
    gps: "Seguimiento Satélite",
  },
  {
    name: "Scania S730",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop",
    speed: "125 km/h",
    capacity: "38 toneladas",
    gps: "Monitorización 24/7",
  },
];

export default function Home() {
  return (
    <main className="text-white overflow-hidden scroll-smooth">

      {/* HERO */}
      <section
  className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
>

  {/* IMAGEN FONDO */}
  <Image
    src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop"
    alt="camion"
    fill
    className="object-cover scale-110 blur-[2px]"
  />

  {/* COLORES DIFUMINADOS */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 via-blue-900/50 to-orange-500/40" />

  {/* EFECTO OSCURO SUAVE */}
  <div className="absolute inset-0 bg-black/20" />

  {/* GLOW */}
  <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-cyan-400/30 blur-[120px] rounded-full"></div>

  <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-orange-500/30 blur-[120px] rounded-full"></div>

  {/* CONTENIDO */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative z-10 text-center max-w-5xl"
  >

    <motion.h1
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="text-7xl md:text-9xl font-black text-white drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
    >
      FRANSMUR
    </motion.h1>

    <p className="mt-8 text-2xl text-white/90">
      Plataforma inteligente que conecta empresas y transportistas en toda Europa.
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

      {/* SERVICIOS */}
      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
              "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-black/40 to-red-900/40" />

        <div className="relative z-10">

          <h2 className="text-6xl font-black text-center mb-20">
            PLATAFORMA LOGÍSTICA
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

            {[
              {
                icon: <Truck size={60} />,
                title: "Transportistas",
                text: "Encontramos rutas y cargas para conductores con vehículo propio.",
              },
              {
                icon: <Building2 size={60} />,
                title: "Empresas",
                text: "Conectamos mercancías con transportistas disponibles.",
              },
              {
                icon: <Globe size={60} />,
                title: "Europa",
                text: "Cobertura internacional con optimización inteligente.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  rotate: 1,
                }}
                className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20"
              >
                <div className="text-cyan-300 mb-6">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-200">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* FLOTA */}
      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-blue-900/50" />

        <div className="relative z-10">

          <h2 className="text-6xl font-black text-center mb-20">
            NUESTRA FLOTA
          </h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">

            {trucks.map((truck, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20"
              >
                <div className="relative h-80">

                  <Image
                    src={truck.image}
                    alt={truck.name}
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-3xl font-black">
                      {truck.name}
                    </h3>
                  </div>

                </div>

                <div className="p-8 space-y-4">

                  <div className="flex justify-between">
                    <span>Velocidad</span>
                    <span>{truck.speed}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Capacidad</span>
                    <span>{truck.capacity}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Sistema</span>
                    <span>{truck.gps}</span>
                  </div>

                  <a href="#transportista">
                    <button className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 transition py-4 rounded-2xl font-bold">
                      VER DISPONIBILIDAD
                    </button>
                  </a>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* EMPRESA */}
      <section
        id="empresa"
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/50 to-blue-900/50" />

        <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">

          <h2 className="text-5xl font-black mb-10">
            SOY UNA EMPRESA
          </h2>

          <form
            action="https://formsubmit.co/pedrorivasver@gmail.com"
            method="POST"
            className="grid md:grid-cols-2 gap-6"
          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              name="empresa"
              placeholder="Nombre empresa"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="telefono"
              placeholder="Teléfono"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="mercancia"
              placeholder="Tipo de mercancía"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="destino"
              placeholder="Destino"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="tipoViaje"
              placeholder="Tipo de viaje"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="peso"
              placeholder="Toneladas"
              className="bg-black/40 p-5 rounded-xl"
            />

            <textarea
              name="descripcion"
              placeholder="Describe el transporte..."
              className="bg-black/40 p-5 rounded-xl md:col-span-2 h-40"
            />

            <button className="md:col-span-2 bg-orange-500 hover:bg-orange-600 transition py-5 rounded-2xl text-2xl font-bold">
              ENCONTRAR TRANSPORTISTA
            </button>

          </form>
        </div>
      </section>

      {/* TRANSPORTISTA */}
      <section
        id="transportista"
        className="relative py-32 px-6 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 to-purple-900/50" />

        <div className="relative z-10 max-w-5xl mx-auto bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">

          <h2 className="text-5xl font-black mb-10">
            SOY TRANSPORTISTA
          </h2>

          <form
            action="https://formsubmit.co/pedrorivasver@gmail.com"
            method="POST"
            className="grid md:grid-cols-2 gap-6"
          >

            <input type="hidden" name="_captcha" value="false" />

            <input
              name="nombre"
              placeholder="Nombre"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="telefono"
              placeholder="Teléfono"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="añosCarnet"
              placeholder="Años de carnet"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="puntos"
              placeholder="Puntos del carnet"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="tipoCamion"
              placeholder="Tipo de camión"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="rutas"
              placeholder="Rutas preferidas"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="capacidad"
              placeholder="Capacidad de carga"
              className="bg-black/40 p-5 rounded-xl"
            />

            <input
              name="disponibilidad"
              placeholder="Disponibilidad"
              className="bg-black/40 p-5 rounded-xl"
            />

            <textarea
              name="experiencia"
              placeholder="Experiencia y observaciones..."
              className="bg-black/40 p-5 rounded-xl md:col-span-2 h-40"
            />

            <button className="md:col-span-2 bg-cyan-500 hover:bg-cyan-600 transition py-5 rounded-2xl text-2xl font-bold">
              BUSCAR EMPRESAS
            </button>

          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="relative py-20 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-wrap justify-center gap-10 mb-10">

          <div className="flex items-center gap-3">
            <Phone />
            +34 600 000 000
          </div>

          <div className="flex items-center gap-3">
            <Shield />
            Seguridad Garantizada
          </div>

          <div className="flex items-center gap-3">
            <Clock3 />
            24/7 Disponible
          </div>

        </div>

        <p className="relative z-10 text-gray-200">
          © 2026 FRANSMUR LOGISTICS
        </p>
      </footer>

    </main>
  );
}