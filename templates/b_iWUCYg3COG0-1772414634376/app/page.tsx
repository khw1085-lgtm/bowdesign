import { RoleCard } from "@/components/role-card"

const roles = [
  {
    title: "Interactive Web",
    description:
      "Creating immersive digital experiences through dynamic interactions and engaging web animations that captivate users.",
    imageSrc: "/images/interactive-web.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "Crafting intuitive interfaces and seamless user experiences through research-driven design and visual storytelling.",
    imageSrc: "/images/uiux.jpg",
  },
  {
    title: "Planning",
    description:
      "Strategic roadmapping and project coordination to ensure successful delivery from concept to completion.",
    imageSrc: "/images/planning.jpg",
  },
  {
    title: "Development",
    description:
      "Building robust, scalable applications with clean code architecture and modern development practices.",
    imageSrc: "/images/development.jpg",
  },
  {
    title: "AI Agent",
    description:
      "Integrating intelligent automation and machine learning solutions to enhance product capabilities and user experiences.",
    imageSrc: "/images/ai-agent.jpg",
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-32">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground lg:text-5xl text-balance">
            Expertise in Digital Creation
          </h1>
          <p className="text-lg font-normal leading-relaxed text-muted-foreground text-pretty">
            A comprehensive approach to building exceptional digital products,
            combining creativity with technical excellence across five core
            disciplines.
          </p>
        </div>
      </section>

      {/* Roles List */}
      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-8">
        <div className="flex flex-col gap-8">
          {roles.map((role, index) => (
            <RoleCard
              key={role.title}
              title={role.title}
              description={role.description}
              imageSrc={role.imageSrc}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm font-normal text-muted-foreground">
              Building digital experiences with purpose and precision.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-sm font-normal text-muted-foreground transition-colors hover:text-foreground"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
