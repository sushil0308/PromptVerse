import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Lightbulb,
  Code,
  Zap,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Guides",
    description:
      "Learn prompt engineering from the ground up with our structured documentation covering basic to advanced techniques.",
  },
  {
    icon: Lightbulb,
    title: "Proven Strategies",
    description:
      "Discover battle-tested prompting strategies used by AI practitioners to get consistent, high-quality results.",
  },
  {
    icon: Code,
    title: "Practical Examples",
    description:
      "Access a library of real-world examples showing how to apply prompt engineering across various use cases.",
  },
];

const topics = [
  {
    title: "Zero-Shot Prompting",
    description: "Learn to craft effective prompts without providing examples",
    href: "/learn/zero-shot",
  },
  {
    title: "Few-Shot Prompting",
    description:
      "Master the art of teaching AI through carefully chosen examples",
    href: "/learn/few-shot",
  },
  {
    title: "Chain of Thought",
    description: "Guide AI through step-by-step reasoning for complex tasks",
    href: "/learn/chain-of-thought",
  },
  {
    title: "Role Prompting",
    description: "Leverage personas to shape AI behavior and expertise",
    href: "/learn/role-prompting",
  },
];

const stats = [
  { icon: Zap, value: "15+", label: "Techniques" },
  { icon: Target, value: "50+", label: "Examples" },
  { icon: Users, value: "10K+", label: "Learners" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Master the Art of{" "}
              <span className="text-primary">Prompt Engineering</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              Your comprehensive resource for learning how to communicate
              effectively with AI. From basic techniques to advanced strategies,
              unlock the full potential of large language models.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/learn/introduction"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
              >
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/examples"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-6 py-3 text-lg font-medium text-foreground hover:bg-secondary"
              >
                View Examples
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center"
              >
                <stat.icon className="h-8 w-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why PromptVerse?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Everything you need to become proficient in prompt engineering,
              organized for efficient learning.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="bg-card border-border transition-all duration-300 ease-out hover:scale-95 hover:shadow-lg cursor-pointer"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="mt-4 text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Preview Section */}
      <section className="border-t border-border bg-secondary/30 py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Popular Topics
              </h2>
              <p className="mt-2 text-muted-foreground">
                Explore the most commonly used prompting techniques.
              </p>
            </div>
            <Button asChild variant="outline" className="border-border">
              <Link href="/learn">
                View All Topics
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 ease-out hover:scale-95 hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {topic.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {topic.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Level Up Your AI Skills?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Start your journey to mastering prompt engineering today. Our
              comprehensive guides will take you from beginner to expert.
            </p>
            <div className="mt-10">
              <Link
                href="/learn/introduction"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
