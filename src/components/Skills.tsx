import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML/CSS",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "Flask",
      "Python",
      "C++",
      "C",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "SQL",
      "Prisma ORM",
      "Supabase",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "Docker",
      "Linux",
      "SSH",
      "Vercel",
      "Google Cloud Platform",
      "LaTeX",
    ],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">04.</span>
            Skills & Technologies
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 * ci }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors duration-300"
              >
                <h3 className="text-primary font-mono text-sm mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm text-secondary-foreground bg-secondary px-3 py-1.5 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
