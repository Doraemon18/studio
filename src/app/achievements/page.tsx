
'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  type: "Certificate" | "Award" | "Recognition";
  date: string;
  issuer?: string;
  documenturl?: string;
}

const achievements: Achievement[] = [
  {
    id: "1",
    title: "Effective Leadership",
    type: "Certificate",
    date: "8th MAY 2025",
    issuer: "HP FOUNDATION & HP LIFE",
    documenturl: "/certificate_(1).pdf",
  },
  {
    id: "2",
    title: "TCS iON Career Edge",
    type: "Certificate",
    date: "15th MAY 2025",
    issuer: "TATA & TCSION",
    documenturl: "/Ranvir_kumar_4804112.pdf", // ✅ Updated URL
  },
  {
    id: "3",
    title: "Dean's List for Academic Excellence",
    type: "Recognition",
    date: "Semester 4, 2022-2023",
    issuer: "IIT Kharagpur",
  },
];

export default function AchievementsPage() {
  const handleViewClick = (url?: string) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("No document available for this achievement.");
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-primary">
          Certificates & Achievements
        </h1>
      </div>

      {achievements.length === 0 ? (
        <p className="text-muted-foreground">No achievements added yet.</p>
      ) : (
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className="shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:space-x-4">
                <FileText className="h-10 w-10 text-primary flex-shrink-0 self-center sm:self-auto" />
                <div className="flex-grow w-full sm:w-auto">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.type} - Issued by: {achievement.issuer || "N/A"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Date: {achievement.date}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto sm:self-auto"
                  onClick={() => handleViewClick(achievement.documenturl)}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <p className="mt-8 text-center text-muted-foreground">
        Showing {achievements.length} of potentially 50 items.
      </p>
    </div>
  );
}

