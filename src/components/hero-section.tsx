import { Button } from "@/components/ui/button";
import { AnimatedElement } from "./ui/animated-element";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-[100vh] flex flex-col justify-center py-16 px-4 md:px-8 lg:px-16 pt-24">
      <div className="max-w-4xl">
        <AnimatedElement type="slideIn" direction="left" duration={0.7}>
          <h1 className="text-4xl md:text-6xl font-bold">
            Hey there! I'm{" "}
            <span className="gradient-text">Akshatha Ganji</span>,
          </h1>
        </AnimatedElement>

        <AnimatedElement type="slideIn" direction="left" delay={0.3} duration={0.7}>
          <h2 className="text-2xl md:text-4xl font-bold mt-2">
            an ML | Data Scientist
          </h2>
        </AnimatedElement>

        <AnimatedElement type="fadeIn" delay={0.6} duration={0.8}>
          <div className="mt-10">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-5 text-base">
              <a href="#about">
                Know More
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut"
                  }}
                >
                  ↓
                </motion.span>
              </a>
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
