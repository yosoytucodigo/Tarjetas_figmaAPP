type IconProps = { className?: string };

function ArrowRight({ className = "size-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
      <path
        d="M3.5 10.8 12 3.7l8.5 7.1v8.5a1.7 1.7 0 0 1-1.7 1.7H5.2a1.7 1.7 0 0 1-1.7-1.7v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M9 21v-6.5h6V21" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
      <path
        d="M12 3 4.5 6v5.4c0 4.6 3 8 7.5 9.6 4.5-1.6 7.5-5 7.5-9.6V6L12 3Z"
        stroke="#000000"
        strokeWidth="1.6"
      />
      <path
        d="m8.8 12.1 2 2 4.5-4.6"
        stroke="#000000"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WalletIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="size-7" aria-hidden="true">
      <path
        d="M4 6.5h14.5A1.5 1.5 0 0 1 20 8v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M15.5 11H21v5h-5.5a2.5 2.5 0 0 1 0-5Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const projects = [
  {
    number: "01",
    category: "Crédito hipotecario",
    title: "La casa que imaginas, sin la incertidumbre.",
    description:
      "Rediseño de la experiencia de simulación y solicitud hipotecaria, convirtiendo un proceso complejo en un camino claro y acompañable.",
    tags: ["Investigación", "Product design", "Fintech"],
    accent: "#e7ff5e",
    ink: "#13261d",
    result: "−38%",
    resultLabel: "abandono en simulación",
    visual: "mortgage",
  },
  {
    number: "02",
    category: "Seguro de vida",
    title: "Proteger lo importante debería sentirse simple.",
    description:
      "Una experiencia de contratación transparente y humana que traduce coberturas complejas en decisiones que cualquier persona puede entender.",
    tags: ["Service design", "UX writing", "Prototipado"],
    accent: "#bf9cff",
    ink: "#24163f",
    result: "+24%",
    resultLabel: "conversión digital",
    visual: "insurance",
  },
  {
    number: "03",
    category: "Préstamos personales",
    title: "Un impulso claro para tu próximo proyecto.",
    description:
      "Creación de un flujo móvil ágil para cotizar y solicitar préstamos, con total claridad sobre cuotas, plazos y costos.",
    tags: ["UX/UI design", "Design system", "Testing"],
    accent: "#ff805d",
    ink: "#40190f",
    result: "4 min",
    resultLabel: "solicitud promedio",
    visual: "loan",
  },
];

function MortgageVisual() {
  return (
    <div
      className="relative h-[351px] min-h-76 overflow-hidden rounded-none bg-[#0a7351] p-5 sm:p-8"
      style={{
        boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
        ["--figma-make-local-effect-type" as string]: "INNER_SHADOW",
      }}
    >
      <div className="absolute -right-10 -top-12 size-44 rounded-full bg-[#b8e8da]" />
      <div className="relative mx-auto max-w-72 rounded-[1.75rem] bg-white p-5 shadow-[0_20px_55px_rgba(20,50,38,.16)]">
        <div className="mb-7 flex items-center justify-between">
          <span className="text-[10px] font-bold tracking-[.18em] text-[#37745e]">HABITÁ</span>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#e7ff5e]">
            <HomeIcon />
          </span>
        </div>
        <p className="text-xs text-[#607068]">Tu crédito estimado</p>
        <p className="mt-1 font-display text-3xl font-semibold tracking-tight">$128.500.000</p>
        <div className="mt-6">
          <div className="mb-2 flex justify-between text-[10px] text-[#607068]">
            <span>Cuota inicial</span>
            <span>30%</span>
          </div>
          <div className="h-2 rounded-full bg-[#e5eae7]">
            <div className="h-full w-[30%] rounded-full bg-[#153d30]" />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-2 text-[10px]">
          <div className="rounded-xl bg-[#f2f5f3] p-3">
            <span className="block text-[#7b8781]">Plazo</span>
            <strong className="mt-1 block text-xs">20 años</strong>
          </div>
          <div className="rounded-xl bg-[#f2f5f3] p-3">
            <span className="block text-[#7b8781]">Cuota mensual</span>
            <strong className="mt-1 block text-xs">$824.500</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function InsuranceVisual() {
  return (
    <div
      className="relative flex h-full min-h-76 items-center justify-center overflow-hidden bg-[#0a7351] p-5 sm:p-8"
      style={{
        boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
        ["--figma-make-local-effect-type" as string]: "INNER_SHADOW",
      }}
    >
      <div className="absolute left-8 top-8 size-24 rounded-full border border-[#ae96cf]/50" />
      <div className="absolute bottom-8 right-7 size-36 rounded-full bg-[#dbcafa]" />
      <div className="relative w-full max-w-76 rounded-[1.75rem] bg-[#251b33] p-6 text-white shadow-[0_24px_60px_rgba(37,27,51,.28)]">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[10px] font-bold tracking-[.18em] text-[#bfa9de]">CÍRCULO SEGURO</p>
            <p className="mt-4 text-sm text-[#bcb1c8]">Tu protección</p>
          </div>
          <span className="flex size-10 items-center justify-center rounded-full bg-[#e7ff5e] text-[#251b33]">
            <ShieldIcon />
          </span>
        </div>
        <p className="mt-2 font-display text-2xl font-semibold">Todo está cubierto.</p>
        <div className="mt-6 space-y-2">
          {["Protección familiar", "Invalidez total", "Asistencia 24/7"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-xl bg-white/[.08] px-3 py-2.5 text-xs"
            >
              <span className="flex size-4 items-center justify-center rounded-full bg-[#bf9cff] text-[9px] text-[#251b33]">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LoanVisual() {
  return (
    <div
      className="relative flex h-[351px] min-h-76 items-center justify-center overflow-hidden bg-[#0a7351] p-5 sm:p-8"
      style={{
        boxShadow: "inset 0 4px 4px rgba(0, 0, 0, 0.25)",
        ["--figma-make-local-effect-type" as string]: "INNER_SHADOW",
      }}
    >
      <div className="absolute -left-10 bottom-0 h-36 w-56 rotate-12 rounded-[50%] bg-[#f7cbbc]" />
      <div className="relative w-full max-w-72 rounded-[1.75rem] bg-[#fffaf7] p-5 shadow-[0_20px_55px_rgba(98,46,29,.18)]">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-full bg-[#ff805d] text-white">
            <WalletIcon />
          </span>
          <div>
            <p className="text-[10px] text-[#87685e]">Préstamo disponible</p>
            <p className="text-sm font-bold">Listo para ti</p>
          </div>
        </div>
        <div className="my-6 text-center">
          <p className="text-[10px] text-[#87685e]">¿Cuánto necesitas?</p>
          <p className="mt-1 font-display text-3xl font-semibold">$8.000.000</p>
        </div>
        <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
          <span className="rounded-lg border border-[#ead8d1] py-2">12 meses</span>
          <span className="rounded-lg bg-[#40190f] py-2 text-white">24 meses</span>
          <span className="rounded-lg border border-[#ead8d1] py-2">36 meses</span>
        </div>
        <button className="mt-5 w-full rounded-xl bg-[#0a7351] py-3 text-xs font-bold text-[#40190f]">
          Ver mi cuota
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#d3dae0] bg-white shadow-[0_10px_30px_rgba(21,56,44,.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(21,56,44,.12)]">
      <div className="relative overflow-hidden">
        {project.visual === "mortgage" && <MortgageVisual />}
        {project.visual === "insurance" && <InsuranceVisual />}
        {project.visual === "loan" && <LoanVisual />}
        <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[10px] font-medium text-[#07563f] shadow-sm backdrop-blur">
          {project.number} / 03
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <span className="text-[11px] font-bold uppercase tracking-[.14em] text-[#087354]">
          {project.category}
        </span>
        <h3 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.08] tracking-[-.035em] text-[#263649]">
          {project.title}
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#627184]">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#dbe2df] bg-[#f4f6f5] px-3 py-1.5 text-[10px] font-semibold text-[#52665e]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#e2e6e4] pt-6">
          <div>
            <strong className="block font-display text-2xl text-[#07563f]">{project.result}</strong>
            <span className="mt-0.5 block text-[10px] leading-4 text-[#627184]">
              {project.resultLabel}
            </span>
          </div>
          <button
            className="flex shrink-0 items-center gap-2 rounded-lg bg-[#07563f] px-4 py-3 text-xs font-bold text-white transition-colors hover:bg-[#064b39] focus-visible:outline-3 focus-visible:outline-[#48a987]"
            onClick={() =>
              document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Ver caso <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#f4f6f5] text-[#171714]">
      <main className="min-h-screen">
        <section
          id="proyectos"
          className="min-h-screen bg-[#f4f6f5] py-10 text-[#263649] sm:py-16 lg:py-20"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="mb-8 sm:mb-12">
              <p className="mb-3 text-xs font-bold uppercase tracking-[.18em] text-[#087354]">
                Productos bancarios
              </p>
              <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight tracking-[-.04em] text-[#263649] sm:text-5xl lg:text-6xl">
                Encuentra una solución para ti
              </h1>
            </div>
            <div
              className="grid w-full auto-rows-fr items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
              style={{
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
                ["--figma-make-local-effect-type" as string]: "DROP_SHADOW",
              }}
            >
              {projects.map((project) => (
                <ProjectCard key={project.number} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
