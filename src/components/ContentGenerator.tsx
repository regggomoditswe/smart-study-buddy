import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Loader2, Sparkles, Copy, Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { generateContent } from "@/utils/generate.functions";

export function ContentGenerator({ initialTopic }: { initialTopic?: string }) {
  const [topic, setTopic] = useState(initialTopic ?? "");
  const [tone, setTone] = useState<"professional" | "friendly" | "academic" | "simple">("professional");
  const [length, setLength] = useState<"short" | "medium" | "detailed">("medium");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate() {
    if (!topic.trim()) {
      toast.error("Please describe what the email should say.");
      return;
    }
    setLoading(true);
    setOutput("");
    try {
      const res = await generateContent({ data: { contentType: "Professional Email", topic, tone, length } });
      setOutput(res.content);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Something went wrong.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  }

  async function copyOutput() {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    toast.success("Copied to clipboard");
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader>
          <CardTitle>Write your email</CardTitle>
          <CardDescription>Describe the email you need and let AI draft it for you.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">What should the email say?</Label>
            <Textarea
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Example: Write a professional email asking my lecturer for an assignment extension."
              rows={5}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={(v) => setTone(v as typeof tone)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="friendly">Friendly</SelectItem>
                  <SelectItem value="academic">Academic</SelectItem>
                  <SelectItem value="simple">Simple</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Length</Label>
              <Select value={length} onValueChange={(v) => setLength(v as typeof length)}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="short">Short</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="detailed">Detailed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={handleGenerate} disabled={loading} className="flex-1" size="lg">
              {loading ? <Loader2 className="mr-2 size-4 animate-spin" /> : <Sparkles className="mr-2 size-4" />}
              {loading ? "Writing..." : "Generate Email"}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => { setTopic(""); setOutput(""); }}
              disabled={loading}
            >
              <RotateCcw className="mr-2 size-4" /> Clear
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-[var(--shadow-card)]">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Generated Email</CardTitle>
            <CardDescription>Your AI-generated email appears here.</CardDescription>
          </div>
          {output && (
            <Button variant="outline" size="sm" onClick={copyOutput}>
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
            </Button>
          )}
        </CardHeader>
        <CardContent>
          {loading && (
            <div className="flex h-64 items-center justify-center text-muted-foreground">
              <Loader2 className="mr-2 size-5 animate-spin" /> Drafting your email...
            </div>
          )}
          {!loading && !output && (
            <div className="flex h-64 items-center justify-center rounded-lg border border-dashed text-sm text-muted-foreground">
              Your generated email will show here.
            </div>
          )}
          {!loading && output && (
            <div className="prose prose-sm max-w-none text-foreground prose-headings:text-foreground prose-strong:text-foreground">
              <ReactMarkdown>{output}</ReactMarkdown>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
