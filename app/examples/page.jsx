"use client"

import { useState } from "react"
import { Copy, Check, Code, FileText, MessageSquare, Briefcase, Palette, Database, Search, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", name: "All Examples", icon: null },
  { id: "writing", name: "Writing", icon: FileText },
  { id: "coding", name: "Coding", icon: Code },
  { id: "business", name: "Business", icon: Briefcase },
  { id: "creative", name: "Creative", icon: Palette },
  { id: "data", name: "Data & Analysis", icon: Database },
]

const examples = [
  {
    id: 1,
    category: "writing",
    title: "Blog Post Introduction",
    description: "Generate an engaging blog post introduction with hook and thesis.",
    prompt: `You are an experienced content writer specializing in technology blogs.

Write an engaging introduction (150 words max) for a blog post about "The Rise of AI in Healthcare."

Requirements:
- Start with a compelling hook (statistic, question, or surprising fact)
- Briefly outline what the post will cover
- End with a thesis statement
- Tone: Professional yet accessible
- Target audience: Healthcare professionals interested in technology`,
    tags: ["Content", "Marketing", "SEO"],
  },
  {
    id: 2,
    category: "coding",
    title: "Code Review Assistant",
    description: "Get detailed code review feedback with suggestions for improvement.",
    prompt: `You are a senior software engineer conducting a code review. Analyze the provided code and give constructive feedback.

Review this JavaScript function:
\`\`\`javascript
function getUserData(id) {
  const user = database.find(u => u.id == id);
  if (user != null) {
    return { name: user.name, email: user.email, password: user.password };
  }
  return null;
}
\`\`\`

Provide feedback on:
1. Security concerns
2. Code quality issues
3. Best practices violations
4. Suggested improvements with code examples

Format your response as a structured code review with severity levels (critical, major, minor).`,
    tags: ["JavaScript", "Security", "Best Practices"],
  },
  {
    id: 3,
    category: "business",
    title: "Meeting Summary Generator",
    description: "Transform meeting notes into structured summaries with action items.",
    prompt: `You are an executive assistant skilled at distilling complex discussions into clear summaries.

Convert these raw meeting notes into a structured summary:

---
Meeting Notes:
- John mentioned Q3 sales down 15%
- Need to look at marketing spend
- Sarah will check with legal about the contract
- New product launch delayed - supply chain issues
- Budget review next Tuesday
- Tom's team needs 2 more developers
- Customer feedback positive on new UI
- Action: everyone submit reports by Friday
---

Create a summary with:
1. **Key Decisions** (bulleted list)
2. **Discussion Points** (brief paragraph)
3. **Action Items** (table with Owner, Task, Deadline)
4. **Next Steps** (numbered list)

Keep it concise and professional.`,
    tags: ["Productivity", "Management", "Documentation"],
  },
  {
    id: 4,
    category: "creative",
    title: "Product Name Generator",
    description: "Generate creative product names with explanations for each suggestion.",
    prompt: `You are a brand strategist at a top creative agency, known for developing memorable brand names.

Generate 5 unique product name options for:
- Product: A sustainable water bottle made from recycled ocean plastic
- Target audience: Environmentally conscious millennials and Gen Z
- Brand values: Sustainability, innovation, ocean conservation
- Competitors: S'well, Hydro Flask, Yeti

For each name suggestion, provide:
1. The name
2. Tagline option (5-7 words)
3. Why it works (1-2 sentences explaining the rationale)
4. Potential concerns or considerations

Format as a numbered list with clear sections for each option.`,
    tags: ["Branding", "Marketing", "Creative"],
  },
  {
    id: 5,
    category: "data",
    title: "SQL Query Generator",
    description: "Convert natural language requests into optimized SQL queries.",
    prompt: `You are a database expert helping to write SQL queries. The database has the following schema:

Tables:
- users (id, name, email, created_at, subscription_type)
- orders (id, user_id, total_amount, status, created_at)
- products (id, name, category, price, stock_quantity)
- order_items (id, order_id, product_id, quantity, unit_price)

Write an optimized SQL query for:
"Find the top 10 customers by total spending in the last 30 days, including their names, emails, total orders, and total amount spent. Only include customers with 'premium' subscription."

Provide:
1. The SQL query with proper formatting
2. Explanation of what each part does
3. Any indexes that would improve performance
4. Alternative approaches if applicable`,
    tags: ["SQL", "Database", "Analytics"],
  },
  {
    id: 6,
    category: "writing",
    title: "Email Response Composer",
    description: "Craft professional email responses for various scenarios.",
    prompt: `You are a communication specialist helping draft professional emails.

Context: A customer is upset because their order arrived 5 days late and one item was damaged.

Write a response email that:
1. Acknowledges their frustration sincerely
2. Takes responsibility without making excuses
3. Offers a concrete solution (refund + 20% discount on next order)
4. Provides a timeline for resolution
5. Ends with a commitment to better service

Tone: Empathetic, professional, and solution-focused
Length: 150-200 words
Include a subject line`,
    tags: ["Customer Service", "Communication", "Email"],
  },
  {
    id: 7,
    category: "coding",
    title: "API Documentation Writer",
    description: "Generate comprehensive API documentation from endpoint descriptions.",
    prompt: `You are a technical writer creating API documentation.

Document this API endpoint:
- Endpoint: POST /api/v1/users/register
- Purpose: Create a new user account
- Required fields: email (string), password (string, min 8 chars), name (string)
- Optional fields: phone (string), company (string), role (enum: user, admin, default: user)
- Returns: User object with id, email, name, createdAt
- Possible errors: 400 (validation), 409 (email exists), 500 (server error)

Create documentation including:
1. **Endpoint Overview** (brief description)
2. **Request** (method, URL, headers, body schema with types)
3. **Response** (success and error examples in JSON)
4. **Code Examples** (curl, JavaScript fetch, Python requests)
5. **Notes** (rate limits, authentication requirements)

Use markdown formatting.`,
    tags: ["API", "Documentation", "Technical Writing"],
  },
  {
    id: 8,
    category: "business",
    title: "SWOT Analysis Generator",
    description: "Create a comprehensive SWOT analysis for business planning.",
    prompt: `You are a business strategy consultant conducting a SWOT analysis.

Company: A mid-sized coffee shop chain (50 locations) considering expansion into a new city
Context:
- Strong brand recognition in current region
- Known for premium quality and ethical sourcing
- Higher prices than competitors
- Limited delivery/mobile ordering capabilities
- The new city has a growing young professional population
- Two major competitors already established there

Create a detailed SWOT analysis with:

**Strengths** (4-5 points)
**Weaknesses** (4-5 points)
**Opportunities** (4-5 points)
**Threats** (4-5 points)

For each point:
- State the factor clearly
- Explain its significance (1 sentence)

Conclude with 2-3 strategic recommendations based on the analysis.`,
    tags: ["Strategy", "Planning", "Analysis"],
  },
  {
    id: 9,
    category: "creative",
    title: "Story Premise Generator",
    description: "Create unique story premises with character and plot details.",
    prompt: `You are a creative writing instructor helping develop story ideas.

Generate a unique story premise for a:
- Genre: Science Fiction / Thriller
- Setting: Near future (2040-2050)
- Theme: The ethics of AI consciousness
- Tone: Thought-provoking with moments of tension

Provide:
1. **Logline** (1-2 sentences summarizing the core conflict)
2. **Protagonist** (name, background, key flaw, goal)
3. **Antagonist** (entity/person, motivation, relationship to protagonist)
4. **Central Conflict** (what makes resolution difficult)
5. **Unique Hook** (what makes this story stand out)
6. **Three Act Structure** (brief outline of beginning, middle, end)

Make it original - avoid common AI tropes like "robot uprising" or "evil corporation."`,
    tags: ["Fiction", "Storytelling", "Creative Writing"],
  },
  {
    id: 10,
    category: "data",
    title: "Data Insights Interpreter",
    description: "Transform raw data findings into actionable business insights.",
    prompt: `You are a data analyst presenting findings to non-technical stakeholders.

Raw findings from e-commerce analysis:
- Conversion rate: 2.3% (industry avg: 2.8%)
- Cart abandonment: 73% (industry avg: 69%)
- Mobile traffic: 67% of total
- Mobile conversion: 1.1%
- Desktop conversion: 4.2%
- Top exit page: checkout/payment (42% of exits)
- Average session duration: 3.2 min
- Pages with highest bounce: product pages (58%)
- Returning customer rate: 28%

Transform this into an executive summary that includes:
1. **Key Findings** (3-4 main takeaways in plain language)
2. **Problem Areas** (ranked by business impact)
3. **Opportunities** (specific, actionable recommendations)
4. **Recommended Next Steps** (prioritized list with expected impact)

Avoid jargon. Use clear language a CEO would understand.
Include rough estimates of potential impact where relevant.`,
    tags: ["Analytics", "Business Intelligence", "Reporting"],
  },
]

function ExampleCard({ example }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(example.prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="bg-card border-border h-full flex flex-col">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <CardTitle className="text-foreground">{example.title}</CardTitle>
            <CardDescription className="mt-1 text-muted-foreground">
              {example.description}
            </CardDescription>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {example.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 rounded-md bg-secondary/50 p-4 border border-border overflow-hidden">
          <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-mono line-clamp-[12]">
            {example.prompt}
          </pre>
        </div>
        <Button
          variant="outline"
          size="sm"
          className="mt-4 w-full border-border"
          onClick={copyToClipboard}
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4 text-green-500" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="mr-2 h-4 w-4" />
              Copy Prompt
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function ExamplesPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredExamples =
    activeCategory === "all"
      ? examples
      : examples.filter((e) => e.category === activeCategory)

  return (
    <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Prompt Examples
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          A curated collection of ready-to-use prompts for various tasks. Copy, customize, 
          and use them as starting points for your own prompts.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={cn(
              "px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2",
              activeCategory === category.id
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {category.icon && <category.icon className="h-4 w-4" />}
            {category.name}
          </button>
        ))}
      </div>

      {/* Examples Count */}
      <div className="mb-8 text-center text-sm text-muted-foreground">
        Showing {filteredExamples.length} {filteredExamples.length === 1 ? "example" : "examples"}
      </div>

      {/* Examples Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredExamples.map((example) => (
          <ExampleCard key={example.id} example={example} />
        ))}
      </div>

      {/* Empty State */}
      {filteredExamples.length === 0 && (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-medium text-foreground">No examples found</h3>
          <p className="mt-2 text-muted-foreground">
            Try selecting a different category.
          </p>
        </div>
      )}
    </div>
  )
}
