import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-mono text-sm mb-4">05. What's Next?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently looking for new opportunities. Whether you have a question, 
            a project idea, or just want to say hi, my inbox is always open. 
            I'll try my best to get back to you!
          </p>

          <a
            href="mailto:natecpaic@gmail.com"
            className="inline-block px-8 py-4 border border-primary text-primary rounded hover:bg-primary/10 transition-colors duration-200 text-sm font-mono"
          >
            Say Hello
          </a>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Github, href: "https://github.com/nate13chang", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/nathaniel-chang-96336a25b/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:natecpaic@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Contact;
