import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-10">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="hidden md:block h-px bg-border flex-1 max-w-xs" />
          </h2>


          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-5 text-muted-foreground leading-relaxed">

            <p>
              Hi, I'm Nate, an early career software developer who enjoys solving problems in
              practical and meaningful ways. My current work focuses on automating and
              improving internal workflows. I start by observing how teams currently work,
              identifying inefficiencies, and then building tools to make those processes
              smoother and more reliable. Most of these solutions take the form of
              full-stack applications where I design APIs, backend services, data models,
              and responsive interfaces for interacting with them.
            </p>

            <p>
              Outside of software, I've been running for most of my teen and adult life. I competed in
              cross country and track throughout high school and at the NCAA level for UC Santa Cruz in
              college, and I still train and race long-distance events today. Running has
              strongly influenced how I approach engineering: consistency, discipline, and
              long-term incremental improvement.
            </p>

            <p>
              Recently I've also been spending time reading philosophy and science fiction,
              including <em>The Myth of Sisyphus</em> by Albert Camus and
              <em>The Three-Body Problem</em> by Liu Cixin.
            </p>

              <p className="text-foreground font-semibold">
                Currently Exploring
              </p>

              <div className="space-y-4 text-sm font-mono">

                <div>
                  <p className="text-foreground mb-1">Hardware Project</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {["Soldering", "Circuitry", "Electronics"].map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="text-primary">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-foreground mb-1">Mobile App Project</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {["React Native", "Expo"].map((tech) => (
                      <li key={tech} className="flex items-center gap-2">
                        <span className="text-primary">▹</span> {tech}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>


            <div className="relative group">
              <div className="relative rounded overflow-hidden">
                <div className="w-full aspect-square flex items-center justify-center">
                  <span className="text-6xl">
                    <img
                      src={'/portfolio/face.jpg'}>
                    </img>
                  </span>
                </div>
                <div className="absolute inset-0 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
