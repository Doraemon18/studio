
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Instagram } from 'lucide-react';
import { TwitterIcon } from '@/components/icons/twitter-icon'; // Import TwitterIcon

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 bg-gradient-to-r from-violet-800 via-purple-600 to-violet-800 dark:from-violet-950 dark:via-purple-800 dark:to-violet-950">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center">
              {/* Profile Picture Section */}
              <div
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-lg overflow-hidden shadow-2xl border-4 border-primary/30 hover:border-primary/70 transition-all duration-300 transform hover:scale-105 mx-auto"
              >
                <Image
                  src="/Full.jpg" 
                  alt="Ranvir Kumar"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                  sizes="(max-width: 639px) 14rem, (max-width: 767px) 16rem, (max-width: 1023px) 20rem, (max-width: 1279px) 24rem, 28rem"
                  data-ai-hint="profile picture"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6 text-center lg:text-left">
                <div className="space-y-3">
                  <h1 
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground dark:text-primary-foreground"
                    style={{ textShadow: '2px 2px 6px rgba(0, 0, 0, 0.3)' }}
                  >
                    Ranvir Kumar
                  </h1>
                  <p className="text-xl text-primary-foreground/90 md:text-2xl dark:text-primary-foreground/80">
                    B.Tech Civil Engineering, IIT Kharagpur
                  </p>
                </div>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-lg mx-auto lg:mx-0 dark:text-primary-foreground/70">
                  My name is Ranvir Kumar, and I am currently a Third-year undergraduate student at the Indian Institute of Technology (IIT) Kharagpur, pursuing a B.Tech in Civil Engineering. I was born on January 5, 2004, in Bihar, and I completed my 10th grade from Kendriya Vidyalaya in 2020 and my 12th grade from Guru Vashistha in 2022.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button asChild variant="outline" size="md" className="border-transparent text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--instagram))' }}>
                    <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" target="_blank" rel="noopener noreferrer">
                      <Instagram className="mr-2 h-5 w-5" /> Instagram
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="md" className="border-transparent text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--twitter))' }}>
                    <Link href="https://x.com/Ranvir_kgpian" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon className="mr-2 h-5 w-5" /> Twitter
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="md" className="border-transparent text-white hover:opacity-90" style={{ backgroundColor: 'hsl(var(--linkedin))' }}>
                    <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      <footer className="py-6 md:py-8 border-t bg-black">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-white font-bold">
            &copy; {new Date().getFullYear()} Ranvir Kumar. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="https://www.linkedin.com/in/ranvir-kumar-862b4a284/" passHref target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
               <Linkedin className="h-6 w-6 text-linkedin hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://www.instagram.com/ranvir_kgpian/?__pwa=1#" passHref target="_blank" rel="noopener noreferrer" aria-label="Instagram">
               <Instagram className="h-6 w-6 text-instagram hover:opacity-80 transition-opacity" />
            </Link>
            <Link href="https://x.com/Ranvir_kgpian" passHref target="_blank" rel="noopener noreferrer" aria-label="Twitter">
               <TwitterIcon className="h-6 w-6 text-twitter hover:opacity-80 transition-opacity" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

