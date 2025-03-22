import { AnimatedElement } from "./ui/animated-element";

interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <AnimatedElement type="slideIn" direction="up">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        {title}
      </h2>
    </AnimatedElement>
  );
}