"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { ChevronDown, ChevronRight, BookOpen, Lightbulb, Code, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

const sidebarSections = [
  {
    title: "Getting Started",
    icon: BookOpen,
    items: [
      { name: "Introduction to Prompt Engineering", href: "/learn/introduction" },
      { name: "Why Prompt Engineering Matters", href: "/learn/why-it-matters" },
      { name: "Basic Concepts", href: "/learn/basic-concepts" },
    ],
  },
  {
    title: "Core Techniques",
    icon: Lightbulb,
    items: [
      { name: "Zero-Shot Prompting", href: "/learn/zero-shot" },
      { name: "Few-Shot Prompting", href: "/learn/few-shot" },
      { name: "Chain of Thought", href: "/learn/chain-of-thought" },
      { name: "Role Prompting", href: "/learn/role-prompting" },
    ],
  },
  {
    title: "Advanced Topics",
    icon: Code,
    items: [
      { name: "Prompt Chaining", href: "/learn/prompt-chaining" },
      { name: "Self-Consistency", href: "/learn/self-consistency" },
      { name: "Tree of Thoughts", href: "/learn/tree-of-thoughts" },
      { name: "ReAct Framework", href: "/learn/react-framework" },
    ],
  },
  {
    title: "Best Practices",
    icon: FileText,
    items: [
      { name: "Writing Clear Instructions", href: "/learn/clear-instructions" },
      { name: "Handling Edge Cases", href: "/learn/edge-cases" },
      { name: "Testing and Iteration", href: "/learn/testing" },
      { name: "Common Mistakes", href: "/learn/common-mistakes" },
    ],
  },
]

export function Sidebar({ className }) {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState(
    sidebarSections.reduce((acc, section) => ({ ...acc, [section.title]: true }), {})
  )

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }))
  }

  return (
    <aside className={cn("w-64 shrink-0", className)}>
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4 pb-8">
        <nav className="flex flex-col gap-6">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex w-full items-center justify-between text-sm font-semibold text-foreground hover:text-primary transition-colors"
                aria-expanded={openSections[section.title]}
              >
                <span className="flex items-center gap-2">
                  <section.icon className="h-4 w-4 text-primary" />
                  {section.title}
                </span>
                {openSections[section.title] ? (
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              {openSections[section.title] && (
                <ul className="mt-2 ml-6 flex flex-col gap-1 border-l border-border pl-4">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "block py-1.5 text-sm transition-colors",
                          pathname === item.href
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export { sidebarSections }
