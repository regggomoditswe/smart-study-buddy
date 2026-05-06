import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, BookOpen, Mail, FileText, PenLine, Presentation, Hash, Lightbulb, Wand2, Workflow } from "lucide-react";
import { ContentGenerator } from "@/components/ContentGenerator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Student Content Generator — AI writing for students" },
      { name: "description", content: "Generate emails, study notes, assignment outlines, blog posts, presentation scripts and social captions in seconds." },
    ],
  }),
  component: Index,
});

const PROMPT_LIBRARY: { icon: React.ComponentType<{ className?: string }>; type: string; examples: string[] }[] = [
  { icon: Mail, type: "Professional Email", examples: [
    "Email to professor requesting a one-week extension on my essay",
    "Follow-up email after a job interview for a marketing internship",
  ]},
  { icon: BookOpen, type: "Study Notes", examples: [
    "Concise notes on photosynthesis for high school biology",
    "Summary of key WWII causes for a history exam",
  ]},
  { icon: FileText, type: "Assignment Outline", examples: [
    "Outline for a 1500-word essay on climate change policy",
    "Research paper outline on AI in education",
  ]},
  { icon: PenLine, type: "Blog Post", examples: [
    "Blog post: 5 study techniques that actually work",
    "Blog post about my first semester in college",
  ]},
  { icon: Presentation, type: "Presentation Script", examples: [
    "10-slide presentation script on renewable energy",
    "Pitch script for a student startup idea (3 minutes)",
  ]},
  { icon: Hash, type: "Social Media Caption", examples: [
    "Instagram caption celebrating finishing finals week",
    "LinkedIn caption announcing my summer internship",
  ]},
];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-90"
          style={{ backgroundImage: "var(--gradient-soft)" }}
        />
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <Sparkles className="size-3.5 text-primary" />
            AI-powered writing assistant for students
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Smart Student{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--gradient-hero)" }}
            >
              Content Generator
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Turn a quick idea into polished emails, notes, outlines, blog posts,
            presentation scripts, and social captions — in seconds.
          </p>
        </div>
      </header>

      {/* Generator */}
      <section className="container mx-auto px-4 pb-16">
        <ContentGenerator />
      </section>

      {/* Prompt Library */}
      <section className="border-t bg-secondary/40">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
              <Lightbulb className="size-4" /> Prompt Library
            </div>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Need inspiration? Try one of these.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Example prompts for every content type.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROMPT_LIBRARY.map((group) => {
              const Icon = group.icon;
              return (
                <Card key={group.type} className="shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </div>
                      <CardTitle className="text-lg">{group.type}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {group.examples.map((ex) => (
                        <li key={ex} className="flex gap-2">
                          <span className="text-primary">›</span>
                          <span>{ex}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About the Project</h2>
          <p className="mt-4 text-muted-foreground">
            This tool demonstrates how modern AI can support real student workflows.
            It combines AI content generation, thoughtful prompt engineering, and a
            simple productivity-focused interface.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
          {[
            { icon: Wand2, title: "AI Generation", text: "Powered by a fast, capable language model to draft content on demand." },
            { icon: Lightbulb, title: "Prompt Engineering", text: "Tone and length controls shape each prompt for the best results." },
            { icon: Workflow, title: "Productivity Workflow", text: "Designed to fit into a student's daily writing and study routine." },
          ].map(({ icon: Icon, title, text }) => (
            <Card key={title} className="shadow-[var(--shadow-card)]">
              <CardContent className="pt-6">
                <Icon className="size-6 text-primary" />
                <h3 className="mt-3 font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          Built for students · Powered by AI
        </div>
      </footer>
    </main>
  );
}
