export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          
          <h1 className="text-2xl font-bold tracking-wide">
            FransMur
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#servicios" className="hover:text-green-400 transition">Servicios</a>
            <a href="#flota" className="hover:text-green-400 transition">Flota</a>
            <a href="#rutas" className="hover:text-green-400 transition">Rutas</a>
            <a href="#contacto" className="hover:text-green-400 transition">Contacto</a>
          </div>

        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6">

        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black" />

        <div className="relative z-10 max-w-5xl">

          <p className="uppercase tracking-[0.4em] text-green-400 mb-6">
            Transporte Frigorífico Europeo
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight">
            FransMur
            <br />
            Logística
          </h1>

          <p className="mt-8 text-zinc-400 text-xl max-w-2xl mx-auto">
            Especialistas en transporte refrigerado nacional e internacional
            para productos hortofrutícolas y mercancía perecedera.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="#contacto"
              className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-semibold transition"
            >
              Solicitar Transporte
            </a>

            <a
              href="#servicios"
              className="border border-zinc-700 hover:border-white px-8 py-4 rounded-2xl transition"
            >
              Ver Servicios
            </a>

          </div>

        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section className="py-24 border-y border-zinc-900 bg-zinc-950">

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-5xl font-black text-green-400">18</h3>
            <p className="text-zinc-500 mt-2">Camiones</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-green-400">25</h3>
            <p className="text-zinc-500 mt-2">Empleados</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-green-400">24/7</h3>
            <p className="text-zinc-500 mt-2">GPS Tracking</p>
          </div>

          <div>
            <h3 className="text-5xl font-black text-green-400">EU</h3>
            <p className="text-zinc-500 mt-2">Cobertura</p>
          </div>

        </div>

      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-32 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-20">
            Servicios Logísticos
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-green-500 transition">

              <h3 className="text-2xl font-bold mb-5">
                Transporte Refrigerado
              </h3>

              <p className="text-zinc-400 leading-7">
                Transporte nacional e internacional con temperatura controlada,
                trazabilidad digital y cumplimiento ATP.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-green-500 transition">

              <h3 className="text-2xl font-bold mb-5">
                Grupaje Inteligente
              </h3>

              <p className="text-zinc-400 leading-7">
                Soluciones optimizadas para pequeños productores y cargas
                parciales con máxima eficiencia logística.
              </p>

            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 hover:border-green-500 transition">

              <h3 className="text-2xl font-bold mb-5">
                Tracking en Tiempo Real
              </h3>

              <p className="text-zinc-400 leading-7">
                Sistemas GPS, control de temperatura y seguimiento operativo
                24 horas.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FLOTA */}
      <section id="flota" className="py-32 bg-zinc-950 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-10">
            Flota Moderna
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-8">
            Vehículos frigoríficos EURO 6 equipados con sistemas Thermo King,
            sensores digitales y tecnología avanzada de control térmico.
          </p>

        </div>

      </section>

      {/* RUTAS */}
      <section id="rutas" className="py-32 px-6">

        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-black mb-10">
            Cobertura Europea
          </h2>

          <p className="text-zinc-400 text-xl leading-8 max-w-3xl mx-auto">
            Operamos rutas nacionales e internacionales conectando Murcia con
            Francia, Alemania, Países Bajos, Bélgica e Italia.
          </p>

        </div>

      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-32 bg-zinc-950 px-6">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-5xl font-black text-center mb-16">
            Solicitar Transporte
          </h2>

          <form
            action="https://formsubmit.co/fransmur@gmail.com"
            method="POST"
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Nombre"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            />

            <input
              type="text"
              placeholder="Empresa"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            />

            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            />

            <textarea
              placeholder="Describe el transporte..."
              rows={5}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 transition py-5 rounded-2xl font-bold text-lg"
            >
              Enviar Solicitud
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 text-center text-zinc-600">
        © 2025 FransMur Logística S.L.
      </footer>

    </main>
  );
}