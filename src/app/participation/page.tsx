
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ListChecks, Trophy, Laptop, Users, Lightbulb, Car } from "lucide-react"; // Example icons, added Car for Road Safety
import { cn } from "@/lib/utils";

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
    title: "NSO HOCKEY PLAYER",
    category: "Sports", // Changed from Tech to Sports
    description: "Active member of the NSO Hockey team, representing IIT Kharagpur.", // Updated description
    icon: Trophy // Changed from Users to Trophy
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
    title: "NSO HOCKEY PLAYER", // Updated title
    category: "Sports", // Updated category
    description: "Represented IIT Kharagpur as part of the NSO Hockey team in various tournaments.", // Updated description
    icon: Trophy // Updated icon
  }
];

export default function ParticipationPage() {
  // Filter out duplicate entries by title before rendering
  const uniqueParticipationItems = participationItems.reduce((acc, current) => {
    const x = acc.find(item => item.title === current.title && item.category === current.category);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, [] as ParticipationItem[]);


  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-8 text-primary">My Participations</h1>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {uniqueParticipationItems.map((item) => (
          <Card key={item.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <CardHeader className="flex-shrink-0">
              <div className="flex items-center mb-2">
                <item.icon className="h-8 w-8 mr-3 text-primary" />
                <CardTitle className="text-xl font-semibold text-primary">{item.title}</CardTitle>
              </div>
              <CardDescription className={cn(
                "text-sm px-2 py-1 rounded-full inline-block bg-accent/20", // Common styles including background
                item.category === "Sports" || item.category === "Tech" || item.category === "Quizzes" || item.category === "Hackathons"
                  ? "font-bold text-foreground" // For "Sports", "Tech", "Quizzes", or "Hackathons": bold, dark black text
                  : "font-medium text-accent-foreground/80" // Original style for others
              )}>
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
