"use client";

import type { PropsWithChildren } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarTrigger, // Import SidebarTrigger for the main app bar
  SidebarContent,
  SidebarInset,
  SidebarFooter,
  // SidebarRail, // No longer needed for offcanvas
  useSidebar, 
} from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { Button } from "@/components/ui/button"; 
import { Menu, X, LayoutDashboard } from "lucide-react"; 
import Link from "next/link";

// Inner component to consume sidebar context, as hooks must be called within Provider's children
const LayoutContent = ({ children }: PropsWithChildren) => {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();

  // Determine if the sidebar is effectively open, considering mobile and desktop states
  const sidebarEffectivelyOpen = isMobile ? openMobile : open;

  return (
    <>
      <Sidebar collapsible="offcanvas"> {/* Changed from "icon" to "offcanvas" */}
        {/* <SidebarRail /> Removed as it's for icon mode */}
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-sidebar-primary hover:text-sidebar-primary/80">
              <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
              {/* The span with group-data-[collapsible=icon]:hidden will naturally be visible as data-collapsible won't be 'icon' */}
              <span> 
                Ranvir's Portfolio
              </span>
            </Link>
            {/* Toggle button inside SidebarHeader: shows X if open, Menu if closed (but sidebar is offscreen when closed) */}
            {/* This button primarily acts as the 'Close' (X) button now */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              aria-label={sidebarEffectivelyOpen ? "Close sidebar" : "Open sidebar"}
            >
              {sidebarEffectivelyOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </SidebarHeader>
        <SidebarContent className="p-0">
          <SidebarNav />
        </SidebarContent>
        <SidebarFooter className="p-4 mt-auto">
          {/* Optional: Add a footer item like logout if needed in future */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
           {/* Add SidebarTrigger here to open the sidebar when it's offcanvas */}
           {/* This trigger will show a Menu icon and will be responsible for opening the sidebar */}
           <SidebarTrigger />
           <div className="flex-grow"></div>
           {/* Optional: User Menu / Settings */}
        </header>
        <main className="flex-1 overflow-auto p-4 sm:p-6">
            {children}
        </main>
      </SidebarInset>
    </>
  );
};

export function MainLayout({ children }: PropsWithChildren) {
  return (
    // defaultOpen={true} makes the sidebar expanded by default on desktop
    // For offcanvas, perhaps defaultOpen should be false, but user can control via cookie.
    // Keeping defaultOpen={true} for now, or let cookie manage it.
    <SidebarProvider defaultOpen={true}> 
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
