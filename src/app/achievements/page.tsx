'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, UploadCloud, PlusCircle } from "lucide-react";

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
    title: "Top Performer - CAD Design Competition",
    type: "Certificate",
    date: "May 2023",
    issuer: "IIT Kharagpur, Civil Engineering Dept.",
    documenturl: "/certificate_(1).pdf",
  },
  {
    id: "2",
    title: "Certificate of Participation - National Tech Symposium",
    type: "Certificate",
    date: "March 2023",
    issuer: "TechCon India",
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
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <h1 className="text-4xl font-bold text-primary">Certificates & Achievements</h1>
        <Button variant="default" size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <PlusCircle className="mr-2 h-5 w-5" />
          Add New (Mock)
        </Button>
      </div>

      <Card className="mb-8 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Upload Your Achievements</CardTitle>
          <CardDescription>
            You can upload up to 50 certificates or achievement proofs in PNG or PDF format.
            (Note: Actual upload functionality is not implemented in this version.)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer bg-muted hover:bg-muted/80 border-primary/50"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <UploadCloud className="w-10 h-10 mb-3 text-primary" />
                <p className="mb-2 text-sm text-muted-foreground">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-muted-foreground">PNG or PDF (MAX. 5MB)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" disabled />
            </label>
          </div>
        </CardContent>
      </Card>

      <h2 className="text-2xl font-semibold mb-6">My Collection</h2>
      {achievements.length === 0 ? (
        <p className="text-muted-foreground">No achievements added yet. Click "Add New" to start!</p>
      ) : (
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-center space-x-4">
                <FileText className="h-10 w-10 text-primary flex-shrink-0" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.type} - Issued by: {achievement.issuer || "N/A"}
                  </p>
                  <p className="text-xs text-muted-foreground">Date: {achievement.date}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    if (achievement.documenturl) {
                      window.open(achievement.documenturl, "_blank");
                    } else {
                      alert("No document available for this achievement.");
                    }
                  }}
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
