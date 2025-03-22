import Image from "next/image";
import { Button } from "./ui/button";
import { AnimatedElement } from "./ui/animated-element";

export default function AboutSection() {
  return (
    <section className="px-4 md:px-8 lg:px-16 bg-primary/10">
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        <AnimatedElement type="slideIn" direction="left" className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-72 h-80 overflow-hidden rounded-2xl border-4 border-primary">
            <Image
              src="/images/akshatha-profile.jpg"
              alt="Akshatha Ganji"
              fill
              sizes="(max-width: 768px) 100vw, 288px"
              className="object-cover object-center"
              priority
              quality={100}
            />
          </div>
        </AnimatedElement>

        <AnimatedElement type="slideIn" direction="right" className="w-full md:w-2/3">
          <div className="space-y-4 text-base md:text-lg">
            <p>
              I'm a Data Analyst with over 2 years of experience and a Master's in Information Technology and Management from Illinois Institute of Technology. 
              I specialize in data-driven solutions, business intelligence, and advanced analytics.
            </p>
            <p>
              My expertise includes developing interactive dashboards, automating data pipelines, and applying machine learning techniques 
              for predictive analytics. I'm proficient in Python, R, SQL, Tableau, Power BI, and various cloud platforms including Azure, 
              GCP, and AWS.
            </p>
            <p>
              Currently working as a Research Analyst at Illinois Institute of Technology, I've also gained valuable experience through my 
              internship at CCC Intelligent Solutions and previous role as a Salesforce Data Analyst at Accenture.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <a href="/RESUME_Akshatha_IIT.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <a href="https://github.com/akshathaganji" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="border-primary hover:bg-primary hover:text-white transition-colors duration-300">
                <a href="https://www.linkedin.com/in/akshatha-ganji/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
