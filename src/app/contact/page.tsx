
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { WhatsappIcon } from "@/components/icons/whatsapp-icon";

interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href?: string;
  icon: React.ElementType;
  actionText?: string;
  iconColorClass: string;
  buttonClass?: string;
}

const contactDetails: ContactDetail[] = [
  {
    id: "email",
    label: "Email Address",
    value: "ranvirbusiness32@gmail.com",
    href: "mailto:ranvirbusiness32@gmail.com",
    icon: Mail,
    actionText: "Send Email",
    iconColorClass: "text-[hsl(var(--email))]",
    buttonClass: "border-[hsl(var(--email))] text-[hsl(var(--email))] hover:bg-[hsl(var(--email))]/10 hover:text-[hsl(var(--email))]",
  },
  {
    id: "phone",
    label: "Phone Number",
    value: "+91 9471892601",
    href: "tel:+919471892601",
    icon: Phone,
    actionText: "Call Now",
    iconColorClass: "text-primary-foreground",
    buttonClass: "border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 9199693802",
    href: "https://wa.me/919199693802", // Standard WhatsApp link
    icon: WhatsappIcon, // Using custom WhatsApp icon
    actionText: "Message on WhatsApp",
    iconColorClass: "text-whatsapp",
    buttonClass: "border-whatsapp text-whatsapp hover:bg-whatsapp/10 hover:text-whatsapp",
  },
  {
    id: "location",
    label: "Current Location",
    value: "Kharagpur, West Bengal, India",
    icon: MapPin,
    iconColorClass: "text-primary-foreground",
    // No direct action for location unless it's a map link
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl bg-black text-primary-foreground">
      <h1 className="text-4xl font-bold mb-8 text-primary-foreground text-center">Get In Touch</h1>
      <Card className="shadow-lg bg-card border-muted">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-primary-foreground">Contact Information</CardTitle>
          <CardDescription className="text-primary-foreground/80">Feel free to reach out through any of these channels.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.id} className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:space-x-4 p-4 rounded-lg border border-muted bg-card hover:bg-muted/50 transition-colors">
              <detail.icon className={`${detail.iconColorClass} h-8 w-8 mt-1 sm:mt-0 flex-shrink-0`} />
              <div className="flex-grow">
                <h3 className="text-lg font-medium text-primary-foreground">{detail.label}</h3>
                <p className="text-primary-foreground/80">{detail.value}</p>
              </div>
              {detail.href && detail.actionText && (
                <Button asChild variant="outline" size="sm" className={`w-full sm:w-auto ${detail.buttonClass}`}>
                  <Link href={detail.href} target="_blank" rel="noopener noreferrer">
                    {detail.actionText}
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
