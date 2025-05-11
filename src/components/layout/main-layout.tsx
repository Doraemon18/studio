
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
      <Sidebar collapsible="offcanvas">
        <SidebarHeader className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold text-lg text-sidebar-primary hover:text-sidebar-primary/80">
              <LayoutDashboard className="h-5 w-5 flex-shrink-0" />
              <span> 
                Ranvir's Portfolio
              </span>
            </Link>
            {/* Close button inside SidebarHeader, visible only when sidebar is open */}
            {sidebarEffectivelyOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                aria-label="Close sidebar"
              >
                <X className="h-5 w-5" />
              </Button>
            )}
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
           {/* SidebarTrigger (Menu icon) to open the sidebar, hidden when sidebar is open */}
           {!sidebarEffectivelyOpen && <SidebarTrigger />}
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
    <SidebarProvider defaultOpen={false}> {/* Changed defaultOpen to false for offcanvas behavior */}
      <LayoutContent>{children}</LayoutContent>
    </SidebarProvider>
  );
}

