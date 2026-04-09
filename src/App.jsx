export default function App() {
  const projects = [
    {
      title: "Vue Product Showcase",
      description:
        "Aplicación desarrollada con Vue.js para visualizar productos, filtrar contenido, marcar favoritos y revisar detalles mediante una interfaz limpia y dinámica.",
      github: "https://github.com/cristianhernandez-dev/vue-product-showcase.git",
      demo: "https://cristianhernandez-dev.github.io/vue-product-showcase/",
      tech: ["Vue", "JavaScript", "Vuetify", "API", "GitHub Pages"],
      featured: true,
    },
    {
      title: "NASA API",
      description:
        "Proyecto frontend que consume la API de la NASA para mostrar contenido dinámico por fecha, aplicando asincronía, fetch y manejo de datos del lado del cliente.",
      github: "https://github.com/cristianhernandez-dev/nasa-api",
      demo: "https://cristianhernandez-dev.github.io/nasa-api/",
      tech: ["HTML", "CSS", "JavaScript", "Fetch API"],
    },
    {
      title: "TaskFlow",
      description:
        "Aplicación de gestión de tareas enfocada en la manipulación del DOM, eventos y lógica en JavaScript, con una experiencia simple y funcional.",
      github: "https://github.com/cristianhernandez-dev/TASKFLOW",
      demo: "https://cristianhernandez-dev.github.io/TASKFLOW/",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "Vue.js",
    "Git",
    "GitHub",
    "GitHub Pages",
    "Consumo de APIs",
    "Diseño de interfaces",
    "Responsive Design",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.22),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1 text-sm font-medium text-sky-300">
                Frontend Developer en formación
              </span>

             <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Cristián Hernández
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Desarrollo interfaces modernas, proyectos funcionales y experiencias web enfocadas en claridad, rendimiento y aprendizaje continuo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#proyectos"
                  className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-400"
                >
                  Ver proyectos
                </a>

                <a
                  href="https://github.com/cristianhernandez-dev"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-sm">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
                  Resumen
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <p className="text-sm text-slate-400">Especialidad</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Frontend y experiencia de usuario
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Tecnologías</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      JavaScript, Vue.js, GitHub Pages
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Enfoque actual</p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Portafolio, proyectos reales y empleabilidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Sobre mí
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Construyo proyectos para convertir aprendizaje en experiencia real.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-slate-300 shadow-xl">
            <p className="leading-8">
              Soy un desarrollador frontend en formación, orientado a construir interfaces claras, funcionales y bien presentadas. He trabajado en proyectos con JavaScript, Vue.js y consumo de APIs, enfocándome en aplicar buenas prácticas, documentación ordenada y despliegue en GitHub Pages.
            </p>

            <p className="mt-5 leading-8">
              Mi objetivo es seguir fortaleciendo mi perfil técnico con proyectos reales que demuestren lógica, estructura, usabilidad y capacidad de crecimiento profesional.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="border-y border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
                Skills
              </p>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Tecnologías y herramientas
              </h2>
            </div>

            <p className="max-w-xl text-slate-400">
              Un stack centrado en desarrollo frontend, publicación de proyectos y construcción de interfaces web modernas.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-slate-200 shadow-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Proyectos
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Trabajo destacado
            </h2>
          </div>

          <p className="max-w-xl text-slate-400">
            Proyectos publicados y accesibles, enfocados en frontend, lógica del lado del cliente, consumo de APIs y experiencia de usuario.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl transition duration-300 hover:-translate-y-1 ${
                project.featured
                  ? "border-sky-400/30 bg-sky-500/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              {project.featured && (
                <span className="mb-5 inline-flex rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                  Proyecto principal
                </span>
              )}

              <h3 className="text-2xl font-bold text-white">{project.title}</h3>

              <p className="mt-4 min-h-[120px] leading-7 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
                >
                  Ver demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contacto" className="border-t border-white/10 bg-slate-900/70">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-sky-500/10 to-slate-800 p-8 shadow-2xl sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">
              Contacto
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Disponible para seguir creciendo en desarrollo frontend.
            </h2>

            <p className="mt-4 max-w-2xl leading-8 text-slate-300">
              Este portafolio resume mi avance técnico, mis proyectos publicados y mi enfoque de trabajo. El siguiente paso es continuar fortaleciendo mi perfil con nuevos desafíos y experiencia práctica.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com/cristianhernandez-dev"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
              >
                Ver GitHub
              </a>

              <a
                href="#proyectos"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Revisar proyectos
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}