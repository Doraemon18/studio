
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const skills = [
  { name: "Team Work", category: "Soft Skills" },
  { name: "Good Communication", category: "Soft Skills" },
  { name: "AutoCAD", category: "Technical Skills" },
  { name: "3D Modelling (Revit)", category: "Technical Skills" },
  { name: "Editing in Canva", category: "Design Skills" },
  { name: "Problem Solving", category: "Soft Skills" },
  { name: "Data Science", category: "Technical Skills" },
  { name: "SQL", category: "Technical Skills" },
  { name: "Abstract Reasoning", category: "Soft Skills" },
  { name: "Analytical Reasoning", category: "Soft Skills" },
  { name: "Quantitative Ability", category: "Soft Skills" },
  { name: "Data Interpretation", category: "Technical Skills" },
  { name: "Verbal Ability", category: "Soft Skills" },
  { name: "Metlab", category: "Technical Skills" },
  { name: "Machine Learning (Fundamentals)", category: "Technical Skills" },
  { name: "Basic knowledge of Python and C++", category: "Technical Skills" },
  { name: "Photoshop", category: "Design Skills" },
];

const skillCategories = Array.from(new Set(skills.map(skill => skill.category)));

export default function SkillsPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">My Skills</h1>
      
      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map(category => (
          <Card key={category} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {skills.filter(skill => skill.category === category).map((skill) => (
                  <li key={skill.name} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 mr-3 text-green-500 flex-shrink-0" />
                    <span className="text-base">{skill.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12 shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-primary">Highlighted Skills</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary border-primary/30">
              {skill.name}
            </Badge>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
