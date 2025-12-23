import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  const offices = [
    {
      name: "ENERCAM JAPAN",
      address: ["3 Chome 124 Ohanjaya,", "Katsushika, Tokyo"],
      tel: "81(909) 174 6419",
      emails: ["Japan@enercam.com", "info@enercam.com"]
    },
    {
      name: "ENERCAM CEMAC",
      address: ["14676 Boul de la republique", "Douala, LT. 000 000"],
      tel: "237 (622) 501 9830",
      emails: ["cemac@enercam.com", "info@enercam.com"]
    },
    {
      name: "ENERCAM CANADA",
      address: ["436 Richfield RD NW", "Edmonton, AB. T67 0A7"],
      tel: "1(587) 501 9830",
      emails: ["canada@enercam.com", "info@enercam.com"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t('title')}</h1>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Global Offices</CardTitle>
                <CardDescription>
                  Visit or contact our regional headquarters.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                {offices.map((office, index) => (
                  <div key={index} className="space-y-2 border-b last:border-0 pb-4 last:pb-0">
                    <h3 className="font-semibold text-lg text-primary">{office.name}</h3>
                    <div className="flex items-start gap-3 text-sm">
                       <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                       <div>
                         {office.address.map((line, i) => (
                           <div key={i}>{line}</div>
                         ))}
                       </div>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                       <Phone className="h-4 w-4 text-muted-foreground" />
                       <span>{office.tel}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                       <Mail className="h-4 w-4 text-muted-foreground" />
                       <div className="flex gap-2">
                         {office.emails.map((email, i) => (
                           <a key={i} href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
                         ))}
                       </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>Office Hours</CardTitle>
               </CardHeader>
               <CardContent>
                  <div className="space-y-2">
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span>8:00 AM - 6:00 PM</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span>9:00 AM - 2:00 PM</span>
                     </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span>Closed</span>
                     </div>
                  </div>
               </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>
                Fill out the form below and we will get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('form.name')}
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('form.email')}
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    {t('form.message')}
                  </label>
                  <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">
                  {t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
