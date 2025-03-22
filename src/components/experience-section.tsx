'use client';

import { AnimatedElement } from "./ui/animated-element";

const experiences = [
  {
    title: "Research Analyst",
    company: "Illinois Institute of Technology",
    location: "Chicago, IL",
    period: "Jan 2025 - Present",
    points: [
      "Conducted comprehensive research and data analysis to support ongoing projects, utilizing advanced statistical tools and programming languages to ensure data accuracy and integrity.",
      "Collaborated with faculty and cross-functional research teams to design experiments, interpret results, and prepare technical reports and presentations for academic publications.",
      "Managed large datasets, automating data processing workflows using Python and SQL, leading to a 30% reduction in analysis time and enhanced research efficiency."
    ]
  },
  {
    title: "Business Intelligence Engineer Intern",
    company: "CCC Intelligent Solutions",
    location: "Chicago, IL",
    period: "Jun 2024 - Dec 2024",
    points: [
      "Designed and maintained interactive dashboards in Tableau, ensuring alignment with client requirements and upholding the integrity of key metrics.",
      "Conducted comprehensive query formulation in Dbeaver and prepared QA Documentation to validate KPI Consistency between databases and data visualizations.",
      "Facilitated and participated in business meetings to gather and interpret business requirements, translating them into actionable insights for project goals.",
      "Simplified complex data findings through storytelling in dashboards, reports, and visualizations, ensuring accessibility, and clarity for stakeholders."
    ]
  },
  {
    title: "Salesforce Data Analyst",
    company: "Accenture",
    location: "Bangalore, India",
    period: "Sep 2021- Dec 2022",
    points: [
      "Configured and customized Salesforce to streamline data workflows, using declarative tools like Process Builder, Workflow Rules, and Validation Rules to automate business processes and enhance data accuracy.",
      "Developed and maintained custom Salesforce objects, fields, and record types, aligning data structures with business requirements to support insightful data analysis.",
      "Created and optimized custom reports and dashboards in Salesforce, providing enhanced data visibility and actionable insights to support data-driven decision-making."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          EXPERIENCE
        </h2>
      </div>

      <div className="max-w-6xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <AnimatedElement
            key={exp.title}
            type="slideIn"
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                  <p className="text-lg">{exp.company}</p>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <p className="text-gray-600 md:text-right mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {exp.points.map((point, i) => (
                  <li key={i} className="pl-2">{point}</li>
                ))}
              </ul>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </section>
  );
}