
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ListChecks, Trophy, Laptop, Users, Lightbulb, Car } from "lucide-react"; // Example icons, added Car for Road Safety

interface ParticipationItem {
  id: string;
  title: string;
  category: "Sports" | "Tech" | "Quizzes" | "Hackathons" | "Cultural";
  description?: string;
  icon: React.ElementType;
}

const participationItems: ParticipationItem[] = [
  {
    id: "1",
    title: "Inter-Hall Cricket Tournament",
    category: "Sports",
    description: "Represented my hall in the annual IIT KGP Inter Hall cricket league.",
    icon: Trophy
  },
  {
    id: "2",
    title: "Intra-Hall Tennis Competition",
    category: "Sports",
    description: "Participated in singles and doubles tennis matches.",
    icon: Trophy 
  },
  {
    id: "3",
    title: "Web Development Workshop",
    category: "Tech",
    description: "Attended a 3-day workshop on modern web technologies.",
    icon: Laptop
  },
  {
    id: "4",
    title: "General Knowledge Quiz Finals",
    category: "Quizzes",
    description: "Participated Variety of Quizzes Competition.",
    icon: Lightbulb
  },
  {
    id: "5",
    title: "Road Safety Hackathon", 
    category: "Hackathons",
    description: "Participating Road Safety Hackathon organises by Indian Government",
    icon: Car 
  },
  {
    id: "6",
    title: "Robotics Club Member",
    category: "Tech",
    description: "Active member, contributing to various robotics projects and competitions.",
    icon: Users
  }
];

export default function ParticipationPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">My Participations</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {participationItems.map((item) => (
          <Card key={item.id} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center mb-2">
                <item.icon className="h-8 w-8 mr-3 text-primary" />
                <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
              </div>
              <CardDescription className="text-sm font-medium text-accent-foreground/80 bg-accent/20 px-2 py-1 rounded-full inline-block">
                {item.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              {item.description && (
                <p className="text-base text-muted-foreground">{item.description}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
       <p className="mt-12 text-center text-muted-foreground">Actively seeking new opportunities and experiences!</p>
    </div>
  );
}

