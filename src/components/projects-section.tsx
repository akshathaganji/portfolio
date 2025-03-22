import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AnimatedElement } from "./ui/animated-element";

const projects = [
  {
    title: "Stock Market Sentiment Analysis",
    description: "Developed a sentiment analysis model using NLP techniques to forecast stock price trends based on Twitter data. Utilized Python libraries like Pandas and TensorFlow for data mining, addressing class imbalance, splitting datasets, and text preprocessing.",
    link: "Git URL",
    tech: ["Python", "NLP", "TensorFlow", "Pandas"]
  },
  {
    title: "Lung Cancer Data Analysis Project",
    description: "Performed comprehensive data exploration and hypothesis testing in R to identify key factors influencing lung cancer. Created interactive Power BI dashboards using DAX functions to visualize trends and deliver actionable insights.",
    link: "Git URL",
    tech: ["R", "Power BI", "DAX", "Data Analysis"]
  },
  {
    title: "CTA Train Management System",
    description: "Developed an Oracle SQL-based train management system with complex queries, stored procedures, and an integrated web interface using HTML, CSS, and JavaScript for efficient schedule, reservation, and maintenance management.",
    link: "Git URL",
    tech: ["Oracle SQL", "HTML", "CSS", "JavaScript"]
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          PROJECTS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <AnimatedElement
            key={project.title}
            type="slideIn"
            direction={index % 2 === 0 ? "left" : "right"}
            className="w-full"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <Button variant="outline" className="w-full border-primary hover:bg-primary hover:text-white">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
}
