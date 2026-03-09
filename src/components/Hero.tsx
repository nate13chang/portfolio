import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary font-mono text-sm mb-5"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight"
        >
          Nathaniel Chang.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-muted-foreground max-w-xl mt-6 text-lg leading-relaxed"
        >
        Early-career full stack developer experienced in building scalable web applications and automation tools. 
        I focus on solving real-world efficiency problems using modern technologies.        
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-10 flex gap-4"
        >
          <a
            href="#projects"
            className="inline-block px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-200 text-sm font-mono"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded hover:bg-primary/90 transition-colors duration-200 text-sm font-mono"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
