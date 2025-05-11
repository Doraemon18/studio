
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Briefcase, Lightbulb, Award, Users, Linkedin, Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-background via-background to-background dark:from-primary/5 dark:via-background dark:to-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                    Ranvir Kumar
                  </h1>
                  <p className="text-xl text-muted-foreground md:text-2xl">
                    B.Tech Civil Engineering, IIT Kharagpur
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-lg mx-auto lg:mx-0">
                    My name is Ranvir Kumar, and I am currently a Third-year undergraduate student at the Indian Institute of Technology (IIT) Kharagpur, pursuing a B.Tech in Civil Engineering. I was born on January 5, 2004, in Bihar, and I completed my 10th grade from Kendriya Vidyalaya in 2020 and my 12th grade from Guru Vashistha in 2022.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row justify-center lg:justify-start">
                  {/* Removed "Get in Touch" button as per user request */}
                </div>
                <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                  <Button asChild variant="outline" size="lg" className="border-transparent text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--instagram))' }}>
                    <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" /> Instagram
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-transparent text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--linkedin))' }}>
                    <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="w-full md:w-2/3 lg:w-full flex justify-center items-center p-4 md:p-0 mx-auto lg:mx-0">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-primary/30 hover:border-primary/70 transition-all duration-300 transform hover:scale-105">
                  <Image
                    src="/profile-picture.jpg"
                    alt="Ranvir Kumar"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-full"
                    priority
                    sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, (max-width: 1024px) 14rem, (max-width: 1280px) 16rem, 18rem"
                    data-ai-hint="profile picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links/Overview Section - REMOVED AS PER USER REQUEST */}
        
      </main>

      <footer className="py-6 md:py-8 border-t bg-background">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Ranvir Kumar. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" passHref target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" passHref target="_blank" rel="noopener noreferrer" aria-label="Instagram">
               <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

