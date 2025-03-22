'use client';

import { AnimatedElement } from "./ui/animated-element";
import { Button } from "./ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16 bg-primary/5">
      <div className="scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          CONTACT ME
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <AnimatedElement type="slideIn" direction="up">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <a href="tel:+18723148584" className="hover:text-primary">
                    +1 (872)-314-8584
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <a href="mailto:ganjiakshatha712@gmail.com" className="hover:text-primary">
                    ganjiakshatha712@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Github className="w-6 h-6 text-primary" />
                  <a href="https://github.com/akshathaganji" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    GitHub Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-primary" />
                  <a href="https://www.linkedin.com/in/akshatha-ganji/" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                  <span>Download Resume</span>
                </a>
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
