
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const bio = "My name is Ranvir Kumar, and I am currently a Third-year undergraduate student at the Indian Institute of Technology (IIT) Kharagpur, pursuing a B.Tech in Civil Engineering. I was born on January 5, 2004, in Bihar, and I completed my 10th grade from Kendriya Vidyalaya in 2020 and my 12th grade from Guru Vashistha in 2022.";

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <Card className="overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/3 p-0 relative">
            <Image
              src="https://picsum.photos/400/600"
              alt="Ranvir Kumar - Profile Picture"
              width={400}
              height={600}
              className="object-cover w-full h-full md:rounded-l-lg"
              priority
              data-ai-hint="man standing professional"
            />
          </div>
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-3xl font-bold text-primary">
                Ranvir Kumar
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                B.Tech Civil Engineering, IIT Kharagpur
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <p className="text-base leading-relaxed mb-6">
                {bio}
              </p>
              <div className="flex space-x-4">
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                  <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" target="_blank" rel="noopener noreferrer">
                    <Instagram className="mr-2 h-5 w-5" />
                    Instagram
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
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
