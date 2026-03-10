import Link from "next/link"
import { ArrowRight, Target, Zap, Shield, Repeat, Brain, Layers, Search, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const strategies = [
  {
    icon: Target,
    title: "Be Specific and Clear",
    description: "Vague prompts lead to vague results. Define exactly what you want, including format, length, tone, and constraints.",
    tips: [
      "State your objective upfront",
      "Specify the desired output format",
      "Include word/character limits when needed",
      "Define the target audience",
    ],
    example: `Instead of: "Write about climate change"
Use: "Write a 200-word summary of the three main causes of climate change, suitable for a high school audience, using simple language and no jargon."`,
  },
  {
    icon: Layers,
    title: "Provide Context",
    description: "Give the AI the background information it needs to understand your request fully.",
    tips: [
      "Include relevant background information",
      "Explain the purpose of your request",
      "Share constraints or limitations",
      "Describe who will use the output",
    ],
    example: `Context: "I'm a marketing manager launching a new eco-friendly water bottle. Our target audience is health-conscious millennials who care about sustainability."
Task: "Write three Instagram captions that highlight our product's environmental benefits."`,
  },
  {
    icon: Brain,
    title: "Use Chain of Thought",
    description: "For complex problems, ask the AI to think through the problem step by step before giving a final answer.",
    tips: [
      "Add 'Let\\'s think step by step' to prompts",
      "Break complex tasks into sub-tasks",
      "Ask for reasoning before conclusions",
      "Request verification of results",
    ],
    example: `"Solve this problem step by step:
A train leaves Station A at 9 AM traveling at 60 mph. Another train leaves Station B at 10 AM traveling at 80 mph toward Station A. If the stations are 280 miles apart, when will the trains meet?"`,
  },
  {
    icon: MessageSquare,
    title: "Assign a Role or Persona",
    description: "Frame the AI as an expert in a relevant field to get more focused, domain-appropriate responses.",
    tips: [
      "Specify expertise and experience level",
      "Define communication style",
      "Include relevant constraints",
      "Match role to the task domain",
    ],
    example: `"You are a senior data scientist with 10 years of experience in machine learning. You explain complex concepts clearly and always consider practical implementation challenges.
Explain the difference between supervised and unsupervised learning to a product manager."`,
  },
  {
    icon: Repeat,
    title: "Iterate and Refine",
    description: "Rarely will your first prompt be perfect. Use feedback to improve your prompts progressively.",
    tips: [
      "Start simple and add complexity",
      "Note what works and what doesn't",
      "Ask for improvements to outputs",
      "Build a library of effective prompts",
    ],
    example: `Round 1: "Write a product description"
Round 2: "Make it more engaging and add a call to action"
Round 3: "Shorten it to 100 words while keeping the emotional appeal"`,
  },
  {
    icon: Shield,
    title: "Set Boundaries and Constraints",
    description: "Define what the AI should NOT do, not just what it should do.",
    tips: [
      "Specify topics to avoid",
      "Define format restrictions",
      "Set factual accuracy requirements",
      "Include ethical guidelines",
    ],
    example: `"Write a product review summary that:
- Does NOT include pricing information
- Does NOT make medical claims
- Focuses only on verified user experiences
- Maintains a neutral, balanced tone"`,
  },
  {
    icon: Search,
    title: "Use Examples (Few-Shot)",
    description: "Show the AI what you want by providing examples of ideal inputs and outputs.",
    tips: [
      "Use 2-5 diverse examples",
      "Ensure examples are correct",
      "Keep formatting consistent",
      "Cover edge cases when relevant",
    ],
    example: `"Convert the following company names to their stock ticker symbols:
Apple Inc. -> AAPL
Microsoft Corporation -> MSFT
Alphabet Inc. -> GOOGL

Now convert: Amazon.com, Inc. ->"`,
  },
  {
    icon: Zap,
    title: "Optimize for Your Use Case",
    description: "Adjust your prompting strategy based on what you're trying to accomplish.",
    tips: [
      "Creative tasks: use higher temperature",
      "Factual tasks: request sources",
      "Analysis: ask for multiple perspectives",
      "Generation: specify style guides",
    ],
    example: `For creative writing: "Write freely and explore unusual ideas..."
For technical docs: "Be precise, use standard terminology, and cite best practices..."
For analysis: "Consider multiple viewpoints and present a balanced assessment..."`,
  },
]

export default function StrategiesPage() {
  return (
    <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Prompting Strategies
          </h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Master these proven strategies to consistently get better results from AI language models.
            Each strategy includes practical tips and real-world examples.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mb-12 p-6 rounded-lg border border-border bg-card">
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Navigation</h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {strategies.map((strategy) => (
              <a
                key={strategy.title}
                href={`#${strategy.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {strategy.title}
              </a>
            ))}
          </div>
        </div>

        {/* Strategies List */}
        <div className="flex flex-col gap-12">
          {strategies.map((strategy, index) => (
            <Card 
              key={strategy.title} 
              id={strategy.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-card border-border scroll-mt-20"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <strategy.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-primary">
                        Strategy {index + 1}
                      </span>
                    </div>
                    <CardTitle className="mt-1 text-foreground text-xl">
                      {strategy.title}
                    </CardTitle>
                    <CardDescription className="mt-2 text-muted-foreground">
                      {strategy.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 lg:grid-cols-2">
                  {/* Tips */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Key Tips
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {strategy.tips.map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Example */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                      Example
                    </h4>
                    <div className="rounded-md bg-secondary/50 p-4 border border-border">
                      <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono">
                        {strategy.example}
                      </pre>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-8 rounded-lg border border-border bg-card">
          <h2 className="text-2xl font-bold text-foreground">Ready to Practice?</h2>
          <p className="mt-2 text-muted-foreground">
            See these strategies in action with our collection of real-world examples.
          </p>
          <Button asChild className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/examples">
              View Examples
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
