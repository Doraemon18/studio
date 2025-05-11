
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  details?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "3-D School Model using Revit Software",
    description: "Developed a comprehensive 3D architectural model of a school campus utilizing Autodesk Revit. This project involved detailed modeling of structures, interiors, and site layout.",
    imageUrl: "/Picture1.png",
    imageHint: "architecture 3d model",
    details: [
      "Software Used: Autodesk Revit 2022",
      "Key Features: Parametric modeling, detailed component creation, site planning.",
      "Outcome: A realistic and scalable 3D representation of a school facility."
    ]
  },
  {
    id: "2",
    title: "Sustainable Urban Drainage System Design (Conceptual)",
    description: "Conceptual design for a sustainable urban drainage system (SuDS) for a residential area, focusing on rainwater harvesting and flood mitigation.",
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "urban planning water",
    details: [
      "Focus Areas: Green roofs, permeable pavements, retention ponds.",
      "Tools: AutoCAD for initial layouts, manual calculations for flow rates."
    ]
  },
  {
    id: "3",
    title: "Portfolio Website (This Project!)",
    description: "Development of this personal portfolio website using Next.js, TypeScript, and Tailwind CSS, showcasing skills and projects.",
    imageUrl: "https://picsum.photos/600/400",
    imageHint: "web design code",
    details: [
      "Technologies: Next.js, React, TypeScript, Tailwind CSS, ShadCN UI.",
      "Features: Responsive design, component-based architecture, dynamic content sections."
    ]
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Project Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            {project.imageUrl && (
              <div className="relative w-full h-64">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  data-ai-hint={project.imageHint || "project image"}
                />
              </div>
            )}
            <CardHeader className="p-6">
              <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <CardDescription className="text-base mb-4">{project.description}</CardDescription>
              {project.details && project.details.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Details:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {project.details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-12 text-center text-muted-foreground">More projects coming soon...</p>
    </div>
  );
}
