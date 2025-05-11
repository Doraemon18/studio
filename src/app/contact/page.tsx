
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
}

const contactDetails: ContactDetail[] = [
  {
    id: "email",
    label: "Email Address",
    value: "ranvirbusiness32@gmail.com",
    href: "mailto:ranvirbusiness32@gmail.com",
    icon: Mail,
    actionText: "Send Email"
  },
  {
    id: "phone",
    label: "Phone Number",
    value: "+91 9471892601",
    href: "tel:+919471892601",
    icon: Phone,
    actionText: "Call Now"
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+91 9199693802",
    href: "https://wa.me/919199693802", // Standard WhatsApp link
    icon: WhatsappIcon, // Using custom WhatsApp icon
    actionText: "Message on WhatsApp"
  },
  {
    id: "location",
    label: "Current Location",
    value: "Kharagpur, West Bengal, India",
    icon: MapPin,
    // No direct action for location unless it's a map link
  },
];

export default function ContactPage() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-2xl">
      <h1 className="text-4xl font-bold mb-8 text-primary text-center">Get In Touch</h1>
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold">Contact Information</CardTitle>
          <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {contactDetails.map((detail) => (
            <div key={detail.id} className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
              <detail.icon className={detail.id === 'whatsapp' ? "h-8 w-8 text-whatsapp mt-1 flex-shrink-0" : "h-8 w-8 text-primary mt-1 flex-shrink-0"} />
              <div className="flex-grow">
                <h3 className="text-lg font-medium">{detail.label}</h3>
                <p className="text-muted-foreground">{detail.value}</p>
              </div>
              {detail.href && detail.actionText && (
                <Button asChild variant="outline" size="sm" className={`self-center border-primary text-primary hover:bg-primary/10 ${detail.id === 'whatsapp' ? 'border-whatsapp text-whatsapp hover:bg-whatsapp/10' : ''}`}>
                  <Link href={detail.href} target="_blank" rel="noopener noreferrer">
                    {detail.actionText}
                  </Link>
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
      {/* Optional: Add a contact form here in the future */}
      {/* <Card className="mt-8 shadow-lg">
        <CardHeader>
          <CardTitle>Send a Message</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Contact form coming soon...</p>
        </CardContent>
      </Card> */}
    </div>
  );
}
