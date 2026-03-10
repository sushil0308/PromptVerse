import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Code, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const sections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Begin your prompt engineering journey with fundamental concepts and core principles.",
    articles: [
      { name: "Introduction to Prompt Engineering", href: "/learn/introduction" },
      { name: "Why Prompt Engineering Matters", href: "/learn/why-it-matters" },
      { name: "Basic Concepts", href: "/learn/basic-concepts" },
    ],
  },
  {
    icon: Lightbulb,
    title: "Core Techniques",
    description: "Master the essential prompting techniques used by AI practitioners worldwide.",
    articles: [
      { name: "Zero-Shot Prompting", href: "/learn/zero-shot" },
      { name: "Few-Shot Prompting", href: "/learn/few-shot" },
      { name: "Chain of Thought", href: "/learn/chain-of-thought" },
      { name: "Role Prompting", href: "/learn/role-prompting" },
    ],
  },
  {
    icon: Code,
    title: "Advanced Topics",
    description: "Explore sophisticated techniques for complex AI applications and research.",
    articles: [
      { name: "Prompt Chaining", href: "/learn/prompt-chaining" },
      { name: "Self-Consistency", href: "/learn/self-consistency" },
      { name: "Tree of Thoughts", href: "/learn/tree-of-thoughts" },
      { name: "ReAct Framework", href: "/learn/react-framework" },
    ],
  },
  {
    icon: FileText,
    title: "Best Practices",
    description: "Learn industry best practices for writing effective and reliable prompts.",
    articles: [
      { name: "Writing Clear Instructions", href: "/learn/clear-instructions" },
      { name: "Handling Edge Cases", href: "/learn/edge-cases" },
      { name: "Testing and Iteration", href: "/learn/testing" },
      { name: "Common Mistakes", href: "/learn/common-mistakes" },
    ],
  },
]

export default function LearnPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Learn Prompt Engineering
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          A comprehensive guide to mastering the art and science of prompt engineering. 
          Start from the basics and progress to advanced techniques.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <Card key={section.title} className="bg-card border-border">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <section.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-foreground">{section.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {section.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {section.articles.map((article) => (
                  <li key={article.href}>
                    <Link
                      href={article.href}
                      className="group flex items-center justify-between rounded-md p-3 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      <span>{article.name}</span>
                      <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
