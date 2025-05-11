"use client";

import type { PropsWithChildren } from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  // SidebarTrigger, // No longer using the standalone trigger in the main app bar
  SidebarContent,
  SidebarInset,
  SidebarFooter,
  SidebarRail,
  useSidebar, // Import useSidebar to access sidebar state
} from "@/components/ui/sidebar";
import { SidebarNav } from "./sidebar-nav";
import { Button } from "@/components/ui/button"; // Import Button for the new toggle
import { Menu, X, LayoutDashboard } from "lucide-react"; // Import Menu, X, and LayoutDashboard icons
import Link from "next/link";

// Inner component to consume sidebar context, as hooks must be called within Provider's children
const LayoutContent = ({ children }: PropsWithChildren) => {
  const { open, openMobile, isMobile, toggleSidebar } = useSidebar();

  // Determine if the sidebar is effectively open, considering mobile and desktop states
  const sidebarEffectivelyOpen = isMobile ? openMobile : open;

  return (
    <>
      <Sidebar collapsible="icon">
        <SidebarRail />
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-sidebar-primary hover:text-sidebar-primary/80">
              <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
              <span className="group-data-[collapsible=icon]:hidden">
                Ranvir's Portfolio
              </span>
            </Link>
            {/* Toggle button inside SidebarHeader: shows X if open, Menu if closed */}
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
          {/* <Button variant="ghost" className="w-full justify-start">
            <LogOut className="mr-2 h-4 w-4" />
            Log Out
          </Button> */}
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col">
        {/* Header in main content area - SidebarTrigger removed from here */}
        <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
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
    <SidebarProvider defaultOpen={true}>
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}
