'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imageHint?: string;
  details?: string[];
  viewUrls?: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "3-D School Model using Revit Software",
    description: "Developed a comprehensive 3D architectural model of a school campus utilizing Autodesk Revit. This project involved detailed modeling of structures, interiors, and site layout.",
    imageUrl: "/3D View 8.jpg",
    imageHint: "architecture 3d model",
    details: [
      "Software Used: Autodesk Revit 2022",
      "Key Features: Parametric modeling, detailed component creation, site planning.",
      "Outcome: A realistic and scalable 3D representation of a school facility.",
      "Project Link: https://drive.google.com/drive/folders/1pXUmIyfkK5uGvas19YlcuYeUnoT2Vztp?usp=drive_link"
    ],
    viewUrls: [
      "/IMAGES/Picture11.png",
      "/IMAGES/Picture2.png",
      "/IMAGES/Picture3.png"
    ],
  },
  {
    id: "2",
    title: "Financial Modelling & Valuation",
    description: "Completed a course on Financial Modelling & Valuation covering Excel tools, P&L creation, DCF modeling, Pivot Tables, and a practical case study on Netflix valuation.",
    imageUrl: "/871358_599e.webp",
    imageHint: "Financial Modelling & Valuation",
    details: [ 
      "Focus Areas: Financial Modelling & Valuation Excel-based financial analysis, P&L creation, DCF modeling, and practical valuation case study (Netflix).",
      "Project Link: https://drive.google.com/drive/folders/1MCOjr7ESOR5_zyATzisMj5Oj61o_D11R?usp=drive_link",
    ],
    viewUrls: [
      "/certificate_TD-RANV-FM-1838.pdf",
    ],
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
    ],
    viewUrls: ["#"],
  },
];

export default function ProjectsPage() {
  const handleViewClick = React.useCallback((urls?: string[]) => {
    if (!urls || urls.length === 0 || urls[0] === "#") return;
    for (const url of urls) {
      window.open(url, "_blank");
    }
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Project Portfolio</h1>
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            {project.imageUrl && (
              <div className="relative w-full h-64 flex-shrink-0">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover"
                  data-ai-hint={project.imageHint || "project image"}
                />
              </div>
            )}
            <CardHeader className="p-6 flex-shrink-0">
              <CardTitle className="text-2xl font-semibold text-primary">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex flex-col flex-grow">
              <div className="flex-grow">
                <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                {project.details?.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Details:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {project.details.map((detail, index) => {
                        if (detail.startsWith("Project Link: ")) {
                          const url = detail.substring("Project Link: ".length);
                          return (
                            <li key={index}>
                              Project Link:{" "}
                              <Link
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline"
                              >
                                Open Project Folder
                              </Link>
                            </li>
                          );
                        }
                        return <li key={index}>{detail}</li>;
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <div className="mt-auto self-start">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => handleViewClick(project.viewUrls)}
                  disabled={!project.viewUrls || project.viewUrls.length === 0 || project.viewUrls[0] === "#"}
                >
                  View
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
