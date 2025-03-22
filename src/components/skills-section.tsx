'use client';

import { AnimatedElement } from "./ui/animated-element";

const skillCategories = [
  {
    title: "Programming & Statistical Tools",
    skills: ["Python", "R", "SQL", "Spark", "MATLAB", "NumPy"]
  },
  {
    title: "Database Technologies",
    skills: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB", "Snowflake", "Oracle"]
  },
  {
    title: "Cloud Platforms",
    skills: ["Microsoft Azure", "Google Cloud Platform (GCP)", "Amazon Web Services (AWS)"]
  },
  {
    title: "Big Data & ETL Tools",
    skills: ["Azure Databricks", "Azure Data Factory", "BigQuery"]
  },
  {
    title: "Developer Tools",
    skills: ["Tableau", "Power BI", "MS Excel", "Git", "Power Apps", "Power Automate", "Jenkins", "Postman", "Azure DevOps", "JIRA", "Confluence", "Alteryx"]
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          SKILLS
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <AnimatedElement
            key={category.title}
            type="slideIn"
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 h-full">
              <h3 className="text-xl font-semibold text-primary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>

      <div className="mt-12 text-center">
        <AnimatedElement type="slideIn" direction="up">
          <div className="inline-block bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Certifications</h3>
            <div className="space-y-2">
              <p>Salesforce Certified Administrator (Credential: 2409829)</p>
              <p>Tableau A-Z: Hands On- Tableau Training for Data Science</p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}