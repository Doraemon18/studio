
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const bio = "My name is Ranvir Kumar, and I am currently a Third-year undergraduate student at the Indian Institute of Technology (IIT) Kharagpur, pursuing a B.Tech in Civil Engineering. I was born on January 5, 2004, in Bihar, and I completed my 10th grade from Kendriya Vidyalaya in 2020 and my 12th grade from Guru Vashistha in 2022.";

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <Card className="overflow-hidden shadow-xl rounded-2xl bg-card">
        <div className="md:flex">
          <div className="md:w-1/3 p-0 relative min-h-[300px] md:min-h-[400px] bg-muted/30">
            <Image
              src="https://picsum.photos/400/600" 
              alt="Ranvir Kumar - Profile Picture"
              layout="fill"
              objectFit="cover"
              className="md:rounded-l-2xl"
              priority
              data-ai-hint="man crossed arms" 
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl lg:text-4xl font-bold text-primary">
                Ranvir Kumar
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-1">
                B.Tech Civil Engineering, IIT Kharagpur
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-base leading-relaxed mb-6 text-foreground/90">
                {bio}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button asChild size="lg" className="bg-instagram text-primary-foreground hover:bg-instagram/90 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-1 sm:flex-none">
                  <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-linkedin text-primary-foreground hover:bg-linkedin/90 rounded-lg shadow-md hover:shadow-lg transition-shadow flex-1 sm:flex-none">
                  <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-5 w-5" />
                    LinkedIn
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
