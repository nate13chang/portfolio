import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "Joyco International",
    role: "Full Stack, IT, & Warehouse Operations",
    period: "Jan 2025 — Present",
    points: [
      "Designed and built a full-stack product catalog and internal order management system using Next.js, React, Prisma, and PostgreSQL, replacing a manual Excel to PDF workflow used for product sharing.",
      "Developed internal inventory tools to track product movement and automate stock counts, improving accuracy and reducing manual reconciliation.",
      "Built an internal admin dashboard for real time order management, implementing secure authentication with password hashing and token based auth.",
      "Provided IT support and improved workstation performance by diagnosing hardware/software issues and upgrading critical components such as boot drives and CPUs.",
    ],
  },
  {
    company: "Oceana High School, JUHSD",
    role: "Assistant Track and Field Coach",
    period: "Jan 2021 — June 2021",
    points: [
      "Managed practices for a team of 30+ students",
      "Organized fundraisers for the program",
      "Taught the students about balance between academics and athletics helping students raise their grades",
      "Designed the training plan for the track season, helping athletes improve on their personal bests",
    ],
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">02.</span>
            Where I've Worked
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, i) => (
                <button
                  key={exp.company}
                  onClick={() => setActive(i)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-colors duration-200 border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px ${
                    active === i
                      ? "text-primary border-primary bg-primary/5"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[280px]">
              <h3 className="text-lg font-semibold text-foreground">
                {experiences[active].role}{" "}
                <span className="text-primary">@ {experiences[active].company}</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mt-1 mb-4">
                {experiences[active].period}
              </p>
              <ul className="space-y-3">
                {experiences[active].points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed">
                    <span className="text-primary mt-1 shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
