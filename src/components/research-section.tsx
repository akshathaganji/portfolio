import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AnimatedElement } from "./ui/animated-element";

interface ResearchProps {
  title: string;
  description: string;
  tools: string;
  image: string;
  sourceLink?: string;
}

function ResearchCard({ research, index }: { research: ResearchProps; index: number }) {
  return (
    <AnimatedElement
      type="slideIn"
      direction="up"
      delay={index * 0.1}
      className="w-full"
    >
      <Card className="overflow-hidden h-full flex flex-col border-none shadow-lg scroll-reveal">
        <div className="relative w-full h-48">
          <Image
            src={research.image}
            alt={research.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain bg-gray-100 p-4"
            crossOrigin="anonymous"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-lg">{research.title}</CardTitle>
          <CardDescription className="text-xs">{research.tools}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm">{research.description}</p>
        </CardContent>
        {research.sourceLink && (
          <CardFooter>
            <Button variant="outline" size="sm" asChild>
              <a href={research.sourceLink} target="_blank" rel="noreferrer">Source Code</a>
            </Button>
          </CardFooter>
        )}
      </Card>
    </AnimatedElement>
  );
}

export default function ResearchSection() {
  const researchProjects: ResearchProps[] = [
    {
      title: "Optimization of LLMs with RAG and MTKD",
      description: "Novel architecture for optimizing Large Language Models using a combination of Retrieval Augmented Generation and Multi Teacher Knowledge Distillation method.",
      tools: "Tools Used: Python, PyTorch, Flan-T5, Knowledge Distillation",
      image: "https://ext.same-assets.com/1247681252/2744373296.png",
      sourceLink: "https://colab.research.google.com/drive/1BfOTTPxj6fJA4NEXOz0TrVomYM59vw3K?usp=sharing"
    },
    {
      title: "Meta-Reflexion",
      description: "A system where user queries generate responses that are judged multiple times, with the best judgment used to refine the initial response, creating a loop that continues until evaluation criteria are met.",
      tools: "Tools Used: Python, Huggingface, Gemini 1.5 Pro, LLama3.1-8b-Instruct",
      image: "https://ext.same-assets.com/1247681252/2085720568.png",
      sourceLink: "https://github.com/slanglabs-projects/MetaReflexion"
    },
    {
      title: "MCTS-MetaJudge",
      description: "A framework combining Monte-Carlo Tree Search with a custom self-refine algorithm to enhance the logical reasoning capabilities of LLMs, demonstrating that smaller models can achieve performance comparable to larger ones.",
      tools: "Tools Used: Python, Gemini 1.5 Pro, Phi3, Llama3.1-8b-Instruct",
      image: "https://ext.same-assets.com/1247681252/2485224244.png",
      sourceLink: "https://github.com/slanglabs-projects/MCTS-MetaJudge"
    }
  ];

  return (
    <section id="research" className="py-20 px-4 md:px-8 lg:px-16 bg-secondary/5 mt-10">
      <div className="scroll-reveal">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          RESEARCH
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {researchProjects.map((research, index) => (
          <ResearchCard key={research.title} research={research} index={index} />
        ))}
      </div>
    </section>
  );
}
