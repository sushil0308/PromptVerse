import Link from "next/link"
import { ArrowLeft, ArrowRight, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ArticleLayout({ 
  title, 
  description, 
  readTime = "5 min read",
  children, 
  prevArticle, 
  nextArticle,
  tableOfContents = []
}) {
  return (
    <article className="max-w-4xl">
      {/* Article Header */}
      <header className="mb-10 border-b border-border pb-10">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Article
          </span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}
      </header>

      {/* Table of Contents (for longer articles) */}
      {tableOfContents.length > 0 && (
        <nav className="mb-10 rounded-lg border border-border bg-card p-6">
          <h2 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
            On This Page
          </h2>
          <ul className="flex flex-col gap-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      {/* Article Content */}
      <div className="prose prose-invert max-w-none">
        {children}
      </div>

      {/* Navigation */}
      <nav className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:justify-between">
        {prevArticle ? (
          <Button asChild variant="outline" className="border-border">
            <Link href={prevArticle.href} className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              <span className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground">Previous</span>
                <span>{prevArticle.title}</span>
              </span>
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {nextArticle && (
          <Button asChild variant="outline" className="border-border">
            <Link href={nextArticle.href} className="flex items-center gap-2">
              <span className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">Next</span>
                <span>{nextArticle.title}</span>
              </span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </nav>
    </article>
  )
}

export function Section({ id, title, children }) {
  return (
    <section id={id} className="mb-12 scroll-mt-20">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>
      <div className="text-muted-foreground leading-relaxed flex flex-col gap-4">
        {children}
      </div>
    </section>
  )
}

export function CodeBlock({ code, language = "text" }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-secondary/80">
        <span className="text-xs text-muted-foreground font-mono uppercase">{language}</span>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm font-mono text-foreground">{code}</code>
      </pre>
    </div>
  )
}

export function Callout({ type = "info", title, children }) {
  const styles = {
    info: "border-primary/50 bg-primary/5",
    warning: "border-yellow-500/50 bg-yellow-500/5",
    tip: "border-green-500/50 bg-green-500/5",
  }

  return (
    <div className={`rounded-lg border p-4 ${styles[type]}`}>
      {title && (
        <h4 className="font-semibold text-foreground mb-2">{title}</h4>
      )}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  )
}
