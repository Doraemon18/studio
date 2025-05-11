"use client";

import type { PropsWithChildren } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger,
  SidebarContent,
  SidebarInset,
  SidebarFooter,
  SidebarRail, // Import SidebarRail
} from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";

export function MainLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider defaultOpen={true}> {/* Changed defaultOpen to true */}
      <Sidebar collapsible="icon"> {/* Added collapsible="icon" */}
        <SidebarRail /> {/* Added SidebarRail for desktop toggle */}
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg text-sidebar-primary hover:text-sidebar-primary/80">
              Ranvir's Portfolio
            </Link>
            {/* SidebarTrigger is often placed outside or within SidebarInset for mobile */}
          </div>
        </SidebarHeader>
        <SidebarContent className="p-0">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter className="p-4 mt-auto">
          {/* Optional: Add a footer item like logout if needed in future */}
          {/* <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button> */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
            {/* Mobile Trigger for Sidebar */}
            <div className="md:hidden">
                 <SidebarTrigger />
            </div>
           {/* Placeholder for potential top bar content */}
           <div className="flex-grow"></div>
           {/* Optional: User Menu / Settings */}
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
