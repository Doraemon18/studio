
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Briefcase,
  Award,
  Sparkles,
  UsersRound,
  Contact,
  Home,
  GraduationCap,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/projects", label: "Project Portfolio", icon: Briefcase },
  { href: "/skills", label: "Skills", icon: Sparkles },
  { href: "/achievements", label: "Achievements", icon: Award },
  { href: "/participation", label: "Participation", icon: UsersRound },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/contact", label: "Contact", icon: Contact },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu className="p-4 space-y-1">
      {navItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <Link href={item.href} passHref legacyBehavior>
            <SidebarMenuButton
              asChild
              isActive={pathname === item.href}
              className={cn(
                "w-full justify-start",
                pathname === item.href
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
              tooltip={item.label}
            >
              <a>
                <item.icon className="h-5 w-5 mr-3" />
                <span className="group-data-[collapsible=icon]:hidden">
                  {item.label}
                </span>
              </a>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
