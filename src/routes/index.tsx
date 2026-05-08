import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Mail, Lightbulb, Wand2, Workflow, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { ContentGenerator } from "@/components/ContentGenerator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Smart Student Email Generator — AI emails for students" },
      { name: "description", content: "Generate clear, professional emails for lecturers, tutors, and classmates using AI." },
    ],
  }),
  component: Index,
});

const PROMPT_LIBRARY: { title: string; prompt: string }[] = [
  { title: "Assignment extension", prompt: "Write a polite professional email to my lecturer asking for a 3-day extension on my assignment due to illness. Keep it short and respectful." },
  { title: "Clarify an assignment", prompt: "Write a respectful email to my lecturer asking for clarification on the marking criteria for assignment 2. Keep the tone academic and concise." },
  { title: "Request a meeting", prompt: "Write a professional email to my tutor requesting a 15-minute meeting next week to discuss my project topic." },
  { title: "Apologise for missed class", prompt: "Write a polite email to my lecturer apologising for missing today's class and asking what I can do to catch up." },
  { title: "Group project follow-up", prompt: "Write a friendly email to my group members reminding them about our meeting tomorrow and listing the tasks each person is responsible for." },
  { title: "Internship application", prompt: "Write a professional email applying for a summer internship in software engineering, briefly highlighting my studies and one relevant project." },
];

const SKILLS = [
  "AI content generation",
  "Prompt engineering",
  "Prompt optimisation",
  "Email structure & etiquette",
  "Productivity workflow design",
  "Basic web application design",
];

function Index() {
  const scrollToGenerator = () => {
    document.getElementById("generator")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-90" style={{ backgroundImage: "var(--gradient-soft)" }} />
        <div className="container mx-auto px-4 py-16 text-center sm:py-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-[var(--shadow-card)]">
            <Sparkles className="size-3.5 text-primary" />
            AI-powered email assistant for students
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
            Smart Student{" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-hero)" }}>
              Email Generator
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-foreground/80">
            Write clear, professional emails to lecturers, tutors, and classmates — in seconds.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Just describe what you want to say, choose a tone and length, and let AI draft a
            polished email you can copy, edit, and send.
          </p>
          <div className="mt-8">
            <Button size="lg" onClick={scrollToGenerator} className="shadow-[var(--shadow-elegant)]">
              Start Writing <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Generator */}
      <section id="generator" className="container mx-auto px-4 pb-16 pt-4 scroll-mt-8">
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
              Example email prompts
            </h2>
            <p className="mt-3 text-muted-foreground">Ready-to-use prompts for common student emails.</p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROMPT_LIBRARY.map((group) => (
              <Card key={group.title} className="shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-elegant)]">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="size-5" />
                    </div>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">"{group.prompt}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prompt Optimisation Case Study */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Prompt Optimisation Case Study</h2>
          <p className="mt-3 text-muted-foreground">See how a small change in prompt leads to a much better email.</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="border-destructive/30 shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="flex items-center gap-2 text-destructive">
                <XCircle className="size-5" />
                <CardTitle className="text-lg">Basic Prompt</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="rounded-md bg-muted p-4 font-mono text-sm">"Write an email."</p>
              <p className="text-sm text-muted-foreground">
                Too short. It doesn't explain the purpose, audience, tone, or length of the email.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/40 shadow-[var(--shadow-elegant)]">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="size-5" />
                <CardTitle className="text-lg">Improved Prompt</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="rounded-md bg-primary/5 p-4 font-mono text-sm">
                "Write a polite and professional email to my lecturer asking for an
                extension on my assignment. Explain that I need more time due to
                personal challenges. Keep the email respectful, short, and clear."
              </p>
              <p className="text-sm text-muted-foreground">
                This prompt gives the AI the audience, purpose, tone, context, and length —
                so the result is much more useful.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About */}
      <section className="border-t bg-secondary/40">
        <div className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About the Project</h2>
            <p className="mt-4 text-muted-foreground">
              Smart Student Email Generator is an AI-powered productivity tool that helps
              students write clear, well-structured emails for academic and professional
              situations. The project demonstrates how AI, prompt engineering, and simple
              productivity workflows can save students time on everyday writing tasks.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Skills demonstrated
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {SKILLS.map((skill) => (
                <div key={skill} className="flex items-center gap-3 rounded-lg border bg-card p-4 shadow-[var(--shadow-card)]">
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-3">
            {[
              { icon: Wand2, title: "AI Generation", text: "A fast language model drafts your email on demand." },
              { icon: Lightbulb, title: "Prompt Engineering", text: "Tone and length controls shape each prompt for the best result." },
              { icon: Workflow, title: "Productivity Workflow", text: "Built to fit into a student's daily inbox routine." },
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
        </div>
      </section>

      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          Smart Student Email Generator | Week 2 AI Bootcamp Project
        </div>
      </footer>
    </main>
  );
}
