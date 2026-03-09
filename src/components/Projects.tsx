import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink} from "lucide-react";

const projects = [
  {
    title: "Joycofoods.com",
    description:
      "Full-stack product catalog and internal order management platform that replaced manual Excel workflows. Features an admin dashboard for managing inventory, customers, and orders with search, filtering, authentication, and real-time updates.",    
      tech: ["React", "TypeScript", "Next.js", "PostgreSQL", "Prisma ORM", "Tailwind"],
    live: "https://www.joycofoods.com/",
  },
  {
    title: "Python Document ETL and Automation (Contracted work)",
    description:
      "Developed an automated ETL pipeline to extract structured data from 10,000+ pages of PDFs within a 3-day deadline. Engineered pattern based parsing using PyMuPDF and built a scalable data processing workflow with Pandas, producing formatted Excel outputs via XlsxWriter that matched client defined constraints. Reduced manual review time from weeks to hours. Code repository is private due to confidential client data.",
    tech: ["Python", "Pandas", "PyMuPDF", "Excel", "XlsxWriter"],
    live: null,
    repo: "Private (Confidential Client Project)",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">03.</span>
            Things I've Built
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 hover:glow-border transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-primary text-sm font-mono">Featured Project</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-3">
                    <a href={project.live} className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-mono text-primary/80 bg-primary/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
