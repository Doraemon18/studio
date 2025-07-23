
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Calendar, Building } from "lucide-react";

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  description: string;
  icon: React.ElementType;
}

const educationHistory: EducationItem[] = [
  {
    id: "1",
    institution: "Indian Institute of Technology, Kharagpur",
    degree: "Bachelor of Technology in Civil Engineering",
    duration: "2023 - 2027",
    description: "Currently a third-year undergraduate student focusing on core civil engineering principles and applications.",
    icon: GraduationCap,
  },
  {
    id: "2",
    institution: "Guru Vashistha Vidyayan",
    degree: "CBSE - Class 12th (Senior Secondary)",
    duration: "Completed 2022",
    description: "Completed my senior secondary education with a focus on Physics, Chemistry and mathematics, achieving a strong academic record.",
    icon: Building,
  },
  {
    id: "3",
    institution: "Kendriya Vidyalaya Sangathan",
    degree: "CBSE - Class 10th (Secondary)",
    duration: "Completed 2020",
    description: "Completed my secondary education, laying the foundational knowledge for future studies.",
    icon: Building,
  },
];

export default function EducationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">Education</h1>
      <div className="space-y-8 relative border-l-2 border-primary/20 pl-8">
        <div className="absolute top-0 left-[-11px] h-full">
           <GraduationCap className="h-6 w-6 text-primary sticky top-8" />
        </div>
        {educationHistory.map((item) => (
          <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                      <CardTitle className="text-xl font-semibold text-primary">{item.institution}</CardTitle>
                      <CardDescription className="text-base font-medium">{item.degree}</CardDescription>
                  </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{item.duration}</span>
              </div>
              <p className="text-base text-foreground/80">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
