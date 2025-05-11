
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // Avatar components are not used for the main profile picture here.
import { ArrowRight, Download, Briefcase, Lightbulb, Award, Users, Linkedin, Instagram } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-background to-background">
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
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Link href="/projects">
                      View Projects <Briefcase className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                    <Link href="/contact">
                      Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
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
                    src="/images/profile-ranvir.jpg"
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

        {/* Quick Links/Overview Section */}
        <section className="w-full py-12 md:py-24 lg:py-20 border-t">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-10 sm:text-4xl text-primary">Explore My Profile</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Projects", description: "View my technical and academic projects.", href: "/projects", icon: Briefcase },
                { title: "Skills", description: "Discover my technical and soft skills.", href: "/skills", icon: Lightbulb },
                { title: "Achievements", description: "See my awards and certifications.", href: "/achievements", icon: Award },
                { title: "Participation", description: "My involvement in various activities.", href: "/participation", icon: Users },
              ].map((item) => (
                <Card key={item.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-semibold text-primary">{item.title}</CardTitle>
                    <item.icon className="w-6 h-6 text-accent" />
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm mb-4">{item.description}</CardDescription>
                    <Button asChild variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary/10">
                      <Link href={item.href}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action for Resume (Optional) */}
        {/* <section className="w-full py-12 md:py-24 bg-muted/40">
          <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl text-primary">
              Want to know more?
            </h3>
            <p className="max-w-[600px] text-muted-foreground">
              Download my resume for a detailed overview of my qualifications and experience.
              (Note: Resume upload/download functionality is a mock-up.)
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Download className="mr-2 h-5 w-5" /> Download Resume (Mock)
            </Button>
          </div>
        </section> */}
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
            {/* Add other social links here if needed */}
          </div>
        </div>
      </footer>
    </div>
  );
}
