import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe, Linkedin, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
          <div className="relative h-48 w-48 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/placeholder-avatar.jpg"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-4xl font-bold">John Doe</h1>
              <p className="text-xl text-muted-foreground">Full Stack Developer</p>
            </div>
            <p className="text-muted-foreground">
              Passionate developer with expertise in TypeScript, React, and Next.js.
              Building beautiful and performant web applications with modern
              technologies.
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/yourusername" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://yourportfolio.com" target="_blank">
                  <Globe className="mr-2 h-4 w-4" />
                  Portfolio
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:your.email@example.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About This Project</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-semibold">Purpose</h3>
                <p className="text-muted-foreground">
                  This Quran application was developed as a portfolio project to
                  demonstrate modern web development practices and provide easy
                  access to the Holy Quran. It showcases the implementation of a
                  responsive, accessible, and user-friendly interface for reading
                  and studying the Quran.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="mb-2 text-xl font-semibold">Features</h3>
                <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                  <li>Complete Quran text with translations</li>
                  <li>Search functionality for Surahs</li>
                  <li>Beautiful Arabic typography</li>
                  <li>Responsive design for all devices</li>
                  <li>Dark mode support</li>
                  <li>Fast and efficient performance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Next.js 14</Badge>
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">TypeScript</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">Shadcn UI</Badge>
            <Badge variant="secondary">React Query</Badge>
            <Badge variant="secondary">API Integration</Badge>
          </div>
        </div>

        {/* API Credit */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">API Credit</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  This project utilizes the Quran API provided by Santri Koding:
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://quran-api.santrikoding.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    API Documentation
                  </a>
                </Button>
                <div className="text-sm text-muted-foreground">
                  Features of the API:
                  <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Complete Quran text in Arabic</li>
                    <li>Latin transliteration</li>
                    <li>Indonesian translation</li>
                    <li>Surah information and metadata</li>
                    <li>Audio recitation links</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
